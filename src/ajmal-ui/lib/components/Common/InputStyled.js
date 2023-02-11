import React from 'react';
import styles from './Style.module.css';

const InputStyled = props => {
    return (
        <>
            <div className={`form-group ${styles.formGroup} ${styles.floting}`}>
                <input
                    type="text"
                    className={`form-control ${styles.formControl} ${
                        styles.formInputs
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

export default InputStyled;
