const path = require('path');
const { override, addWebpackAlias, addPostcssPlugins } = require('customize-cra');
 
const realPath = (pathName) => {
    return path.resolve(__dirname, pathName);
};
const pathAlias = {
    '@components': realPath('src/components'),
    '@api': realPath('src/api'),
    '@src': realPath('src'),
    '@store': realPath('src/store'),
    '@pages': realPath('src/pages'),
    '@router': realPath('src/router'),
    '@global': realPath('src/global'),
    '@tool': realPath('src/tool'),
    '@hooks': realPath('src/hooks')
  // 添加更多的alias
};


module.exports = override(
    addWebpackAlias(pathAlias),
    addPostcssPlugins([
        require('autoprefixer')
    ])
);