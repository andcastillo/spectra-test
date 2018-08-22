'use strict';

const debug = require('debug')('dev/linesIntersection');

/**
  * Intersection point of two lines
  * @param {object} [line1] - In the format { slope: -0.33, offset: 55 }
  * @param {object} [line2] - In the format { slope: -0.33, offset: 55 }
  * @return {object} point - In the format {x: 3, y: 54}
  */
function linesIntersection(line1, line2) {
  if (line1.offset === line2.offset && line1.slope === line2.slope) {
    debug('The two lines are overlapping.');
  } else if (line1.slope === line2.slope) {
    debug('The two lines are parallel.');
  } else {
    var x = (line1.offset - line2.offset) / (line1.slope - line2.slope);
    var y = line1.slope * x + line1.offset;
    var point = { x: x, y: y };
    debug('intersection point:', point);
  }
  return point;
}

module.exports = linesIntersection;
