"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let __env = require(`../environment`);
let __context = { __text: [] };
let __serializer = __env.getSerializer();
__context['characters'] = require('./characters');
__context['__text'] = [...__context['__text'], `Chapter 2`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `story ends in a second chapter as soon as ${__serializer.serialize(__context['characters']['main hero'], '\r\n')} defeats ${__serializer.serialize(__context['characters']['villan'], '\r\n')}`];
;
// INFO: this trick is for making this file node module
exports.default = __context;
module.exports = Object.assign({}, __context);
//# sourceMappingURL=chapter2.js.map