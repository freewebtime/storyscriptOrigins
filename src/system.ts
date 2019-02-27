let __env = require(`./environment`);
let __context = { __text: [] };
let __serializer = __env.getSerializer();

__context['ссылка'] = function (урл, текст) {
return `[${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( урл, '\r\n' )})`;
};
__context['фото'] = function (урл, текст, imgRoot) {
if (!imgRoot) { 
	imgRoot = `https:\//raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/`;
 };
return `![${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( imgRoot, '\r\n' )}${__serializer.serialize( урл, '\r\n' )})`;
};


// INFO: this trick is for making this file node module
export default __context
module.exports = {...__context}
