import React from 'react';
import styles from './Style.module.css';

const TextAreaStyled = props => {
    return (
        <>
            <div className={`form-group ${styles.formGroup} ${styles.floting}`}>
                <textarea
                    type="text"
                    className={`form-control ${styles.formControl} ${
                        styles.formArea
                    }`}
                    placeholder=""
                    required
                />
                <label className={styles.formControlPlaceholder}>
                    {props.label}
                </label>
            </div>
        </>
    );
};

export default TextAreaStyled;
