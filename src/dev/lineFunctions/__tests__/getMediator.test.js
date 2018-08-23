'use strict';

const getMediator = require('../getMediator');

test('getMediator', () => {
  let result1 = getMediator({ x: [0, 4], y: [0, 4] });
  expect(result1).toEqual({ offset: 4, slope: -1 });

  let result2 = getMediator({ x: [0, 4], y: [0, 4] });
  expect(result2).toEqual({ offset: 4, slope: -1 });
});
