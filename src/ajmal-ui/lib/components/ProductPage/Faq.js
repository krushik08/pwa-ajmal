import React, { useState } from 'react';
import styles from './productPage.module.css';
import NextArrow from '../../../../../public/images/next-arrow.svg';
import AccordionUp from '../../../../../public/images/IconAccordionUp.svg';
import AccordionDown from '../../../../../public/images/IconAccordionDown.svg';
import YourQuestion from './YourQuestion';
import useMobileView from '../Utils/MobileView';
const data = [
    {
        text: '  You add credibility '
    },
    {
        text: '  You add credibility '
    }
];
const Faq = () => {
    const [faqIsOpen, setFaqIsOpen] = useState('false');
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMobileView();

    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                <div className={styles.productReviewTopWrapper}>
                    <div>
                        <span className={styles.productCommonTitle}>FAQ</span>
                    </div>

                    <a href="#" className={styles.viewAll}>
                        View all{' '}
                        <img
                            src={NextArrow}
                            className="img-fluid"
                            alt="arrow"
                        />
                    </a>
                </div>

                <div className={styles.productFaqWrapper}>
                    {data.map(item => (
                        <FaqComponent item={item} />
                    ))}
                </div>

                <div className={styles.productAskQue}>
                    {!isMobile ? (
                        <button
                            className="btn btn-primary btn-primary-outline"
                            onClick={() => setIsOpen(true)}
                        >
                            Ask a question
                        </button>
                    ) : (
                        <a
                            className="discoverAllBtn"
                            href="#"
                            onClick={() => setIsOpen(true)}
                        >
                            Discover all
                        </a>
                    )}
                </div>
            </div>

            {isOpen && <YourQuestion setIsOpen={setIsOpen} isOpen={isOpen} />}
        </>
    );
};

export default Faq;

const FaqComponent = ({ item }) => {
    const [faqIsOpen, setFaqIsOpen] = useState(false);
    return (
        <>
            <div className={styles.productFqaBox}>
                <div className={` ${styles.productFaq}`}>
                    <div>
                        <span
                            className={
                                faqIsOpen
                                    ? `${styles.activeClass}`
                                    : `${styles.productFaqTitle}`
                            }
                        >
                            Does it reduce ageing symptoms?
                        </span>
                        {faqIsOpen && (
                            <div className={styles.productFaqTextWrapper}>
                                <p className={styles.productFaqText}>
                                    You add credibility and value through
                                    meaningful content in the many forms your
                                    audience requires. This will typically
                                    include audio, visual/video, and layering of
                                    content types now, compared to traditional
                                    text-only content provision.{' '}
                                </p>
                            </div>
                        )}
                    </div>
                    <button className={styles.productFaqToggle}>
                        {!faqIsOpen ? (
                            <img
                                src={AccordionDown}
                                alt=""
                                onClick={() => setFaqIsOpen(true)}
                                className={styles.accordionDown}
                            />
                        ) : (
                            <img
                                src={AccordionUp}
                                alt=""
                                onClick={() => setFaqIsOpen(false)}
                                className={styles.accordionUp}
                            />
                        )}
                    </button>
                </div>
            </div>
        </>
    );
};
