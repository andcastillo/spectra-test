'use strict';

const getMediator = require('./lineFunctions/getMediator');
const getLineFromPoints = require('./lineFunctions/getLineFromPoints');
const linesIntersection = require('./lineFunctions/linesIntersection');
const getPerpendicular = require('./lineFunctions/getPerpendicular');

/**
 * Returns a line tangent to a point on a spectrum
 * @param {object} [data] - Your spectrum data in the format {x:[x1, x2, ...], y:[y1, y2, ...]}
 * @param {number} [index = 1] - Index of the data corresponding to the point you're interested in finding the tangent (0 = first value in the data)
 * @param {object} [options={}]
 * @param {number} [options.threshold = 1e-14] - Over this uncertainty, returns an error message
 * @return {object} tangent
 */
function getTangent(data, index, options = {}) {
  const { threshold = 1e-14 } = options;

  var xs = data.x;
  var ys = data.y;

  var previousPoint = { x: xs[index - 1], y: ys[index - 1] };
  var point = { x: xs[index], y: ys[index] };
  var nextPoint = { x: xs[index + 1], y: ys[index + 1] };

  var mediator1 = getMediator(previousPoint, point, { threshold: threshold });
  var mediator2 = getMediator(point, nextPoint, { threshold: threshold });
  var mediator3 = getMediator(previousPoint, nextPoint, {
    threshold: threshold
  });

  var centerPoint1 = linesIntersection(mediator1, mediator2);
  var centerPoint2 = linesIntersection(mediator2, mediator3);

  var diffX = Math.abs(centerPoint1.x - centerPoint2.x);
  var diffY = Math.abs(centerPoint1.y - centerPoint2.y);

  if (diffX > threshold || diffY > threshold) {
    throw new Error(
      `The three mediators do not intercept in a unique point. index: ${index} differences: x ${diffX}  y ${diffY}  VS threshold ${threshold}`
    );
  } else {
    var centerPoint = centerPoint1;
  }

  var radiusLine = getLineFromPoints(centerPoint, point);
  var tangent = getPerpendicular(radiusLine, point, { threshold: threshold });

  return tangent;
}

module.exports = getTangent;
