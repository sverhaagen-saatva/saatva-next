import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ProductSlider.module.scss'
import classNames from 'classnames'

const ProductImageSlider = ({
    images,
    showLineal
}) => {
    const [sliderThumbs, setSliderThumbs] = useState([])
    const [selectedImageSrc, setSelectedImageSrc] = useState(getImageSources(images[0], showLineal).src)
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        const newSliderThumbs = images.map(image => getImageSources(image, showLineal).thumbSrc)
        setSliderThumbs(newSliderThumbs)
    }, [images, showLineal])

    const selectImage = useCallback((index) => {
        setSelectedImageSrc(getImageSources(images[index], showLineal).src)
        setSelectedIndex(index)
    }, [images, showLineal])

    return (
        <div>
            <Image
                className={styles.sliderImage}
                src={selectedImageSrc}
                width={634}
                height={349}
                layout="responsive"
            />

            <div className={styles.sliderThumbTrack}>
                {sliderThumbs.map((src, i) => (
                    <div key={i} className={classNames(styles.sliderThumb, { [styles.selectedSliderThumb]: selectedIndex === i })}>
                        <Image
                            className={styles.sliderThumbImage}
                            src={src}
                            width={96}
                            height={62}
                            layout="responsive"
                            onClick={() => selectImage(i)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImageSlider

const getImageSources = (image, showLineal) => {
    const key = showLineal && image.sources.lineal ? 'lineal' : 'default'
    return image.sources[key]
}
