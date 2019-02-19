let __env = require(`../environment`);
let __context = { __text: [] };
let __serializer = __env.getSerializer();

__context['main hero'] = __context['main hero'] || { __text: [] };
__context['main hero']['__text'] = [...__context['main hero']['__text'], `Protagonistman`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['villan'] = __context['villan'] || { __text: [] };
__context['villan']['__text'] = [...__context['villan']['__text'], `Villanman`];
;


// INFO: this trick is for making this file node module
export default __context
module.exports = {...__context}
