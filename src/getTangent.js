'use strict';

var data = require('./jsgraph/data.json');

getTangent(data, 2);

/**
  * Return a line tangent to a spectrum
  * @param {object} [dataXY] - Your spectrum data in the format {x:[x1, x2, ...], y:[y1, y2, ...]}
  * @param {number} [index = 1] - Index of the data corresponding to the point you're interested in finding the tangent (0 = first value in the data)
  * @param {object} [options={}]
  * @return {function} tangent
  */
module.exports = function getTangent(dataXY, index, options = {}) {
  console.log(data);
  return tangent;
};
