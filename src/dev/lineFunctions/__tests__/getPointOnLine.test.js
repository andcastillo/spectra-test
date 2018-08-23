'use strict';

const getPointOnLine = require('../getPointOnLine');

test('getPointOnLine', () => {
  let result1 = getPointOnLine({ slope: 0, offset: 2 }, 5);
  expect(result1).toEqual({ x: 5, y: 2 });
  let result2 = getPointOnLine({ slope: 1, offset: 0 }, 10);
  expect(result2).toEqual({ x: 10, y: 10 });

  // testing error messages
  function verticalLine() {
    getPointOnLine({ xOffset: 4 }, 10);
  }
  expect(verticalLine).toThrowError(
    'No point exists on that line for this x value (line is vertical).'
  );
});
