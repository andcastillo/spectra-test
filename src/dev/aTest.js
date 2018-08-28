'use strict';

const debug = require('debug')('test');

const data = require('../jsgraph/data.json');

const getTangent = require('./getTangent');

debug(getTangent(data, 54));
