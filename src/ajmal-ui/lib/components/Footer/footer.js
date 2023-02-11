import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { DEFAULT_LINKS } from './sampleData';
import jQuery from 'jquery';
import { useQuery, gql, useMutation } from "@apollo/client";
import Newsletter from './Newsletter';
import CommonModals from '../CommonModals';

var prevSt = 0;
jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (prevSt > scroll) {
        jQuery(".searchBarMenu").css({"top":"35px"})
        if(scroll > 50){
            jQuery("#userHeader").addClass("smallHeader");
            jQuery("#userHeader").css({"top":"35px"});
        }else{
            jQuery("#userHeader").removeClass("smallHeader");
            jQuery("#userHeader").css({"top":"0"});
        }
    } else {
        if(scroll > 50){
            jQuery(".searchBarMenu").css({"top":"0"})
            jQuery("#userHeader").removeClass("smallHeader");
            jQuery("#userHeader").css({"top":"-130px"});
        }else{
            if(scroll > 130)
                jQuery("#userHeader").addClass("smallHeader");
            jQuery("#userHeader").css({"top":"0"});
        }
    }
    prevSt = scroll;
})

jQuery('.footerTop_form .form-control').focus(function(){
if(jQuery(this).val() != ''){
    jQuery(this).addClass('form-control-filled');
}else{
    jQuery(this).removeClass('form-control-filled');
}
})

jQuery('.footerTop_form .form-control').keyup(function(){
if(jQuery(this).val() != ''){
    jQuery(this).addClass('form-control-filled');
}else{
    jQuery(this).removeClass('form-control-filled');
}
})


// country menu js
jQuery('.country-menu a').click(function(){
    jQuery('body').toggleClass('openCountryMenu');
    jQuery('body').css('overflow','hidden')
})
jQuery('.countryMenu_close, .customOverlay').click(function(){
    jQuery('body').removeClass('openCountryMenu');
    jQuery('body').css('overflow','auto')
})


// cart menu js
jQuery('.cart-menu a').click(function(){
    jQuery('body').toggleClass('openCartMenu');
    jQuery('body').css('overflow','hidden')
})
jQuery('.cartMenu_close, .customOverlay').click(function(){
    jQuery('body').removeClass('openCartMenu');
    jQuery('body').css('overflow','auto')
})


function cartBodyHeight(){
    jQuery('.cartMenu_body').css('max-height', jQuery(window).outerHeight() - (jQuery('.cartMenu_header').outerHeight() + jQuery('.cartMenu_footer').outerHeight()));
}
cartBodyHeight();

jQuery(window).resize(function(){
    cartBodyHeight();
})
jQuery('.productLike').click(function(){
    jQuery(this).find('em').toggleClass('icon-favorite');
    jQuery(this).find('em').toggleClass('icon-favorite_outline');
})

jQuery('#searchItems').click(function(){
    jQuery('body').toggleClass('searchBarOpen');
    jQuery('body').css('overflow','hidden');
})
jQuery('.searchMenuClose, .customOverlay').click(function(){
    jQuery('body').toggleClass('searchBarOpen');
    jQuery('body').css('overflow','auto');
})

jQuery('#micButton').click(function(){
    jQuery('.voiceSearch').css({'display':'block', 'opacity': '1', 'height': 'calc(100% - 48px)'});
    jQuery('body').css('overflow','hidden');
})
jQuery('.micButtonClose').click(function(){
    jQuery('.voiceSearch').css('display', 'none');
    jQuery('body').css('overflow','auto');
})

jQuery('.voiceSearchInput').click(function(){
    jQuery('#searchProductBox').css({'display':'block', 'opacity': '1'});
    jQuery('.voiceSearchBefore').css('display','none');
    jQuery('.voiceSearchAfter').css('display','block');
    jQuery('.voiceSearch_body').css('margin-top','30px');
    jQuery('body').css('overflow','hidden');
})
jQuery('.micButtonClose').click(function(){
    jQuery('.voiceSearch').css({'display':'none', 'opacity': '0'});
    jQuery('body').css('overflow','auto');
})

jQuery('.categoryMenu_open, .categoryMenu_close').click(function(){
    jQuery('body').toggleClass('categoryMenuOpen');
})
jQuery('.countryMenuOpen, .countryMenu_close').click(function(){
    jQuery('body').removeClass('categoryMenuOpen');
    jQuery('body').toggleClass('countryMenuOpen');
})

