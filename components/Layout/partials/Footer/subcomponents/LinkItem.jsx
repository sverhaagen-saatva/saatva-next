import React from 'react'
import Link from 'next/Link'

import styles from '../Footer.module.css'

const LinkItem = ({
    className,
    href,
    text,
    onClick,
    target,
    ...other
}) => {
    return (
        <li className={styles.linkItem}>
            { onClick
                ? <button className={styles.link} onClick={() => onClick()}>{text}</button>
                : (
                    <Link className={styles.link} href={href} target={target} {...other}>
                        {text}
                    </Link>
                )
            }
        </li>
    )
}

export default LinkItem
