'use strict';

const data = require('../../jsgraph/data.json');
const getAnnotations = require('../getAnnotations');
const getTangent = require('../getTangent');

getAnnotations(getTangent, data, { threshold: 1e-20, segmentLength: 5 });
