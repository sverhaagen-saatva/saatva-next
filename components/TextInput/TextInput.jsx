import React, { useState } from 'react'
import styles from './TextInput.module.css'

const TextInput = ({ id, label, initialValue, error }) => {
    const [value, setValue] = useState(initialValue)
    const [isValid, setIsValid] = useState(true)

    return (
        <div className={styles.textInput}>
            <input id={id} value={value} onChange={(e) => setValue(e.target.value)} />
            <label className={styles.label} htmlFor={id}>{label}</label>
            {/* {!isValid && <FormError className={errorClassName} errorMessage={errorMessage} />} */}
        </div>
    )
}

export default TextInput
