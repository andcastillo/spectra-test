'use strict';

const getPerpendicular = require('../getPerpendicular');

test('getPerpendicular', () => {
  let result1 = getPerpendicular({ slope: 0, offset: 0 }, { x: 0, y: 0 });
  expect(result1).toEqual({ xOffset: 0 });
  let result2 = getPerpendicular({ slope: 1, offset: 0 }, { x: 2, y: 2 });
  expect(result2).toEqual({ slope: -1, offset: 4 });

  // testing error messages

  function notOnLine() {
    getPerpendicular({ slope: 3, offset: 92 }, { slope: 1, offset: 3 });
  }
  expect(notOnLine).toThrowError('The point you gave is not on the line.');
});
