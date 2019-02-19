let path = require('path');
let rootPath = path.resolve(__dirname, '..');
let stsConfigPath = path.resolve(rootPath, 'stsconfig.json');
let tsConfigPath = path.resolve(rootPath, 'tsconfig.json');

let child_process = require('child_process');
let stscFilePath = require.resolve('storyscript/out/stsc');
let command = `node "${stscFilePath}" "${stsConfigPath}" -ts "${tsConfigPath}"`;
console.log('excuting ', command);
console.log(child_process.execSync(command).toString());

let filesToRender = [
  {
    source: './index',
    target: '../index.txt'
  }
];

console.log('printing started...');
let stspFilePath = require.resolve('storyscript/out/printer');
filesToRender.forEach((fileInfo) => {
  let source = fileInfo.source;
  let target = fileInfo.target;

  let printCommand = `node "${stspFilePath}" "${stsConfigPath}" "${source}" "${target}"`;
  console.log('executing ', printCommand);
  console.log(child_process.execSync(printCommand).toString());
});
console.log('printing done.');
