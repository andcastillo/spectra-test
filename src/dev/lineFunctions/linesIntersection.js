'use strict';

const debug = require('debug')('dev/linesIntersection');

/**
 * Intersection point of two lines
 * @param {object} [line1] - In the format { slope: -0.33, offset: 55 }
 * @param {object} [line2] - In the format { slope: -0.33, offset: 55 }
 * @return {object} point - In the format {x: 3, y: 54}
 */
function linesIntersection(line1, line2) {
  var point;
  var x;
  var y;
  if (line1.slope === line2.slope) {
    if (line1.offset === line2.offset) {
      throw new Error('The two lines are overlapping.');
    } else {
      throw new Error('The two lines are parallel.');
    }
  } else if (
    (!isNaN(line1.xOffset) || !isNaN(line2.xOffset)) &&
    line1.xOffset === line2.xOffset
  ) {
    throw new Error('The two lines are overlapping.');
  } else {
    if (!isNaN(line1.xOffset)) {
      x = line1.xOffset;
      y = line2.slope * x + line2.offset;
    } else if (!isNaN(line2.xOffset)) {
      x = line2.xOffset;
      y = line1.slope * x + line1.offset;
    } else {
      x = (line1.offset - line2.offset) / (line2.slope - line1.slope);
      y = line1.slope * x + line1.offset;
    }
    point = { x: x, y: y };
    debug('intersection point:', point);
    return point;
  }
}
module.exports = linesIntersection;
