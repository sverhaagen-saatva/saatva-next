import PropTypes from 'prop-types';
import classNames from 'classnames';

const PressQuote = ({
    children,
    className,
    logo,
    typeClassName
}) => {
    const classes = classNames({
        'pressQuote': true
    }, className)

    const plateClasses = classNames('pressQuote__plate', typeClassName)

    return (
        <div className={ classes }>
            <div className={plateClasses}>{children}</div>
            <div className="pressQuote__badge">{logo}</div>
        </div>
    )
}

PressQuote.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    logo: PropTypes.node.isRequired,
    typeClassName: PropTypes.string
}

PressQuote.defaultProps = {
    typeClassName: 't-heading3'
}

export default PressQuote;
