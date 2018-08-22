'use strict';

const linesIntersection = require('../linesIntersection');


test('linesIntersection', () => {
  let result1 = linesIntersection({ slope: 0, offset: 2 }, { slope: 1, offset: 0 });
  expect(result1).toEqual({ x: 2, y: 2 });

  let result2 = linesIntersection({ slope: 0, offset: 0 }, { xOffset: 0 });
  expect(result2).toEqual({ x: 0, y: 0 });

  // testing error messages
  function twoVerticalLines() {
    linesIntersection({ xOffset: 4 }, { xOffset: 4 });
  }
  expect(twoVerticalLines).toThrowError('The two lines are overlapping.');

  function parallelLines() {
    linesIntersection({ slope: 1, offset: 0 }, { slope: 1, offset: 3 });
  }
  expect(parallelLines).toThrowError('The two lines are parallel.');

  function overlappingLines() {
    linesIntersection({ slope: 0.5, offset: 42 }, { slope: 0.5, offset: 42 });
  }
  expect(overlappingLines).toThrowError('The two lines are overlapping.');
});
