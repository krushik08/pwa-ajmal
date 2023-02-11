import React from 'react';
import styles from './subCategory.module.css';
import ProductCard from '../ProductCard';
import { GET_CATEGORY } from '../../queries/categories.jsx';
import { useQuery } from '@apollo/client';

import useMobileView from '../Utils/MobileView';

const subCategory = () => {
    const {loading, error, data} = useQuery( GET_CATEGORY );/*, {
        onError: (er) => {
            console.log("Sub Category Error:", er);
        }//,
        //variables: { id: 1, pageSize: 4 }
    });*/
    const isMobile = useMobileView();
    console.log("Sub Category: ",loading,error,data);

    if(error){
        return <></>;
    }

    if(data){
        const catgoriesHtml = data.category.children.filter(i => i.products.total_count > 0).map(
            (item) =>
                     (
                        <div key={item.sku} className={styles.subCategoryWrapper}>
                            <div className={styles.subCategoryBannerSection}>
                                <img src={item.image} alt="imgBanner" className={styles.subCategoryBanner} />
                                <span className={styles.subCategoryName}>{item.name}</span>
                            </div>

                            <div className={styles.productWrapper}>
                                { item.products.items.map((product, key) => {
                                        if(key < 4){
                                         return (<ProductCard key={item.sku + item.id} type={true} item={product} />)
                                        }
                                    }
                                ) }
                            </div>

                            {/* View All */}
                            {!isMobile && (
                                <div className={styles.viewAllWrapper}>
                                    <a href={'/categories/'+item.id} className={styles.viewAllBtn}>
                                        View all
                                    </a>
                                </div>
                            )}
                        </div>
                    )

        );

        console.log("CATEGORY output",catgoriesHtml);
        return (
            <section className="container">
                <div className={styles.subCategorySec}>
                    <h3 className="sectionHeading mb-0">Our perfumes</h3>
                    {catgoriesHtml}
                </div>
            </section>
        )
    }
    return null;
};

export default subCategory;
