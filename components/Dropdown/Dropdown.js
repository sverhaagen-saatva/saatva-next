import Icon from '@components/Icon/Icon'
import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './Dropdown.module.scss'

const Dropdown = ({ label, options }) => {
    const [selected, setSelected] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <label className={styles.label}>
                {label}
            </label>
            <div className={styles.wrapper}>
                <select className={styles.select}>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>{option.label}</option>
                    ))}
                </select>
                <div className={styles.dropdown}>
                    <div className={styles.toggle}>
                        <span className={styles.dropdownText}>
                            {options[selected].label}
                        </span>

                        <Icon
                            name="dropdown"
                            description="dropdown arrow"
                            titleId="dropdownArrow"
                            alt="dropdown arrow"
                            className={classNames(styles.dropDownIcon, { [styles.isOpen]: isOpen })}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown
