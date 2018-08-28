'use strict';

const data = require('../__tests__/data.json');
const getAnnotations = require('../getAnnotations');
const getTangent = require('../getTangent');

getAnnotations(getTangent, data, { threshold: 1e-10, segmentLength: 1, name: 'test.json' });
