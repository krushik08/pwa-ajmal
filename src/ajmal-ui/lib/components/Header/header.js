import React, { useEffect } from 'react';
import { shape, string } from 'prop-types';
import jQuery from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MiniCart from '../MiniCart/miniCart';
import { MEGA_MENU } from '../../queries/menu.jsx';
import { gql, useQuery } from '@apollo/client';
import HtmlParser from 'react-html-parser';
import StoreSwitcher from '@magento/venia-ui/lib/components/Header/storeSwitcher';
import CurrencySwitcher from './currencySwitcher';

const Header = props => {

    const {loading, error, data} = useQuery(MEGA_MENU);

    console.log("Mega menus data", data);

    AOS.init();

    var handleLang = () => {
        jQuery('body').addClass('openCountryMenu');
    }
    var handleRemoveLang = () => {
        jQuery('body').removeClass('openCountryMenu');
        jQuery('body').css('overflow','auto')
    }

    var handleCart = () => {
        jQuery('body').toggleClass('openCartMenu');
        jQuery('body').css('overflow','hidden');
    }

    var handleLoginModel = () => {
        //jQuery('#loginModal').toggleClass("out");
        //jQuery('#loginModal').toggleClass("in");
        jQuery('#loginModal').toggleClass("show");
    }
    var removeNavTop = (evt) => {
        jQuery('.header-top').remove();
        localStorage.setItem('headerTop','hide')
    }
    const headerTop = localStorage.getItem('headerTop')?localStorage.getItem('headerTop'):'';
    useEffect(() =>{
        const cart = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];
        if(cart){
            jQuery('#cartBag').text(cart?.items?.length);
        }
    })

    if(data){
        const preparedData = data.amMegaMenuAll.items.map(item => {
            const content = item.content.replaceAll("&lt;","<").replaceAll("&gt;",">");
            return (
                <li className="nav-item dropdown">
                    <a className="nav-link" href={item.url} role="button" data-toggle="dropdown" aria-expanded="false">
                        {item.name}
                    </a>
                    {item.content.length > 0 &&
                        (
                            <div className="dropdown-menu" dangerouslySetInnerHTML={{ __html: content }}>
                            </div>
                        )
                    }
                </li>
            )
        });

        return (
            <>
                <header className="header afterLogin" id="userHeader">
                    <div className={"header-top "+headerTop}>
                        <p className="mb-0"><span>FREE SHIPPING</span> on all orders in the UAE</p>
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true" onClick={removeNavTop}>&times;</span>
                        </button>
                    </div>
                    <nav className="navbar navbar-expand-lg" id="navigationBar">
                        <div className="container-fluid">
                            <a href='/' className="navbar-brand" >
                                <img src="/public/images/logo.svg" alt="logo" className="img-fluid whiteLogo"/>
                            </a>

                            <div className="navbar-center">
                                <form className="navbar-search">
                                    <span className="navbar-search-icon"><img src="/public/images/search.svg" alt="search" /></span>
                                    <input type="text" placeholder="Search for perfume" className="form-control " id="searchItems" />
                                    <a href="javascript:;" className="btn btn-mic" id="micButton"><img src="/public/images/mic.svg" alt="mic" /></a>
                                </form>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-lg-center mb-0 m-auto" id="navbarToggle">
                                        {preparedData}
                                    </ul>
                                </div>
                            </div>

                            <div className="navbar-right d-flex align-items-center">
                                <ul className="navbar-nav align-items-lg-center mb-0 ml-auto align-items-center">
                                    <li className="nav-item d-none d-md-block">
                                        <a className="nav-link" href="javascript:;">
                                            <img src="/public/images/country1.png" alt="country" onClick={handleLang} />
                                        </a>
                                    </li>
                                    <li>
                                        <CurrencySwitcher />
                                    </li>
                                    <li>
                                        <StoreSwitcher />
                                    </li>
                                    <li className="nav-item d-none d-md-block">
                                        <a className="nav-link" href="javascript:;" data-toggle="modal" data-target="#loginModal" onClick={handleLoginModel}>
                                            <img src="/public/images/logout.svg" alt="logout" />
                                        </a>
                                    </li>
                                    <li className="nav-item cart-menu d-none d-md-block">
                                        <a className="nav-link" href="javascript:;" onClick={handleCart}>
                                            <img src="/public/images/cart.svg" alt="cart" />
                                            <span className="nav-text-count" id='cartBag'>0</span>
                                        </a>
                                    </li>
                                    <li className="nav-item d-none d-md-block">
                                        <a className="nav-link" href="javascript:;">
                                            <img src="/public/images/ven.svg" alt="ven" />
                                        </a>
                                    </li>

                                    <li className="nav-item mobile-section d-md-block">
                                        <a className="nav-link" href="javascript:;" data-toggle="modal" data-target="#loginModal" onClick={handleLoginModel}>
                                            <img src="/public/images/user.svg" alt="user" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="countryMenu">
                    <div className="countryMenu_header">
                        <a href="javascript:;" onClick={handleRemoveLang} className="countryMenu_close"><img src="/public/images/close.svg" alt="close" /></a>
                        <h2 className="countryMenu_title">Country</h2>
                    </div>
                    <div className="countryMenu_body">
                        <ul className="list-unstyled">
                            <li>
                                <a className="nav-link" href="javascript:;">
                                    <img src="/public/images/country1.png" alt="country"/>
                                    <span className="nav-text"> UAE (AED)</span>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="javascript:;">
                                    <img src="/public/images/ksa.png" alt="country"/>
                                    <span className="nav-text"> KSA (SAR)</span>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="javascript:;">
                                    <img src="/public/images/kwd.png" alt="country"/>
                                    <span className="nav-text"> Kuwait (KWD)</span>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="javascript:;">
                                    <img src="/public/images/bhd.png" alt="country"/>
                                    <span className="nav-text"> Bahrain (BHD)</span>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="javascript:;">
                                    <img src="/public/images/qar.png" alt="country"/>
                                    <span className="nav-text"> Quatar (QAR)</span>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="javascript:;">
                                    <img src="/public/images/omr.png" alt="country"/>
                                    <span className="nav-text"> Oman (OMR)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <MiniCart />
            </>
        );
    }

    return null;
};

Header.propTypes = {
    classNameNamees: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string,
        switchers: string,
        switchersContainer: string
    })
};

export default Header;
