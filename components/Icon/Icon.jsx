import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import icons from './icons.json'

/**
 * Return an icon from a provided Icon List
 * @param {string} name - "name" property of icon to be found in iconList
 * @param {array} iconList - JSON Array of Objects
 * @example
 * this.getIcon('icon--star', icons.json);
 */
export function getIcon(name, iconList = icons) {
    const icon = iconList.filter(icon => icon.name === name)

    if (icon.length === 0) {
        // TODO should this throw an error in the log instead/as well?
        return false
    } else if (icon.length > 1) {
        throw new Error(`More than one icon found with the name '${name}'`)
    } else {
        return icon[0]
    }
}

/**
 * Returns Elements (shapes) in SVG
 * @param {Object} svgShapes - Object including SVG elements and nodes (paths, rects, etc.)
 * @example
 * buildSvgEls(icon.svgShapes);
 */
export function buildSvgEls(svgShapes) {
    const svgElements = Object.keys(svgShapes)
        .filter(key => svgShapes[key])
        .map(svgProp => {
            const shapes = svgShapes[svgProp]
            const Shape = `${svgProp}`

            return shapes.map((shape, index) => {
                const shapeProps = { ...shape }
                shapeProps.key = `${svgProp}${index}`

                return <Shape key={shapeProps.key} {...shapeProps} />
            })
        })

    return svgElements
}

function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}

// stateless component!
const Icon = ({
    name,
    className,
    description,
    role,
    alt,
    style,
    width,
    height,
    fill,
    iconList,
    titleId,
    ...other
}) => {
    const icon = iconList ? getIcon(name, iconList) : getIcon(name)
    titleId = titleId ? titleId : camelize(alt)
    // setup icon className
    const buttonClasses = classNames(
        { 'icon': true },
        `icon--${name}`,
        className
    )

    const iconProps = {
        name,
        className: buttonClasses,
        role,
        alt: alt || icon.alt,
        description: description || alt,
        viewBox: icon.viewBox,
        fill,
        width: width || icon.width,
        height: height || icon.height,
        style,
        ...other
    }

    // TODO allow for passing in svgs as symbols once we have appropriate assets and webpack setup for symbols/svs
    // ex. <use xlinkHref={`#icons_${props.name}`} />
    const svgContent = icon ? buildSvgEls(icon.svgShapes) : ''

    return (
        <svg {...iconProps} aria-labelledby={titleId}>
            <title id={titleId}>{description}</title>
            {svgContent}
        </svg>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    description: PropTypes.string,
    titleId: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    role: PropTypes.string,
    viewBox: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,
    iconList: PropTypes.array
}

Icon.defaultProps = {
    role: 'img',
    iconList: null
}

export default Icon
