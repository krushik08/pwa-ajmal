import React from 'react';
import StyledModal from '../Common/StyledModal';
import styles from './productPage.module.css';
import starIcon from '../../../../../public/images/IconStarBlank.svg';
import InputStyled from '../Common/InputStyled';
import TextAreaStyled from '../Common/TextAreaStyled';

const NewReview = ({ setIsOpen, isOpen }) => {
    return (
        <>
            <StyledModal setIsOpen={setIsOpen} isOpen={isOpen}>
                <span
                    className={`${styles.productCommonTitle} ${
                        styles.productReviewTitle
                    }`}
                >
                    New review
                </span>
                <div className={styles.productReviewContentWrapper}>
                    <div className={styles.productReviewStarsWarp}>
                        <img
                            src={starIcon}
                            alt=""
                            className={styles.productReviewStar}
                        />
                        <img
                            src={starIcon}
                            alt=""
                            className={styles.productReviewStar}
                        />

                        <img
                            src={starIcon}
                            alt=""
                            className={styles.productReviewStar}
                        />
                        <img
                            src={starIcon}
                            alt=""
                            className={styles.productReviewStar}
                        />
                        <img
                            src={starIcon}
                            alt=""
                            className={styles.productReviewStar}
                        />
                    </div>

                    <InputStyled label="Review headline" />
                    <TextAreaStyled label="Review content" />
                </div>
                <div className={styles.submitBtn}>
                    <button className="btn btn-primary">Submit review</button>
                </div>
            </StyledModal>
        </>
    );
};

export default NewReview;
