import React from 'react'
import styles from '../Footer.module.css'

const LinkList = ({ title, children }) => (
    <div className={styles.linkList}>
        <p className={styles.linkListTitle}>{title}</p>
        {children}
    </div>
)

export default LinkList
