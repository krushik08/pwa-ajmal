import React from 'react';
import { components } from 'react-select';
import styles from './Style.module.css';

const Control = ({ children, ...props }) => {
    const { preText } = props.selectProps;

    return (
        <components.Control {...props} className={styles.selectWrapper}>
            <span className={styles.preTextStyle}>{preText}</span>
            {children}
        </components.Control>
    );
};

export default Control;
