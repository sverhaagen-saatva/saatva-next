import Dropdown from '@components/Dropdown'
import FormRadioGroup from '@components/FormRadioGroup'
import styles from './ProductConfig.module.scss'

const ProductConfig = ({ options, changeConfig }) => {
    return (
        <div>
            <div className="u-flexDisplay">
                <div className={styles.dropdownSize}>
                    <Dropdown
                        label="Select Size"
                        options={options.size}
                        setValue={(value) => changeConfig('size', value)}
                    />
                </div>
                <div className={styles.dropdownHeight}>
                    <Dropdown
                        label="Height"
                        options={options.height}
                        setValue={(value) => changeConfig('height', value)}
                    />
                </div>
            </div>

            <div className="u-marginVertical--lg">
                <FormRadioGroup label="Select Comfort Level" options={options.comfort} setValue={(value) => changeConfig('comfort', value)} />
            </div>
        </div>
    )
}

export default ProductConfig
