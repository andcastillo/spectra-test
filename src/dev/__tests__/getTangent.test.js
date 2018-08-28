'use strict';

const getTangent = require('../getTangent');


var data = { x: [0, 1, 2, 3, 4, 5, 6, 7], y: [0, 1, 2, 2, 2, 1, 2, 7] };

test('getTangent', () => {
  let result1 = getTangent(data, 1);
  expect(result1).toEqual({ offset: 0, slope: 1 });
  let result2 = getTangent(data, 3);
  expect(result2).toEqual({ offset: 2, slope: 0 });
  let result3 = getTangent(data, 5);
  expect(result3).toEqual({ offset: 1, slope: 0 });
});
