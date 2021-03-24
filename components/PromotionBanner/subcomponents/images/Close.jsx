import styles from '../../PromotionBanner.module.scss'

const Close = () => {
    return (
        <svg name="close" className={`icon ${styles.banner__closeIcon}`} role="img" alt="Close" description="Close" viewBox="0 0 13 13" width="13" height="13" aria-labelledby="closeIcon"><title id="closeIcon">Close</title><path d="M2.5,2.5l8,8"></path><path d="M2.5,10.5l8-8"></path></svg>
    )
}

export default Close
