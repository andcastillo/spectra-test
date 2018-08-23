'use strict';

/**
 * Returns a point on a line for a given x coordinate
 * @param {object} [line] - The line to which you want the perpendicular in the format { slope: 3, offset: 6 }
 * @param {number} [x] - The x value for which the y coordinate is desired
 * @return {object} point - In the format { x: 5, y: 8 }
 */
function getPointOnLine(line, x) {
  if (line.xOffset) {
    throw new Error(
      'No point exists on that line for this x value (line is vertical).'
    );
  } else {
    var y = line.slope * x + line.offset;
    var point = { x: x, y: y };

    return point;
  }
}

module.exports = getPointOnLine;
