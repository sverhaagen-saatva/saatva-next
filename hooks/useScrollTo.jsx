import Scroll from 'react-scroll'
import globals from '../config/globals'
import position from '../utils/position'

function useScrollTo(elementId) {
    return () => {
        const scrollOptions = {
            duration: 1000
        }

        if (typeof window !== 'undefined') {
            Scroll.animateScroll.scrollTo(position.getDocumentOffset(document.getElementById(elementId)) + globals.offsets.floatingProductPanel + globals.offsets.header, scrollOptions)
        }
    }
}

export default useScrollTo
