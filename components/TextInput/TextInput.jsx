import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './TextInput.module.css'

const TextInput = ({ id, label, initialValue, className, inputClassName, error }) => {
    const [value, setValue] = useState(initialValue)
    const [isValid, setIsValid] = useState(true)

    return (
        <div className={classNames(className, styles.textInput)}>
            <input id={id} value={value} onChange={(e) => setValue(e.target.value)} className={classNames(styles.input, inputClassName)} />
            <label className={styles.label} htmlFor={id}>{label}</label>
            {/* {!isValid && <FormError className={errorClassName} errorMessage={errorMessage} />} */}
        </div>
    )
}

export default TextInput
