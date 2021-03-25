import PropTypes from 'prop-types';
import { Button } from '@components/Button';

const AbsoluteAnchor = ({
    children,
    className,
    path,
    kind,
    target,
    ...other
}) => {
    return kind ? (
        <Button className={className} href={path} kind={kind} {...other}>{children}</Button>
    ) : (
        <a className={className} href={path} target={target} {...other}>{children}</a>
    );
}

AbsoluteAnchor.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    path: PropTypes.string.isRequired,
    kind: PropTypes.string,
    target: PropTypes.string
}

AbsoluteAnchor.defaultProps = {
    target: '_self'
}

export default AbsoluteAnchor;
