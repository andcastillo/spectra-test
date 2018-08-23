'use strict';

const debug = require('debug')('dev/getMediator');

const getPerpendicular = require('./getPerpendicular');
// const getLineFromPoints = require('./getLineFromPoints');

// const data = require('../jsgraph/data.json');

// debug(getMediator(data, 1));

/**
 * Returns the mediator to a point on a line
 * @param {object} [data] - Your spectrum data in the format {x:[x1, x2, ...], y:[y1, y2, ...]}
 * @param {number} [index] - First of the two points defining the line
 * @return {object} mediator - In the format { slope: -0.33, offset: 55 }
 */
function getMediator(data, index = 0) {
  var xs = data.x;
  var ys = data.y;

  if (xs[index] === xs[index + 1]) {
    var line = { xOffset: xs[index] };
  } else {
    // getLineFromPoints() possible to use in this case?
    var slope = (ys[index + 1] - ys[index]) / (xs[index + 1] - xs[index]);
    var offset = ys[index] - slope * xs[index];
    line = { slope: slope, offset: offset };

    debug('line =', line);
  }

  var midPoint = {
    x: (xs[index + 1] + xs[index]) / 2,
    y: (ys[index + 1] + ys[index]) / 2
  };
  var mediator = getPerpendicular(line, midPoint);

  return mediator;
}

module.exports = getMediator;
