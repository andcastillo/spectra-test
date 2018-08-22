'use strict';

const debug = require('debug')('dev/getAnnotation');

const data = require('../jsgraph/data.json');

const getMediator = require('./lineFunctions/getMediator');
const getPointOnLine = require('./lineFunctions/getPointOnLine');

debug('annotation =', getAnnotation(getMediator, data, 4));

/**
  * Creates a file line.json with line annotation for a point of a spetrum
  * @param {function} [lineReturningFct] - Function that returns a line for a point of a spectrum in the format { slope: -0.33, offset: 55 }
  * @param {data} [data] - Your spectrum data in the format {x:[x1, x2, ...], y:[y1, y2, ...]}
  * @param {number} [index] - point of the data for which you want the line
  * @param {object} [options = {}]
  * @param {number} [options.segmentLength = 10] - Length of the segment / line in graph units
  */

function getAnnotation(lineReturningFct, data, index, options = {}) {
  const {
    segmentLength = 10
  } = options;

  var line = lineReturningFct(data, index);
  debug('line =', line);

  var dx = segmentLength * Math.cos(Math.atan(line.slope)) / 2;
  debug('segmentLength:', segmentLength);
  debug('line slope:', line.slope);
  debug('dx:', dx);
  var point1 = getPointOnLine(line, index - dx); // not index!It should be midPoint.x
  var point2 = getPointOnLine(line, index + dx);
  debug('point1:', point1, '   point2:', point2);

  var annotation = {
    type: 'line',
    data: {
      position: [
        point1,
        point2
      ],
      strokeWidth: '2px',
      strokeColor: 'green'
    }
  };

  return annotation;
}

module.exports = getAnnotation;
