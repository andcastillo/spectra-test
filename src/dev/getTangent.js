'use strict';

const fs = require('fs');

const debug = require('debug')('dev/getTangent');

const data = require('../jsgraph/data.json');

const getMediator = require('./lineFunctions/getMediator');
const getLineFromPoints = require('./lineFunctions/getLineFromPoints');
const linesIntersection = require('./lineFunctions/linesIntersection');
const getPerpendicular = require('./lineFunctions/getPerpendicular');
const getLine = require('./getAnnotation');

var annotation = [];

var tangent = getLine(getTangent, data, 5, 10);

annotation = annotation.push(tangent);

debug('annotation =', annotation);
fs.writeFileSync(`${__dirname}/tangent.json`, JSON.stringify(annotation), 'utf8');

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

  var centerPoint = linesIntersection(mediator1, mediator2);
  var radiusLine = getLineFromPoints(centerPoint, { x: data.x[index], y: data.y[index] });
  var tangent = getPerpendicular(radiusLine, { x: data.x[index], y: data.y[index] });

  return tangent;
}

module.exports = getTangent;
