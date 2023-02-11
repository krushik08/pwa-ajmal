import React, {useState} from 'react';
import globalCSS from './commonModals.module.css';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

// `MagentoRoute` renders the CMS page, so this component renders nothing.
// This file would be obsolete if the CMS could deliver a stylesheet.
const CommonModals = ({ setIsOpen }) => {

        var handleRemoveLoginModel = () => {
            //jQuery('#loginModal').toggleClass("out");
            //jQuery('#loginModal').toggleClass("in");
            jQuery('#loginModal').toggleClass("show");
        }

        var handletoggleLoginSignupModel = () => {
            jQuery(".loginSignUpModal").toggleClass("showSignUp");
        }

        return (
            <>
                <div className="commonModal loginSignUpModal">
                    <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginMOdalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleRemoveLoginModel}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="d-sm-flex">
                                        <div className="loginSignUpModal_left">
                                            <div className="loginDiv">
                                                <h3>Log in</h3>
                                                <ul className="list-unstyled loginBtns mb-0">
                                                    <li><a href="#" className="btn btn-login w-100"><img src="./public/images/google-icon.svg" className="img-fluid" alt="google-icon"/> Log in with Google</a></li>
                                                    <li><a href="#" className="btn btn-login w-100"><img src="./public/images/facebook-icon.svg" className="img-fluid" alt="facebook-icon"/> Log in with Facebook</a></li>
                                                    <li><a href="#" className="btn btn-login w-100"><img src="./public/images/apple-icon.svg" className="img-fluid" alt="apple-icon"/> Log in with Apple</a></li>
                                                    <li><a href="#" className="btn btn-login w-100"><img src="./public/images/whatsapp-icon.svg" className="img-fluid" alt="whatsapp-icon"/> Log in with WhatsApp</a></li>
                                                </ul>
                                                <p className="divider position-relative text-center">or use your email or number</p>
                                                <form>
                                                    <div className="form-group floting">
                                                        <input type="text" className="form-control form-control-border" placeholder="" required/>
                                                        <label className="form-control-placeholder">Email or number</label>
                                                    </div>
                                                    <a href="#" className="btn btn-secondary w-100" data-toggle="modal" data-target="#passwordModal" data-dismiss="modal">Log in</a>
                                                </form>
                                            </div>
                                            <div className="signUpDiv">
                                                <h3>Sign up</h3>
                                                <ul className="list-unstyled loginBtns mb-0">
                                                    <li><a href="#" className="btn btn-login w-100"><img src="./public/images/google-icon.svg" className="img-fluid" alt="google-icon"/> Log in with Google</a></li>
                                                    <li><a href="#" className="btn btn-login w-100"><img src="./public/images/facebook-icon.svg" className="img-fluid" alt="facebook-icon"/> Log in with Facebook</a></li>
                                                    <li><a href="#" className="btn btn-login w-100"><img src="./public/images/apple-icon.svg" className="img-fluid" alt="apple-icon"/> Log in with Apple</a></li>
                                                    <li><a href="#" className="btn btn-login w-100"><img src="./public/images/whatsapp-icon.svg" className="img-fluid" alt="whatsapp-icon"/> Log in with WhatsApp</a></li>
                                                </ul>
                                                <p className="divider position-relative text-center">or use your email or number</p>
                                                <form>
                                                    <div className="form-group floting">
                                                        <input type="text" className="form-control form-control-border" id="name" placeholder="" required/>
                                                        <label className="form-control-placeholder" htmlFor="name">Name</label>
                                                    </div>
                                                    <div className="form-group floting">
                                                        <input type="text" className="form-control form-control-border" id="email" placeholder="" required/>
                                                        <label className="form-control-placeholder" htmlFor="email">Email or number</label>
                                                    </div>
                                                    <div className="form-group floting" id="show_hide_password">
                                                        <input type="password" className="form-control form-control-border passwordField position-relative" id="password" placeholder="" required/>
                                                        <label className="form-control-placeholder" htmlFor="password">Password (min 6 characters)</label>
                                                        <img src="./public/images/password-icons.svg" alt="password-icons" className="passwordField_icons" />
                                                    </div>
                                                    <a href="#" className="btn btn-secondary w-100 loginBtn" data-toggle="modal" data-target="#signUpcodeModal" data-dismiss="modal">Sign up</a>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="loginSignUpModal_right">
                                            <div className="loginDiv h-100">
                                                <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                                                    <h3 className="mb-2">Welcome</h3>
                                                    <p className="text-center">Enter your personal details and start <br/> journey with us</p>
                                                    <a href="#" className="btn btn-primary btn-primary-outline w-100 createAccountActionBtn" onClick={handletoggleLoginSignupModel}>Create account</a>
                                                </div>
                                            </div>
                                            <div className="signUpDiv h-100">
                                                <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                                                    <h3 className="mb-2">Welcome</h3>
                                                    <p className="text-center">Log in to continue</p>
                                                    <a href="#" className="btn btn-primary btn-primary-outline w-100 loginActionBtn" onClick={handletoggleLoginSignupModel}>Log in</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
};

CommonModals.globalCSS = globalCSS;

export default CommonModals;
