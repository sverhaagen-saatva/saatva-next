import React from 'react'
import Link from 'next/Link'

import styles from '../Footer.module.css'

const LinkItem = ({
    href,
    text,
    onClick,
    target
}) => {
    return (
        <li className={styles.linkItem}>
            { onClick
                ? <button className={styles.link} onClick={() => onClick()}>{text}</button>
                : (
                    <Link href={href} target={target}>
                        <a className={styles.link}>
                            {text}
                        </a>
                    </Link>
                )
            }
        </li>
    )
}

export default LinkItem
