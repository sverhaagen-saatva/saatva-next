import { socialMediaIconData } from '../data'

const EmailSection = () => {
    return (
        <div className="footer__socialIcons">
            {
                socialMediaIconData.map((icon, i) => (
                    <a href={icon.url} className="footer__socialIconLink" target="_blank" rel="noopener noreferrer" key={`social${i}`}>
                        {/* <Icon {...icon} className="footer__socialIcon" titleId="socialIcon" description={icon.name} /> */}
                    </a>
                ))
            }
        </div>
    )
}

export default EmailSection