jQuery(document).ready(function(){
    console.log("Document loaded and ready to use")
    var $fwindow = jQuery(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    $fwindow.on('scroll resize', function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });

    jQuery('[data-type="background"]').each(function(){
        var $backgroundObj = jQuery(this);
        console.log($backgroundObj);
        var bgOffset = parseInt($backgroundObj.offset().top);
        var yPos;
        var coords;
        var speed = 2;

        $fwindow.on('scroll resize', function() {
        yPos = - ((scrollTop - bgOffset + 400) / speed);
        coords = '50% '+ yPos + 'px';

        $backgroundObj.css({ backgroundPosition: coords });
        });
    });

    $fwindow.trigger('scroll');
})

const footer = gql`
  query GetFooter {
    cmsBlocks(
      identifiers: ["footer-logo","footer-links","footer-other","footer-customer-service"]
    ) {
      items {
        content
        identifier
        title
      }
    }
 }
`;

const newsletter = gql`
    mutation subscribeEmailToNewsletter($email: String!) {
        subscribeEmailToNewsletter(email: $email) {
        status
    }
}
`;

const Footer = props => {
    const { data, loading, error } = useQuery(footer);
    const [inputField, setInputField] = useState({
        email: ''
    });

    const [ subscribeEmailToNewsletter, {__data}] = useMutation(newsletter);

    const handleSubmit = () => {
        subscribeEmailToNewsletter({
            variables: inputField
        });
    }

    const handleKeyUp = (evt) => {
        setInputField({
            ...inputField, [evt.target.name]:evt.target.value
        })
    }

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if(data){
        console.log("Footer:",data)
        let footerLogo = data.cmsBlocks.items.find(item => item.identifier === "footer-logo");
        let footerLinks = data.cmsBlocks.items.find(item => item.identifier === "footer-links");
        let footerOther = data.cmsBlocks.items.find(item => item.identifier === "footer-other");
        let footerCustomerService = data.cmsBlocks.items.find(item => item.identifier === "footer-customer-service");
        //console.log("footerCustomerService",footerLogo,footerLinks,footerOther,footerCustomerService);
        return (
            <footer className="footer" id="footer">
                <Newsletter />
                <div className="footerBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 footerBottom_left" dangerouslySetInnerHTML={{ __html: footerLogo.content.replaceAll("&lt;","<").replaceAll("&gt;",">")}}>
                            </div>
                            <div className="col-md-9 footerBottom_right">
                                <div className="row">
                                    <div className="col-md-4" dangerouslySetInnerHTML={{ __html: footerCustomerService.content.replaceAll("&lt;","<").replaceAll("&gt;",">")}}>
                                    </div>
                                    <div className="col-md-5" dangerouslySetInnerHTML={{ __html: footerOther.content.replaceAll("&lt;","<").replaceAll("&gt;",">")}}>
                                    </div>
                                    <div className="col-md-3" dangerouslySetInnerHTML={{ __html: footerLinks.content.replaceAll("&lt;","<").replaceAll("&gt;",">")}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerEnd">
                    <div className="container">
                        <div className="footerEnd_inner">
                            <div className="row align-items-start">
                                <div className="col-md-3">
                                    <ul className="list-inline footerEnd_lang">
                                        <li className="list-inline-item"><a href="#" className="footerEnd_lang_drop"><img src="/public/images/country1.png" alt="country_img" className="img-fluid" /> العربية</a></li>
                                        <li className="list-inline-item"><a href="#"><img src="/public/images/card-list.svg" alt="card-list" className="img-fluid" /></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="list-inline footerEnd_Social">
                                        <li className="list-inline-item"><a href="#"><img src="/public/images/facebook.svg" className="img-fluid" /></a></li>
                                        <li className="list-inline-item"><a href="#"><img src="/public/images/twitter.svg" className="img-fluid" /></a></li>
                                        <li className="list-inline-item"><a href="#"><img src="/public/images/linked-in.svg" className="img-fluid" /></a></li>
                                        <li className="list-inline-item"><a href="#"><img src="/public/images/youtube.svg" className="img-fluid" /></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-2 footerEnd_contactInfo">
                                    <p>support@ajmalperfume.com</p>
                                    <p>80025625</p>
                                </div>
                                <div className="col-md-4 footerEnd_appBtn">
                                    <a href="#" className="d-inline-block desktop-only mr-2"><img src="/public/images/app-store.svg" alt="app-store" className="img-fluid" /></a>
                                    <a href="#" className="d-inline-block desktop-only"><img src="/public/images/google-play.svg" alt="google-play" className="img-fluid" /></a>
                                    <a href="#" className="qr-code"><img src="/public/images/qr-code.svg" alt="qr-code" className="img-fluid footerEnd_appBtn_qr" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CommonModals/>
            </footer>
        );
    }
    return null;
};

export default Footer;

Footer.defaultProps = {
    links: DEFAULT_LINKS
};

Footer.propTypes = {
    classNamees: shape({
        root: string
    })
};
