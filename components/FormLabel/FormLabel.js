import React from 'react'
import styles from './FormLabel.module.scss'

const FormLabel = ({ label }) => {
    return (
        <label className={styles.label}>
            {label}
        </label>
    )
}

export default FormLabel
