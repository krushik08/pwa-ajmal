import React, { Fragment, useMemo } from 'react';
import { string, shape } from 'prop-types';
import Shimmer from '@magento/venia-ui/lib/components/Shimmer';
import { BreadcrumbShimmer } from '@magento/venia-ui/lib/components/Breadcrumbs';
import defaultClasses from '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.module.css';
import CarouselShimmer from '@magento/venia-ui/lib/components/ProductImageCarousel/carousel.shimmer';
import { ProductOptionsShimmer } from '@magento/venia-ui/lib/components/ProductOptions';
import { useStyle } from '@magento/venia-ui/lib/classify';

const ProductShimmer = props => {
    const { productType } = props;
    const classes = useStyle(defaultClasses, props.classes);

    const options = useMemo(() => {
        if (productType.includes('Configurable')) {
            return <ProductOptionsShimmer />;
        }

        return null;
    }, [productType]);

    console.log("Product Shimmer",classes,options);

    return (
        <Fragment>
            <BreadcrumbShimmer />
            <div className={classes.root}>
                <section className={classes.title}>
                    <Shimmer width="100%" height={2} key="product-name" />
                    <div className={classes.productPrice}>
                        <Shimmer width={3} height={2} key="product-price" />
                    </div>
                </section>
                <section className={classes.imageCarousel}>
                    <CarouselShimmer />
                </section>
                <section className={classes.options}>{options}</section>
                <section className={classes.quantity}>
                    <div className={classes.quantityTitle}>
                        <Shimmer width="100%" height={1} key="quantity-title" />
                    </div>
                    <Shimmer
                        width={10}
                        type="textInput"
                        classes={{ root: classes.quantityRoot }}
                    />
                </section>
                <section className={classes.actions}>
                    <Shimmer type="button" key="add-to-cart" />
                </section>
                <section className={classes.description}>
                    <div className={classes.descriptionTitle}>
                        <Shimmer
                            width="100%"
                            height={1}
                            key="description-title"
                        />
                    </div>
                    <Shimmer width="100%" height={1} key="description-line-1" />
                    <Shimmer width="100%" height={1} key="description-line-2" />
                    <Shimmer width="100%" height={1} key="description-line-3" />
                </section>
                <section className={classes.details}>
                    <div className={classes.detailsTitle}>
                        <Shimmer width="100%" height={1} key="detail-title" />
                    </div>
                    <Shimmer width="100%" height={1} key="detail-value" />
                </section>
            </div>
        </Fragment>
    );
};

ProductShimmer.defaultProps = {
    classes: {}
};

ProductShimmer.propTypes = {
    productType: string.isRequired,
    classes: shape({
        cartActions: string,
        description: string,
        descriptionTitle: string,
        details: string,
        detailsTitle: string,
        imageCarousel: string,
        options: string,
        productName: string,
        productPrice: string,
        quantity: string,
        quantityTitle: string,
        root: string,
        title: string,
        unavailableContainer: string
    })
};

export default ProductShimmer;
