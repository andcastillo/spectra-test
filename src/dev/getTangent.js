'use strict';

const debug = require('debug')('dev/getTangent');

const data = require('../jsgraph/data.json');

const getMediator = require('./lineFunctions/getMediator');
const getLineFromPoints = require('./lineFunctions/getLineFromPoints');
const linesIntersection = require('./lineFunctions/linesIntersection');
const getPerpendicular = require('./lineFunctions/getPerpendicular');
const getAnnotations = require('./getAnnotations');

var tangent = getAnnotations(getTangent, data, { from: 2, to: 3 }); // getLine returns an annotation object

debug('tangent annotations:', tangent);

debug('tangent =', getTangent(data, 2));

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
  var mediator3 = getMediator(data, index + 1);

  var centerPoint1 = linesIntersection(mediator1, mediator2);
  var centerPoint2 = linesIntersection(mediator2, mediator3);
  var centerPoint3 = linesIntersection(mediator3, mediator1);
  if (centerPoint1 === centerPoint2 === centerPoint3) {
    var centerPoint = centerPoint1;
  } else {
    debug('centerPoint1:', centerPoint1);
    debug('centerPoint2:', centerPoint2);
    debug('centerPoint3:', centerPoint3);
    throw new Error('The three mediators do not intercept in a unique point.');
  }
  var radiusLine = getLineFromPoints(centerPoint, { x: data.x[index], y: data.y[index] });
  var tangent = getPerpendicular(radiusLine, { x: data.x[index], y: data.y[index] });

  return tangent;
}

module.exports = getTangent;
