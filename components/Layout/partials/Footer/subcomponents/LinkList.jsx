import styles from '../Footer.module.scss'

const LinkList = ({ title, children }) => (
    <div className={styles.linkList}>
        <p className={styles.linkListTitle}>{title}</p>
        {children}
    </div>
)

export default LinkList
