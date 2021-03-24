import { useEffect, useState } from 'react'
import globals from '../config/globals'

function useIsDesktop(isDesktopDefault) {
    const [isDesktop, setIsDesktop] = useState(isDesktopDefault)

    const handleWindowSizeChange = () => {
        setIsDesktop(() => window.innerWidth > globals.breakpoints.lg)
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
    return isDesktop
}

export default useIsDesktop
