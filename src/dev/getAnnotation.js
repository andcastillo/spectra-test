'use strict';

const getPointOnLine = require('./lineFunctions/getPointOnLine');

/**
 * Creates a file line.json with line annotation for a point of a spetrum
 * @param {function} [lineReturningFct] - Function that returns a line for a point of a spectrum in the format { slope: -0.33, offset: 55 }
 * @param {data} [data] - Your spectrum data in the format {x:[x1, x2, ...], y:[y1, y2, ...]}
 * @param {number} [index] - point of the data for which you want the line
 * @param {object} [options = {}]
 * @param {number} [options.segmentLength = 10] - Length of the segment / line in graph units
 */

function getAnnotation(lineReturningFct, data, index, options = {}) {
  const { segmentLength = 10 } = options;

  var line = lineReturningFct(data, index);

  if (!isNaN(line.xOffset)) {
    var point1 = { x: line.xOffset, y: data.y[index] - segmentLength / 2 };
    var point2 = { x: line.xOffset, y: data.y[index] + segmentLength / 2 };
  } else {
    var dx = (segmentLength * Math.cos(Math.atan(line.slope))) / 2;
    point1 = getPointOnLine(line, data.x[index] - dx); // not data.x[index]!It should be midPoint.x (for some cases)
    point2 = getPointOnLine(line, data.x[index] + dx);
  }

  var annotation = {
    type: 'line',
    data: {
      position: [point1, point2],
      strokeWidth: '2px',
      strokeColor: 'green'
    }
  };

  return annotation;
}

module.exports = getAnnotation;
