'use strict';

const debug = require('debug')('dev/getPerpendicular');

debug(getPerpendicular({ slope: 3, offset: 6 }, { x: 3, y: 54 }));

/**
  * Returns the perpendicular to a point on a line
  * @param {object} [line] - The line to which you want the perpendicular in the format { slope: 3, offset: 6 }
  * @param {object} [point] - The point on the line in the format {x: 3, y: 54}
  * @return {object} perpendicular - In the format { slope: -0.33, offset: 55 }
  */
function getPerpendicular(line, point) {
/* interesting syntax
  var perpendicular = {
    slope: -1 / line.slope,
    get offset() {
      return point.y - this.slope * point.x;
    }
  };
*/
  if (line.xOffset) {
    var slope = 0;
  } else {
    slope = -1 / line.slope;
  }
  var offset = point.y - slope * point.x;
  var perpendicular = { slope: slope, offset: offset };

  return perpendicular;
}

module.exports = getPerpendicular;
