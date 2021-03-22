import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.css'
const Button = ({
    children,
    className,
    disabled,
    kind,
    type,
    href,
    target,
    onClick
}) => {
    return href ? (
        <a {...buttonProps} href={href} target={target} role="button" {...other} >
            {children}
        </a>
    ) : (
        <button
            className={classNames(styles.button, styles[kind], className, { [styles.isDisabled]: disabled })}
            type={type}
            onClick={evt => {
                if (!disabled) {
                    onClick(evt)
                }
            }}

        >
            {children}
        </button>
    )
}

export default Button

Button.defaultProps = {
    type: 'button',
    disabled: false,
    kind: '',
    target: '_self',
    onClick: () => { }
}
