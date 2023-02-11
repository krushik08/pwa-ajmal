import React, { useEffect, useRef, useState } from 'react';
import styles from '../subCategory.module.css';
import { useParams } from 'react-router';

import Floral from '/public/images/Floral.png';
import CheckIcon from '/public/images/Check.svg';
import ChevronDown from '/public/images/ChevronDown.svg';
import ChevronUp from '/public/images/ChevronUp.svg';
import FilterIcon from '/public/images/IconFilter.svg';
import CloseIcon from '/public/images/IconClose.svg';

import Control from '../../Utils/Dropdown';

import InputRange from 'react-input-range';
import Select, { components } from 'react-select';
import ProductCard from '../../ProductCard';
//import ProductCardData from '../../_mockdata_/Product';
import { MobileSlider } from '../../Common/MobileSlider';
import useMobileView from '../../Utils/MobileView';
import {GET_PRODUCT_LISTS} from '../../../queries/categories.jsx';
import { useQuery } from '@apollo/client';

const SubCategoryView = props => {
    let ProductCardData = [];
    const { id } = useParams();
    const [price, setPrice] = useState({ min: 0, max: 100 });
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [isOpenSorting, setIsOpenSorting] = useState(false);
    const isMobile = useMobileView();

    const sortByOptions = [
        { label: 'Popularity', value: 'Popularity' },
        { label: 'Discount', value: 'Discount' },
        { label: 'Name', value: 'Name' },
        { label: 'Customer Top Rated', value: 'Customer Top Rated' },
        { label: 'New Arrivals', value: 'New Arrivals' },
        { label: 'Price: High To Low', value: 'Price: High To Low' },
        { label: 'Price: Low To High', value: 'Price: Low To High' }
    ];

    const { Option, DropdownIndicator } = components;

    const IconOption = props => (
        <Option {...props} className={styles.optionStyle}>
            {props.data.label}

            {props.isSelected ? (
                <img
                    src={CheckIcon}
                    style={{ width: 16 }}
                    alt={props.data.label}
                />
            ) : (
                ''
            )}
        </Option>
    );

    const {loading, error, data} = useQuery(GET_PRODUCT_LISTS, {
        /*onCompleted: (res) => {
            //ProductCardData
            ProductCardData = res.products.items;
            console.log("handle Filter Change:",res);
        },*/
        variables: {
            search: "",
            filter: {
                category_id: {eq: parseInt(id)},
                price: {from: 0, to: 1000}
            },
            category_id: parseInt(id),
            pageSize: 25,
            currentPage: 1,
            sort: {
                name: "ASC"
            }
        }
    })

    console.log("Sub Category Data",data,error);

    const DropdownListStyle = {
        option: (base, state) => ({
            ...base,
            '&:hover': {
                backgroundColor: '#F8F6F3'
            },
            backgroundColor: state.isSelected ? 'white' : 'white',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            color: '#2B2826'
        }),

        valueContainer: (base, state) => ({
            ...base,
            padding: '0 4px'
        }),

        menu: (base, state) => ({
            ...base,
            zIndex: 9999,
            width: '200px',
            boxShadow:
                '0px 0px 0px 1px rgba(83, 60, 36, 0.05), 0px 1px 5px rgba(83, 60, 36, 0.1), 0px 8px 16px rgba(83, 60, 36, 0.05)'
        })
    };

    const DropdownIndicatorStyled = props => (
        <DropdownIndicator {...props}>
            {!props.selectProps.menuIsOpen ? (
                <img src={ChevronDown} alt="ChevronDown" />
            ) : (
                <img src={ChevronUp} alt="ChevronUp" />
            )}
        </DropdownIndicator>
    );

    const [isOpenPriceModel, setIsOpenPriceModel] = useState(false);
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef?.current?.contains(e.target)) {
            setIsOpenPriceModel(false);
        }
    };

    const handleClickInside = () => {
        setIsOpenPriceModel(true);
    };

    /*useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    });*/

    if(error){
        return (
            <section className="container">
                <div className={styles.subCategorySec}>
                    {/* Category 1 */}
                    <div className={styles.subCategoryWrapper}>
                        {/* Category Banner */}
                        <div className={styles.subCategoryBannerSection}>
                            <img
                                src={Floral}
                                alt="imgBanner"
                                className={styles.subCategoryBanner}
                            />
                            <span className={styles.subCategoryName}>
                                Floral
                            </span>
                        </div>

                        {/* Filter Option */}
                        <div className={styles.filterWrapper}>
                            <Select
                                {...props}
                                preText="Sort by"
                                components={{
                                    Control,
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: DropdownIndicatorStyled,
                                    Option: IconOption
                                }}
                                name="Sort by"
                                options={sortByOptions}
                                className={styles.selectedValueStyle}
                                styles={DropdownListStyle}
                                placeholder=" "
                            />

                            <Select
                                {...props}
                                preText="Discover"
                                components={{
                                    Control,
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: DropdownIndicatorStyled,
                                    Option: IconOption
                                }}
                                name="Discover"
                                options={sortByOptions}
                                className={styles.selectedValueStyle}
                                styles={DropdownListStyle}
                                placeholder=" "
                            />

                            <Select
                                {...props}
                                preText="Categories"
                                components={{
                                    Control,
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: DropdownIndicatorStyled,
                                    Option: IconOption
                                }}
                                name="Categories"
                                options={sortByOptions}
                                className={styles.selectedValueStyle}
                                styles={DropdownListStyle}
                                placeholder=" "
                            />

                            <div ref={myRef} onClick={handleClickInside}>
                                <div className={styles.priceBox}>
                                    <span className={styles.priceText}>
                                        Price
                                    </span>
                                    {!isOpenPriceModel ? (
                                        <img
                                            src={ChevronDown}
                                            alt="ChevronDown"
                                            className={styles.iconChevron}
                                        />
                                    ) : (
                                        <img
                                            src={ChevronUp}
                                            alt="ChevronUp"
                                            className={styles.iconChevron}
                                        />
                                    )}
                                </div>

                                {isOpenPriceModel ? (
                                    <div className={styles.priceMenu}>
                                        <div
                                            className={styles.inputMainWrapper}
                                        >
                                            <div
                                                className={styles.inputWrapper}
                                            >
                                                <div
                                                    className={
                                                        styles.form_input_wrapper
                                                    }
                                                >
                                                    <label>from</label>
                                                    <input
                                                        className={
                                                            styles.form_control
                                                        }
                                                        type="email"
                                                    />
                                                </div>

                                                <div
                                                    className={
                                                        styles.form_input_wrapper
                                                    }
                                                >
                                                    <label>up to</label>
                                                    <input
                                                        className={
                                                            styles.form_control
                                                        }
                                                        type="email"
                                                    />
                                                </div>
                                            </div>

                                            <span
                                                className={styles.currencyType}
                                            >
                                                AED
                                            </span>
                                        </div>

                                        <div
                                            className={styles.inputRangeWrapper}
                                        >
                                            <InputRange
                                                step={5}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={100}
                                                minValue={10}
                                                value={price}
                                                onChange={setPrice}
                                                onChangeComplete={args =>
                                                    console.log(args)
                                                }
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>

                            <Select
                                {...props}
                                preText="Collections"
                                components={{
                                    Control,
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: DropdownIndicatorStyled,
                                    Option: IconOption
                                }}
                                name="Collections"
                                options={sortByOptions}
                                className={styles.selectedValueStyle}
                                styles={DropdownListStyle}
                                placeholder=" "
                            />

                            <Select
                                {...props}
                                preText="Fragrance"
                                components={{
                                    Control,
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: DropdownIndicatorStyled,
                                    Option: IconOption
                                }}
                                name="Fragrance"
                                options={sortByOptions}
                                className={styles.selectedValueStyle}
                                styles={DropdownListStyle}
                                placeholder=" "
                            />

                            <div className={styles.filterSubWrapper}>
                                <span className={styles.filterTxt}>
                                    Discount
                                </span>
                            </div>

                            <div className={styles.filterSubWrapper}>
                                <span className={styles.filterTxt}>
                                    Best sellers
                                </span>
                            </div>
                        </div>

                        {isMobile && (
                            <div className={styles.filterBtnWrapper}>
                                <button
                                    className={styles.filterBtn}
                                    onClick={() => setIsOpenSorting(true)}
                                >
                                    <img src={FilterIcon} alt="" />
                                    <span>sort </span>
                                </button>

                                <button
                                    className={styles.filterBtn}
                                    onClick={() => setIsOpenFilter(true)}
                                >
                                    <img src={FilterIcon} alt="" />
                                    <span>filter(3) </span>
                                </button>
                            </div>
                        )}

                        {isMobile && (
                            <MobileSorting
                                isOpenSorting={isOpenSorting}
                                setIsOpenSorting={setIsOpenSorting}
                            />
                        )}

                        {isMobile && (
                            <MobileFilter
                                isOpenFilter={isOpenFilter}
                                setIsOpenFilter={setIsOpenFilter}
                            />
                        )}
                    </div>
                </div>
            </section>
        )
    }

    if(data){
        console.log("data",data)
        ProductCardData = data.products.items;
        const aggrigations = data.products.aggregations;
        const categoryOptions = aggrigations.find(i => i.attribute_code === "category_uid").options;
        const categoryProducts = (
            <div className={styles.subCategoryWrapper}>
                {/* Category products */}
                <div className={styles.productWrapperViewAll}>
                    {ProductCardData.map(item => {
                        console.log("ProductCardData",item,ProductCardData)
                        return (
                            <ProductCard key={item.id} item={item} />
                        )
                    })}
                </div>
            </div> );

        return (
            <>
                <section className="container">
                    <div className={styles.subCategorySec}>
                        {/* Category 1 */}
                        <div className={styles.subCategoryWrapper}>
                            {/* Category Banner */}
                            <div className={styles.subCategoryBannerSection}>
                                <img
                                    src={data.category.image || Floral}
                                    alt="imgBanner"
                                    className={styles.subCategoryBanner}
                                />
                                <span className={styles.subCategoryName}>
                                    { data.category.name || Floral}
                                </span>
                            </div>

                            {/* Filter Option */}
                            <div className={styles.filterWrapper}>
                                <Select
                                    {...props}
                                    preText="Sort by"
                                    components={{
                                        Control,
                                        IndicatorSeparator: () => null,
                                        DropdownIndicator: DropdownIndicatorStyled,
                                        Option: IconOption
                                    }}
                                    name="Sort by"
                                    options={sortByOptions}
                                    className={styles.selectedValueStyle}
                                    styles={DropdownListStyle}
                                    placeholder=" "
                                />

                                <Select
                                    {...props}
                                    preText="Discover"
                                    components={{
                                        Control,
                                        IndicatorSeparator: () => null,
                                        DropdownIndicator: DropdownIndicatorStyled,
                                        Option: IconOption
                                    }}
                                    name="Discover"
                                    options={sortByOptions}
                                    className={styles.selectedValueStyle}
                                    styles={DropdownListStyle}
                                    placeholder=" "
                                />

                                <Select
                                    {...props}
                                    preText="Categories"
                                    components={{
                                        Control,
                                        IndicatorSeparator: () => null,
                                        DropdownIndicator: DropdownIndicatorStyled,
                                        Option: IconOption
                                    }}
                                    name="Categories"
                                    options={categoryOptions}
                                    className={styles.selectedValueStyle}
                                    styles={DropdownListStyle}
                                    placeholder=" "
                                />

                                <div ref={myRef} onClick={handleClickInside}>
                                    <div className={styles.priceBox}>
                                        <span className={styles.priceText}>
                                            Price
                                        </span>
                                        {!isOpenPriceModel ? (
                                            <img
                                                src={ChevronDown}
                                                alt="ChevronDown"
                                                className={styles.iconChevron}
                                            />
                                        ) : (
                                            <img
                                                src={ChevronUp}
                                                alt="ChevronUp"
                                                className={styles.iconChevron}
                                            />
                                        )}
                                    </div>

                                    {isOpenPriceModel ? (
                                        <div className={styles.priceMenu}>
                                            <div
                                                className={styles.inputMainWrapper}
                                            >
                                                <div
                                                    className={styles.inputWrapper}
                                                >
                                                    <div
                                                        className={
                                                            styles.form_input_wrapper
                                                        }
                                                    >
                                                        <label>from</label>
                                                        <input
                                                            className={
                                                                styles.form_control
                                                            }
                                                            type="email"
                                                        />
                                                    </div>

                                                    <div
                                                        className={
                                                            styles.form_input_wrapper
                                                        }
                                                    >
                                                        <label>up to</label>
                                                        <input
                                                            className={
                                                                styles.form_control
                                                            }
                                                            type="email"
                                                        />
                                                    </div>
                                                </div>

                                                <span
                                                    className={styles.currencyType}
                                                >
                                                    AED
                                                </span>
                                            </div>

                                            <div
                                                className={styles.inputRangeWrapper}
                                            >
                                                <InputRange
                                                    step={5}
                                                    formatLabel={value => null}
                                                    draggableTrack={false}
                                                    allowSameValues={false}
                                                    maxValue={100}
                                                    minValue={10}
                                                    value={price}
                                                    onChange={setPrice}
                                                    onChangeComplete={args =>
                                                        console.log(args)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>

                                <Select
                                    {...props}
                                    preText="Collections"
                                    components={{
                                        Control,
                                        IndicatorSeparator: () => null,
                                        DropdownIndicator: DropdownIndicatorStyled,
                                        Option: IconOption
                                    }}
                                    name="Collections"
                                    options={sortByOptions}
                                    className={styles.selectedValueStyle}
                                    styles={DropdownListStyle}
                                    placeholder=" "
                                />

                                <Select
                                    {...props}
                                    preText="Fragrance"
                                    components={{
                                        Control,
                                        IndicatorSeparator: () => null,
                                        DropdownIndicator: DropdownIndicatorStyled,
                                        Option: IconOption
                                    }}
                                    name="Fragrance"
                                    options={sortByOptions}
                                    className={styles.selectedValueStyle}
                                    styles={DropdownListStyle}
                                    placeholder=" "
                                />

                                <div className={styles.filterSubWrapper}>
                                    <span className={styles.filterTxt}>
                                        Discount
                                    </span>
                                </div>

                                <div className={styles.filterSubWrapper}>
                                    <span className={styles.filterTxt}>
                                        Best sellers
                                    </span>
                                </div>
                            </div>

                            {isMobile && (
                                <div className={styles.filterBtnWrapper}>
                                    <button
                                        className={styles.filterBtn}
                                        onClick={() => setIsOpenSorting(true)}
                                    >
                                        <img src={FilterIcon} alt="" />
                                        <span>sort </span>
                                    </button>

                                    <button
                                        className={styles.filterBtn}
                                        onClick={() => setIsOpenFilter(true)}
                                    >
                                        <img src={FilterIcon} alt="" />
                                        <span>filter(3) </span>
                                    </button>
                                </div>
                            )}

                            {isMobile && (
                                <MobileSorting
                                    isOpenSorting={isOpenSorting}
                                    setIsOpenSorting={setIsOpenSorting}
                                />
                            )}

                            {isMobile && (
                                <MobileFilter
                                    isOpenFilter={isOpenFilter}
                                    setIsOpenFilter={setIsOpenFilter}
                                />
                            )}

                            {categoryProducts}
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return null;
};

export default SubCategoryView;

const MobileSorting = ({ isOpenSorting, setIsOpenSorting }) => {
    return (
        <div
            className={
                (styles.mobileSortingWrapper,
                !isOpenSorting
                    ? `${styles.mobileSortingWrapperNoActive}`
                    : `${styles.mobileSortingWrapperActive}`)
            }
        >
            <div className={styles.mobSortingHeader}>
                <div />
                <span className={styles.mobSortingTxt}>Sort by</span>
                <img
                    src={CloseIcon}
                    alt="closeIcon"
                    onClick={() => setIsOpenSorting(false)}
                />
            </div>

            <div className={styles.mobSortingWrapper}>
                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        class="custom-control-input"
                        id="Popularity"
                        name="Sorting"
                        value="Popularity"
                    />
                    <label class="custom-control-label" for="Popularity">
                        Popularity
                    </label>
                </div>

                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        class="custom-control-input"
                        id="Discount"
                        name="Sorting"
                        value="Discount"
                    />
                    <label class="custom-control-label" for="Discount">
                        Discount
                    </label>
                </div>

                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        class="custom-control-input"
                        id="Name"
                        name="Sorting"
                        value="Name"
                    />
                    <label class="custom-control-label" for="Name">
                        Name
                    </label>
                </div>

                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        class="custom-control-input"
                        id="CustomerTopRated"
                        name="Sorting"
                        value="Customer Top Rated"
                    />
                    <label class="custom-control-label" for="CustomerTopRated">
                        Customer Top Rated
                    </label>
                </div>

                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        class="custom-control-input"
                        id="NewArrivals"
                        name="Sorting"
                        value="New Arrivals"
                    />
                    <label class="custom-control-label" for="NewArrivals">
                        New Arrivals
                    </label>
                </div>

                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        class="custom-control-input"
                        id="PriceHighToLow"
                        name="Sorting"
                        value="Price High To Low"
                    />
                    <label class="custom-control-label" for="PriceHighToLow">
                        Price: High To Low
                    </label>
                </div>

                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        class="custom-control-input"
                        id="PriceLowToHigh"
                        name="Sorting"
                        value="Price Low To High"
                    />
                    <label class="custom-control-label" for="PriceLowToHigh">
                        Price: Low To High
                    </label>
                </div>
            </div>

            <div className={styles.mobSortingFooter}>
                <button
                    className={` ${
                        styles.mobSortingBtn
                    } btn btn-primary btn-primary-outline`}
                >
                    Reset
                </button>
                <button className={` ${styles.mobSortingBtn} btn btn-primary`}>
                    Apply
                </button>
            </div>
        </div>
    );
};

const MobileFilter = ({ isOpenFilter, setIsOpenFilter }) => {
    const [selectedFilter, setSelectedFilter] = useState('Fragrance');
    // console.log('selectedFilter', selectedFilter);
    return (
        <div
            className={
                (styles.mobileFilterWrapper,
                !isOpenFilter
                    ? `${styles.mobileFilterWrapperNoActive}`
                    : `${styles.mobileFilterWrapperActive}`)
            }
        >
            <div className={styles.mobFilterHeader}>
                <div />
                <span className={styles.mobFilterTxt}>Filters</span>
                <img
                    src={CloseIcon}
                    alt="closeIcon"
                    onClick={() => setIsOpenFilter(false)}
                />
            </div>

            <div className={styles.mobFilterWrapper}>
                <div className={styles.mobFilterLeft}>
                    <span
                        className={
                            (styles.mobFilterType,
                            selectedFilter === 'Discover' &&
                                `${styles.mobFilterActive}`)
                        }
                        id="Discover"
                        onClick={e => {
                            setSelectedFilter(e.target.id);
                        }}
                    >
                        Discover
                    </span>
                    <span
                        className={
                            (styles.mobFilterType,
                            selectedFilter === 'Categories' &&
                                `${styles.mobFilterActive}`)
                        }
                        id="Categories"
                        onClick={e => {
                            setSelectedFilter(e.target.id);
                        }}
                    >
                        Categories (2)
                    </span>
                    <span
                        className={
                            (styles.mobFilterType,
                            selectedFilter === 'BestSellers' &&
                                `${styles.mobFilterActive}`)
                        }
                        id="BestSellers"
                        onClick={e => {
                            setSelectedFilter(e.target.id);
                        }}
                    >
                        Best sellers
                    </span>
                    <span
                        className={
                            (styles.mobFilterType,
                            selectedFilter === 'Price' &&
                                `${styles.mobFilterActive}`)
                        }
                        id="Price"
                        onClick={e => {
                            setSelectedFilter(e.target.id);
                        }}
                    >
                        Price
                    </span>
                    <span
                        className={
                            (styles.mobFilterType,
                            selectedFilter === 'Discount' &&
                                `${styles.mobFilterActive}`)
                        }
                        id="Discount"
                        onClick={e => {
                            setSelectedFilter(e.target.id);
                        }}
                    >
                        Discount
                    </span>
                    <span
                        className={
                            (styles.mobFilterType,
                            selectedFilter === 'Fragrance' &&
                                `${styles.mobFilterActive}`)
                        }
                        id="Fragrance"
                        onClick={e => {
                            setSelectedFilter(e.target.id);
                        }}
                    >
                        Fragrance (8)
                    </span>
                    <span
                        className={
                            (styles.mobFilterType,
                            selectedFilter === 'Collections' &&
                                `${styles.mobFilterActive}`)
                        }
                        id="Collections"
                        onClick={e => {
                            setSelectedFilter(e.target.id);
                        }}
                    >
                        Collections
                    </span>
                </div>

                <div className={styles.mobFilterCenter} />
                <>
                    {selectedFilter === 'Discover' && (
                        <div className={styles.mobFilterRight}>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus (1)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Fruity"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Fruity"
                                >
                                    Fruity (2)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Woody"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Woody"
                                >
                                    Woody (1)
                                </label>
                            </div>
                        </div>
                    )}
                </>
                <>
                    {selectedFilter === 'Categories' && (
                        <div className={styles.mobFilterRight}>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus (1)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Fruity"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Fruity"
                                >
                                    Fruity (2)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Floral"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Floral"
                                >
                                    Floral
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Woody"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Woody"
                                >
                                    Woody (1)
                                </label>
                            </div>
                        </div>
                    )}
                </>
                <>
                    {selectedFilter === 'BestSellers' && (
                        <div className={styles.mobFilterRight}>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Fruity"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Fruity"
                                >
                                    Fruity (2)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Floral"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Floral"
                                >
                                    Floral
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Woody"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Woody"
                                >
                                    Woody (1)
                                </label>
                            </div>
                        </div>
                    )}
                </>
                <>
                    {selectedFilter === 'Price' && (
                        <div className={styles.mobFilterRight}>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus (1)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Floral"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Floral"
                                >
                                    Floral
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Woody"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Woody"
                                >
                                    Woody (1)
                                </label>
                            </div>
                        </div>
                    )}
                </>
                <>
                    {selectedFilter === 'Discount' && (
                        <div className={styles.mobFilterRight}>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus (1)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Fruity"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Fruity"
                                >
                                    Fruity (2)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Floral"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Floral"
                                >
                                    Floral
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Woody"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Woody"
                                >
                                    Woody (1)
                                </label>
                            </div>
                        </div>
                    )}
                </>
                <>
                    {selectedFilter === 'Fragrance' && (
                        <div className={styles.mobFilterRight}>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus (1)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Fruity"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Fruity"
                                >
                                    Fruity (2)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Floral"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Floral"
                                >
                                    Floral
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Chypre"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Chypre"
                                >
                                    Chypre
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Oriental"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Oriental"
                                >
                                    Oriental
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Woody"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Woody"
                                >
                                    Woody
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="DahnAlOud"
                                />
                                <label
                                    className="custom-control-label"
                                    for="DahnAlOud"
                                >
                                    Dahn Al Oud (1)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Fruity1"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Fruity1"
                                >
                                    Fruity
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Oriental1"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Oriental1"
                                >
                                    Oriental (3)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus1"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus1"
                                >
                                    Citrus
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Woody1"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Woody1"
                                >
                                    Woody (1)
                                </label>
                            </div>
                        </div>
                    )}
                </>
                <>
                    {selectedFilter === 'Collections' && (
                        <div className={styles.mobFilterRight}>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus (1)
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Floral"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Floral"
                                >
                                    Floral
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Citrus"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Citrus"
                                >
                                    Citrus
                                </label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Woody"
                                />
                                <label
                                    className="custom-control-label"
                                    for="Woody"
                                >
                                    Woody (1)
                                </label>
                            </div>
                        </div>
                    )}
                </>
            </div>

            <div className={styles.mobFilterFooter}>
                <button
                    className={` ${
                        styles.mobFilterBtn
                    } btn btn-primary btn-primary-outline`}
                >
                    Clear
                </button>
                <button className={` ${styles.mobFilterBtn} btn btn-primary`}>
                    84 Results
                </button>
            </div>
        </div>
    );
};
