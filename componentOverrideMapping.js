const veniaUiPackagePath = '@magento/venia-ui';
const parigrinePackagePath = '@magento/peregrine';

module.exports = componentOverrideMapping = {
    [`${veniaUiPackagePath}/lib/components/Footer/footer.js`]: './src/ajmal-ui/lib/components/Footer/footer.js',
    [`${veniaUiPackagePath}/lib/components/Header/header.js`]: './src/ajmal-ui/lib/components/Header/header.js',
    [`${veniaUiPackagePath}/lib/components/HomePage`]: './src/ajmal-ui/lib/components/HomePage',
    [`${veniaUiPackagePath}/lib/components/Head`]: './src/ajmal-ui/lib/components/Head',
    [`${veniaUiPackagePath}/lib/components/Main/main.js`]: './src/ajmal-ui/lib/components/Main/main.js',
    [`${veniaUiPackagePath}/lib/components/Adapter/adapter.js`]: './src/ajmal-ui/lib/components/Adapter/adapter.js',
    [`${veniaUiPackagePath}/lib/components/App/app.js`]: './src/ajmal-ui/lib/components/App/app.js',
    [`${veniaUiPackagePath}/lib/components/Routes/routes.js`]: './src/ajmal-ui/lib/components/Routes/routes.js',
    [`${parigrinePackagePath}/lib/talons/FilterSidebar/useFilterSidebar.js`]: './src/ajmal-ui/lib/talons/FilterSidebar/useFilterSidebar.js',
    [`${veniaUiPackagePath}/lib/RootComponents/Product/product.js`]: './src/ajmal-ui/lib/RootComponents/Product/product.js',
    [`${veniaUiPackagePath}/lib/RootComponents/Product/product.shimmer.js`]: './src/ajmal-ui/lib/RootComponents/Product/product.shimmer.js',
    [`${veniaUiPackagePath}/lib/RootComponents/Product/index.js`]: './src/ajmal-ui/lib/RootComponents/Product/index.js',
    //[`${veniaUiPackagePath}/lib/RootComponents/CMS`]: './src/ajmal-ui/lib/RootComponents/CMS',
    //[`${veniaUiPackagePath}/lib/RootComponents/CMS/cms.js`]: './src/ajmal-ui/lib/RootComponents/CMS/cms.js',
    //[`${veniaUiPackagePath}/lib/RootComponents/CMS/index.js`]: './src/ajmal-ui/lib/RootComponents/CMS/imdex.js'
    // add comma-separated files
};
