import Icon from '../Icon/index'
import Image from 'next/image'
import {
    ROOT_ASSET_PATH
} from '../../config/globals'

const WhatYoullGet = () => {
    const svgPath = `${ROOT_ASSET_PATH}/icons/icon_support.svg`
    return (
        <section className="section whatYoullGet">
            <div className="container">
                <div className="row">
                    <div className="whatYoullGet__tile col col--xs-12 col--md-4">
                        <Icon
                            className={'whatYoullGet__valueProp'}
                            key={'1'}
                            name="cotton" alt={'Alt text'}
                            titleId="cotton" />
                        <h3 className={'t-heading4'}>Premium materials</h3>
                        <p>Handcrafted with the highest quality materials, including antimicrobial organic cotton, CertiPUR-US certified foams, and eco-friendly components.</p>
                    </div>
                    <div className="whatYoullGet__tile col col--xs-12 col--md-4">
                        <Image
                            src={svgPath}
                            className={'whatYoullGet__valueProp'}
                            alt="Support svg"
                            width={100}
                            height={100}
                            layout="responsive"
                        />
                        <h3 className={'t-heading4'}> Back support</h3>
                        <p>
                            Every Saatva mattress is engineered for pain-free sleep, with dedicated lumbar zone support to promote healthy spinal alignment.
                        </p>
                    </div>
                    <div className="whatYoullGet__tile col col--xs-12 col--md-4">
                        <Icon
                            className={'whatYoullGet__valueProp'}
                            key={'1'}
                            name="delivery" alt={'Alt text'}
                            titleId="delivery" />
                        <h3 className={'t-heading4'}>Unparalleled service</h3>
                        <p>
                            Enjoy free white glove delivery, 24/7 customer support, and 180 nights to try your Saatva mattress in the comfort of home.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default WhatYoullGet