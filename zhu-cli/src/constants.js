// 存放用户的所需要的常量
const cons = require('consolidate');
const { version } = require('../package.json');

// 存储模板的位置
const downloadDirectory = `${process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']}/.template`;
const defaultConfig = {
  repo: 'sdk-cli', // 默认拉取的仓库名 
};

module.exports = {
  version,
  downloadDirectory,
  defaultConfig
};
