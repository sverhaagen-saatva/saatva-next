import classNames from 'classnames'
import styles from './Button.module.scss'

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
        <a className={classNames(styles.button, styles[kind], className, { [styles.isDisabled]: disabled })}href={href} target={target} role="button" >
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
