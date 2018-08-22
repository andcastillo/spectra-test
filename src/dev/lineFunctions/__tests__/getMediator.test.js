'use strict';

const getLineFromPoints = require('../getLineFromPoints');

test('getLineFromPoints', () => {
  let result1 = getLineFromPoints({ x: 3, y: 6 }, { x: 4, y: 54 });
  expect(result1).toEqual({ offset: -138, slope: 48 });
});
