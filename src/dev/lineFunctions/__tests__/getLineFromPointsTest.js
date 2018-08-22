'use strict';

const getLineFromPoints = require('../getLineFromPoints');

test('getLineFromPoints', () => {
  let result = getLineFromPoints({ x: 3, y: 6 }, { x: 4, y: 54 });
  expect(result).toHaveProperty('offset');
  expect(result).toEqual({ offset: -138, slope: 48 });
});
