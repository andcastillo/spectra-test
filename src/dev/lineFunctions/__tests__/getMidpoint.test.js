'use strict';

const getMidpoint = require('../getMidpoint');

test('getMidpoint', () => {
  let result1 = getMidpoint({ x: 0, y: 0 }, { x: 4, y: 4 });
  expect(result1).toEqual({ x: 2, y: 2 });

  let result2 = getMidpoint({ x: 0, y: 0 }, { x: 0, y: 4 });
  expect(result2).toEqual({ x: 0, y: 2 });

  let result3 = getMidpoint({ x: 0, y: 0 }, { x: 4, y: 0 });
  expect(result3).toEqual({ x: 2, y: 0 });
});
