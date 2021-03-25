import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class FlickitySlider extends React.PureComponent {
    componentDidMount = () => {
        const {
            options,
            onChange,
            setActiveIndex,
            activeIndex
        } = this.props

        const Flickity = require('flickity')
        require('flickity-imagesloaded')
        const flickityOptions = {
            wrapAround: true,
            arrowShape: {
                x0: 20,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 50,
                x3: 30
            },
            ...options
        }
        this.flickitySlider = new Flickity(this.node, flickityOptions)
        this.flickitySlider.on('change', onChange)
        this.flickitySlider.on('change', setActiveIndex)
        this.flickitySlider.select(activeIndex)
    }

    componentDidUpdate = () => {
        const Flickity = require('flickity')
        const {
            options,
            activeIndex
        } = this.props
        require('flickity-imagesloaded')
        const flickityOptions = {
            wrapAround: true,
            arrowShape: {
                x0: 20,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 50,
                x3: 30
            },
            ...options
        }
        if (typeof activeIndex !== 'undefined') {
            if (activeIndex !== this.flickitySlider.selectedIndex) {
                this.flickitySlider.select(activeIndex)
            }
        }
        this.flickitySlider = new Flickity(this.node, flickityOptions)
    }

    render () {
        const {
            children,
            className
        } = this.props

        const classes = classNames('slides', className)

        return (
            <div className={ classes } ref={ c => (this.node = c) }>
                { children }
            </div>
        )
    }
}

FlickitySlider.propTypes = {
    activeIndex: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.array.isRequired,
    options: PropTypes.object,
    onChange: PropTypes.func,
    setActiveIndex: PropTypes.func
}

FlickitySlider.defaultProps = {
    onChange: (newIndex) => {}, // eslint-disable-line no-unused-vars
    setActiveIndex: (newIndex) => {} // eslint-disable-line no-unused-vars
}

export default FlickitySlider
