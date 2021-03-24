const { scroller } = require('react-scroll')
const globals = require('../config/globals')

// Offset objects leveraged in scrolling utilities
exports.offsets = {
    none: {
        desktop: 0,
        tablet: 0,
        mobile: 0
    },
    header: {
        desktop: globals.offsets.header,
        tablet: globals.offsets.header,
        mobile: globals.offsets.mobileHeader
    },
    floatingProductPanel: {
        desktop: globals.offsets.floatingProductPanel,
        tablet: globals.offsets.floatingProductPanel,
        mobile: globals.offsets.mobileFloatingProductPanel
    },
    both: {
        desktop: globals.offsets.header + globals.offsets.floatingProductPanel,
        tablet: globals.offsets.header + globals.offsets.floatingProductPanel,
        mobile: globals.offsets.mobileHeader + globals.offsets.mobileFloatingProductPanel
    }
}

// Determine the current device type and return the key used to access the corresponding offsets
exports.getCurrentDeviceType = () => {
    if (typeof window === 'undefined') {
        throw Error('Cannot retrieve window object - position.getOffsetKey should only be called after the DOM is rendered')
    } else if (window.innerWidth < globals.breakpoints.sm) {
        return 'mobile'
    } else if (window.innerWidth < globals.breakpoints.lg) {
        return 'tablet'
    } else {
        return 'desktop'
    }
}

// Scrolls an element to the top of the viewport.
// Defaults to header offset, but can be overridden with a custom offset object
exports.scrollToElement = (elementId, responsiveOffsets = this.offsets.header) => {
    const breakpointName = this.getCurrentDeviceType()
    const offset = responsiveOffsets[breakpointName]
    const _scrollToElement = (elementId, offset) => {
        scroller.scrollTo(elementId, {
            duration: 500,
            smooth: 'easeInOutQuad',
            offset
        })
    }

    // Mobile layout offsets are inconsistent across pages, seemingly due to timing of elements moving after initial render
    // `setTimeout` resolves the issue by tweaking the placement after things settle
    breakpointName === 'desktop'
        ? _scrollToElement(elementId, offset)
        : setTimeout(() => { _scrollToElement(elementId, offset) }, 500)
}

// determine if the element is either above or below the viewport
// TODO: This was taken from saatvamattress_node-- reconcile differences between it and existing isAboveViewport if necessary and possibly rename
exports.isInViewport = (el, offset = 0) => {
    const { top, bottom } = el.getBoundingClientRect()
    const vHeight = (window.innerHeight || document.documentElement.clientHeight) + offset

    return (
        (top > 0 || bottom > 0) &&
        top < vHeight
    )
}

// determine if the element's bottom is in the viewport
exports.isCompletelyInViewport = (el, offset = 0) => {
    const { top, bottom } = el.getBoundingClientRect()
    const elHeight = el.offsetHeight
    const vHeight = (window.innerHeight || document.documentElement.clientHeight) + offset

    return (
        (top > 0 || bottom > 0) &&
        top < vHeight - elHeight
    )
}

// determine if element has scrolled ABOVE the viewport
exports.isAboveViewport = (el) => {
    const { top, bottom } = el.getBoundingClientRect()
    return (top > 0 || bottom > 0)
}

// determine if element has scrolled ABOVE the viewport
exports.isAboveViewportReverse = (el, offset = 0) => {
    const { top, bottom } = el.getBoundingClientRect()
    const checkpoint = 0 + offset
    return (top < checkpoint || bottom < checkpoint)
}

// get an elements offset from top of document
exports.getDocumentOffset = (el) => {
    let elementToCheck = el
    let distance = 0

    // travel up DOM to get distance between child and parents to get totall offset from top of document
    if (elementToCheck.offsetParent) {
        do {
            distance += elementToCheck.offsetTop
            elementToCheck = elementToCheck.offsetParent
        } while (elementToCheck)
    }
    return distance < 0 ? 0 : distance
}
