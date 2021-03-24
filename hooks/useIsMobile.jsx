import { useEffect, useState } from 'react'
import globals from '../config/globals'

function useIsMobile(isMobileDefault) {
    const [isMobile, setIsMobile] = useState(isMobileDefault)

    const handleWindowSizeChange = () => {
        setIsMobile(() => window.innerWidth < globals.breakpoints.md)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            handleWindowSizeChange()
            window.addEventListener('resize', handleWindowSizeChange)
        }
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])
    return isMobile
}

export default useIsMobile
