'use strict';

const data = require('../../jsgraph/data.json');
const getAnnotations = require('../getAnnotations');
const getMediator = require('../lineFunctions/getMediator');


getAnnotations(getMediator, data);
