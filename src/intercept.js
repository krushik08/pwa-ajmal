const moduleOverridePlugin = require('./ajmal-ui/moduleOverrideWebpackPlugin');
const componentOverrideMapping = {
    '@magento/venia-ui/lib/components/Footer/footer.js': './ajmal-ui/lib/components/Footer/footer.js',
    '@magento/venia-ui/lib/components/Footer/header.js': './ajmal-ui/lib/components/Footer/header.js',
    '@magento/venia-ui/lib/components/Footer/homePage.js': './ajmal-ui/lib/components/HomePage/homePage.js',
    '@magento/venia-ui/lib/components/Footer/main.js': './ajmal-ui/lib/components/Footer/main.js',
    '@magento/venia-ui/lib/components/Adapter/adapter.js': './ajmal-ui/lib/components/Adapter/adapter.js'
};
module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        flags[targets.name] = {esModules: true, cssModules: true};
    });
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    });
};
