// 初始化时清空部分非必要的文件、文件夹

const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 清空根目录下的部分目录
for (let dir of ['node_modules', 'dist', 'api-doc']) {
  console.log('rimraf', path.resolve(root, dir));
  rimraf.sync(path.resolve(root, dir));
}

// 清空工程下的node_modules文件
cleanDirNodeModules('projects');
// 清空工程下的node_modules文件
cleanDirNodeModules('packages');

function cleanDirNodeModules(rootDirName) {
  const dirNames = [];
  const rootDirPath = path.resolve(root, rootDirName);
  fs.readdirSync(rootDirPath).forEach((file) => {
    fs.statSync(path.resolve(rootDirPath, file)).isDirectory() && dirNames.push(file);
  });

  for (let pr of dirNames) {
    const nm = path.resolve(root, rootDirName, pr, 'node_modules');
    if (fs.existsSync(nm)) {
      console.log('rimraf', nm);
      rimraf.sync(nm);
    }
  }
}
