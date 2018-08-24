'use strict';

const getPerpendicular = require('./getPerpendicular');
const getLineFromPoints = require('./getLineFromPoints');
const getMidpoint = require('./getMidpoint');

/**
 * Returns the mediator of a segment defined by two points
 * @param {object} [point1] - First of the two points defining the segment in the format { x: 42, y:5 }
 * @param {object} [point2] - Second point defining the segment in the format { x: 42, y:5 }
 * @param {object} [options={}]
 * @param {number} [options.threshold = 1e-14] - Over this uncertainty, returns an error message
 * @return {object} mediator - In the format { slope: -0.33, offset: 55 }
 */
function getMediator(point1, point2, options = {}) {
  const { threshold = 1e-14 } = options;
  if (point1.x === point2.x) {
    var line = { xOffset: point1.x };
  } else {
    // getLineFromPoints() possible to use in this case?
    line = getLineFromPoints(point1, point2);
  }

  var midpoint = getMidpoint(point1, point2);

  var mediator = getPerpendicular(line, midpoint, { threshold: threshold });

  return mediator;
}

module.exports = getMediator;
