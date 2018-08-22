'use strict';

const getLineFromPoints = require('../getLineFromPoints');

test('getLineFromPoints', () => {
  let result1 = getLineFromPoints({ x: 3, y: 6 }, { x: 4, y: 54 });
  expect(result1).toEqual({ offset: -138, slope: 48 });
  let result2 = getLineFromPoints({ x: 0, y: 0 }, { x: 1, y: 0 });
  expect(result2).toEqual({ offset: 0, slope: 0 });
  let result3 = getLineFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 });
  expect(result3).toEqual({ offset: 0, slope: 1 });
  let result4 = getLineFromPoints({ x: 5, y: 3 }, { x: 20, y: 3 });
  expect(result4).toEqual({ offset: 3, slope: 0 });

  let result5 = getLineFromPoints({ x: 0, y: 0 }, { x: 0, y: 1 });
  expect(result5).toEqual({ xOffset: 0 });
});
