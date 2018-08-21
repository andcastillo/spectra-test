'use strict';

const data = require('../jsgraph/data.json');

const getLines = require('./getLines');
const getMediator = require('./getMediator');


getLines(getMediator, data, 10);
