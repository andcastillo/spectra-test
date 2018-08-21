'use strict';

const debug = require('debug')('dev/getTangent');

const data = require('../jsgraph/data.json');

const getMediator = require('./getMediator');
const getPerpendicular = require('./getPerpendicular');
const linesIntersection = require('./linesIntersection');


/**
  * Returns a line tangent to a point on a spectrum
  * @param {object} [data] - Your spectrum data in the format {x:[x1, x2, ...], y:[y1, y2, ...]}
  * @param {number} [index = 1] - Index of the data corresponding to the point you're interested in finding the tangent (0 = first value in the data)
  * @param {object} [options={}]
  * @return {object} tangent
  */
function getTangent(data, index) {
  var mediator1 = getMediator(data, index - 1);
  var mediator2 = getMediator(data, index);

  var centerPoint = linesIntersection(mediator1, mediator2);

  return tangent;
}
