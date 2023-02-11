import React from 'react';
import StyledModal from '../Common/StyledModal';
import styles from './productPage.module.css';
import starIcon from '../../../../../public/images/IconStarBlank.svg';
import InputStyled from '../Common/InputStyled';
import TextAreaStyled from '../Common/TextAreaStyled';

const YourQuestion = ({ setIsOpen, isOpen }) => {
    return (
        <>
            {' '}
            <StyledModal setIsOpen={setIsOpen} isOpen={isOpen}>
                <span
                    className={`${styles.productCommonTitle} ${
                        styles.productReviewTitle
                    }`}
                >
                    Your question
                </span>
                <div className={styles.productReviewContentWrapper}>
                    <InputStyled label="Name" />
                    <InputStyled label="Email" />
                    <InputStyled label="Review headline" />
                    <TextAreaStyled label="Ask your question" />
                </div>
                <div className={styles.submitBtn}>
                    <button className="btn btn-primary">Submit question</button>
                </div>
            </StyledModal>
        </>
    );
};

export default YourQuestion;
