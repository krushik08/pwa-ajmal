import React from 'react';
import styles from './Style.module.css';
import Modal from 'react-bootstrap/Modal';

const StyledModal = ({ children, setIsOpen, isOpen }) => {
    return (
        <>
            <Modal
                show={isOpen}
                id="commonModal"
                className={`fade ${styles.modal_wrapper}`}
            >
                <div>
                    <div
                        className={`${styles.modal_styled} ${
                            styles.show_modal
                        } ${styles.fade_modal} `}
                        id="loginMOdal"
                        tabindex="-1"
                        role="dialog"
                        aria-hidden="true"
                    >
                        <div
                            className={` ${styles.modal_dialog} modal-dialog ${
                                styles.modal_dialog_centered
                            } ${styles.modal_dialog_slideout}`}
                            role="document"
                        >
                            <div
                                className={`modal-content ${
                                    styles.modal_content
                                }`}
                            >
                                <div
                                    className={`${
                                        styles.modal_body
                                    } modal-body`}
                                >
                                    <button
                                        type="button"
                                        className={styles.close}
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            {/* <div className={`${styles.modal_wrapper}`}>
                <div
                    className={`${styles.modal_styled} ${styles.show_modal} ${
                        styles.fade_modal
                    } `}
                    id="loginMOdal"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                >
                    <div
                        className={` ${styles.modal_dialog} modal-dialog ${
                            styles.modal_dialog_centered
                        } ${styles.modal_dialog_slideout}`}
                        role="document"
                    >
                        <div
                            className={`modal-content ${styles.modal_content}`}
                        >
                            <div className={`${styles.modal_body} modal-body`}>
                                <button
                                    type="button"
                                    className={styles.close}
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default StyledModal;
