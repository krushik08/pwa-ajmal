import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { useScrollTopOnChange } from '@magento/peregrine/lib/hooks/useScrollTopOnChange';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import HomePage from '../HomePage';
import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';
import Categories from '../Categories';
import SubCategory from '../SubCategory';
import CartPage from '../CartPage';
import ProductPage from '../ProductPage/ProductPage';
import SubCategoryView from '../SubCategory/ViewAll/SubCategoryView';
import Profile from '../Profile';

const Routes = () => {
    const { pathname } = useLocation();
    useScrollTopOnChange(pathname);

    return (
        <Suspense fallback={fullPageLoadingIndicator}>
            <Switch>
                {/*
                 * Client-side routes are injected by BabelRouteInjectionPlugin here.
                 * Venia's are defined in packages/venia-ui/lib/targets/venia-ui-intercept.js
                 */}
                <Route>
                    <MagentoRoute />
                    {/*
                     * The Route below is purposefully nested with the MagentoRoute above.
                     * MagentoRoute renders the CMS page, and HomePage adds a stylesheet.
                     * HomePage would be obsolete if the CMS could deliver a stylesheet.
                     */}
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    {/*<Route exact path="/:url_key">
                        <ProductPage />
                    </Route>*/}
                    <Route exact path="/categories">
                        <SubCategory />
                    </Route>
                    <Route exact path="/categories/:id">
                        <SubCategoryView />
                    </Route>
                    <Route exact path="/cart">
                        <CartPage />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
const availableRoutes = [];
export { availableRoutes };
