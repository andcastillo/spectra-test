'use strict';

const debug = require('debug')('dev/getLine');

const data = require('../jsgraph/data.json');

const getMediator = require('./lineFunctions/getMediator');
const getPointOnLine = require('./lineFunctions/getPointOnLine');

debug('annotation =', getLine(getMediator, data, 4, 10));

/**
  * Creates a file line.json with line annotation for a point of a spetrum
  * @param {function} [lineReturningFct] - Function that returns a line for a point of a spectrum in the format { slope: -0.33, offset: 55 }
  * @param {data} [data] - Your spectrum data in the format {x:[x1, x2, ...], y:[y1, y2, ...]}
  * @param {number} [index] - point of the data for which you want the line
  * @param {number} [segmentLength] - The length of the segments in graph units
  */

function getLine(lineReturningFct, data, index, segmentLength) {
  var line = lineReturningFct(data, index);
  debug('line =', line);

  var dx = segmentLength * Math.cos(Math.atan(line.slope)) / 2;
  var point1 = getPointOnLine(line, index - dx); // not index!It should be midPoint.x
  var point2 = getPointOnLine(line, index + dx);

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

module.exports = getLine;
