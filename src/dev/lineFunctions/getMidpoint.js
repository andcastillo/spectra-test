'use strict';

/**
 * Returns the point on a the segment equidistant to two given points that define it
 * @param {object} [point1] - First of the two points defining the segment in the format { x: 42, y: 5 }
 * @param {object} [point2] - Second point defining the segment in the format { x: 42, y: 5 }
 * @return {object} midpoint - In the format { x: 2, y: 79 }
 */
function getMidpoint(point1, point2) {
  var midPoint = {
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2
  };

  return midPoint;
}

module.exports = getMidpoint;
