import { useState } from 'react'
import FormLabel from '@components/FormLabel'
import Icon from '@components/Icon/Icon'
import classNames from 'classnames'
import styles from './Dropdown.module.scss'

const Dropdown = ({ label, options, setValue }) => {
    const [selected, setSelected] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const select = (i) => {
        setValue(options[i])
        setSelected(i)
    }

    return (
        <>
            <FormLabel label={label} />
            <div className={styles.wrapper}>
                <select className={styles.select}>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>{option.label}</option>
                    ))}
                </select>
                <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
                    <div className={styles.toggle}>
                        <span className={styles.dropdownText}>
                            {options[selected].label}
                        </span>

                        <Icon
                            name="expand"
                            description="dropdown arrow"
                            titleId="dropdownArrow"
                            alt="dropdown arrow"
                            className={classNames(styles.dropDownIcon, { [styles.isOpen]: isOpen })}
                        />
                    </div>
                    <ul role="listbox" className={classNames(styles.list, { [styles.isOpen]: isOpen })}>
                        {options.map((option, i) => (
                            <li
                                key={i}
                                id={option.id}
                                value={option.id}
                                role="option"
                                className={classNames(styles.item, { [styles.isSelected]: selected === i })}
                                onClick={() => select(i)}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dropdown
