import FormLabel from '@components/FormLabel'
import classNames from 'classnames'
import { useState } from 'react'
import styles from './FormRadioGroup.module.scss'

const FormRadioGroup = ({ label, options, setValue }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const select = (i) => {
        setSelectedIndex(i)
        setValue(options[i])
    }

    return (
        <div>
            <FormLabel label={label} />
            <div className={styles.formRadioGroup}>
                {options.map((option, i) => (
                    <FormRadio
                        key={option.id}
                        index={i}
                        value={option.label}
                        isSelected={selectedIndex === i}
                        setSelected={() => select(i)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FormRadioGroup


const FormRadio = ({ index, value, isSelected, setSelected }) => {
    return (
        <div
            className={classNames(styles.formRadio, { [styles.isSelected]: isSelected })}
            onClick={() => setSelected(index)}
        >
            {value}
        </div>
    )
}
