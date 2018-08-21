'use strict';

const fs = require('fs');

const debug = require('debug')('dev/getlines');

const data = require('../jsgraph/data.json');

const getMediator = require('./getMediator');
const getPointOnLine = require('./getPointOnLine');

debug(getLines(getMediator, data));

/**
  * Creates a file lines.json with line annotations for all the points of a spetrum
  * @param {function} [lineReturningFct] - Function that returns a line for a point of a spectrum in the format { slope: -0.33, offset: 55 }
  * @param {data} [data] - Your spectrum data in the format {x:[x1, x2, ...], y:[y1, y2, ...]}
  * @param {number} [segmentLength] - The length of the segments in graph units
  */
function getLines(lineReturningFct, data, segmentLength) {
  var lines = [];


  for (var index = 0; index < data.x.length - 1; index++) {
    var line = lineReturningFct(data, index);
    debug('line =', line);

    var dx = segmentLength * Math.cos(Math.atan(line.slope)) / 2;
    var point1 = getPointOnLine(line, index - dx); // not index!It should be midPoint.x
    var point2 = getPointOnLine(line, index + dx);

    var segment = {
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

    lines.push(segment);
  }

  fs.writeFileSync(`${__dirname}/lines.json`, JSON.stringify(lines), 'utf8');
}

module.exports = getLines;
