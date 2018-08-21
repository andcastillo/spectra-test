'use strict';

const debug = require('debug')('dev/getLineFromPoints');

debug(getLineFromPoints({ x: 3, y: 6 }, { x: 4, y: 54 }));

/**
  * Returns line that passes through two given points
  * @param {object} [point1] - In the format {x: 3, y: 54}
  * @param {object} [point2] - In the format {x: 3, y: 54}
  * @return {object} line - In the format { slope: -0.33, offset: 55 }
  */
function getLineFromPoints(point1, point2) {
  var slope = (point2.y - point1.y) / (point2.x - point1.x);
  var offset = point1.y - slope * point1.x;
  var line = { slope: slope, offset: offset };

  debug('line =', line);

  return line;
}

module.exports = getLineFromPoints;
