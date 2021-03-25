import classNames from 'classnames';
import { format } from '@utils/price-format';
import SvgAwardWinning from '@components/SVGs/SvgAwardWinning';
import KlarnaMessaging from '@components/KlarnaMessaging';
import ArrowLink from '@components/ArrowLink';
import Image from 'next/image';

import globals from '@config/globals';
import products from '@config/product-shoppable-data.json';
import supplementals from '@config/product-supplemental-data.json'

const ShoppableHome = () => {
    const shoppableProducts = products.map((product, i) => {
        const classes = classNames(
            {
                'col col--xs-12': product.sku === globals.skus.classic,
                'col col--xs-12 col--lg-6': product.sku !== globals.skus.classic
            },
            'shoppableHome__link'
        );

        const containerClasses = classNames(
            {[`shoppableHome__container--${product.sku}`]: Boolean(product.sku)},
            'u-flexDisplay u-flexJustify--spaceBetween shoppableHome__container u-marginBottom--lg'
        );

        const headerText = supplementals[product.sku].productName.includes('Hybrid')
            ? 'Latex Hybrid'
            : <span dangerouslySetInnerHTML={{ __html: supplementals[product.sku].productName }}></span>;

        const backgroundPath = `${globals.ROOT_ASSET_PATH}/images/home/shoppable-home/d-shop-${product.imageName}-v1@2x.jpg`;

        return (
            <a key={`shoppableTile-${i}`} href={`/products/${product.sku}`} className={classes}>
                {/* <div className={containerClasses}> */}
                    <Image
                        className={containerClasses}
                        src={backgroundPath}
                        alt={product.imageName}
                        width={500}
                        height={350}
                        objectFit="cover"
                    />
                    <div className="shoppableHome__content shoppableHome__content--bottom">
                        <div className='shoppableHome__mattressNameContainer'>
                            { product.sku === globals.skus.classic &&
                                <SvgAwardWinning
                                    className="shoppableHome__awardWinning"
                                    height={30}
                                    fill={'#fff'}
                                    width={80}
                                />
                            }
                            <h2 className="t-heading2 u-marginBottom--none shoppableHome__mattressName">
                                {headerText}
                            </h2>
                            <div className="shoppableHome__features">
                                <span dangerouslySetInnerHTML={{ __html: supplementals[product.sku].feature }}></span>
                            </div>
                        </div>
                        <div className="shoppableHome__financing">
                            As low as&#160;&#160;
                            <KlarnaMessaging
                                className='shoppableHome__klarna'
                                dataId={globals.KLARNA_MESSAGING_IDS.WITHOUT_ANY_TEXT}
                                price={product.price}
                            />
                            <span className="shoppableHome__price">${format(product.price)}</span>
                        </div>
                    </div>
                {/* </div> */}
            </a>
        );
    });

    return (
        <div className="section section--lg u-bgColor--contrast1">
            <div className="container">
                <div className="row u-flexJustify--center">
                    <h1 className="u-marginBottom--3xl t-heading1">Find the right Saatva mattress for&nbsp;you</h1>
                    {shoppableProducts}
                    <ArrowLink
                        className="shoppableHome__compare"
                        value={'Compare All Mattresses'}
                        url={'/mattresses?compare=true'} 
                    />
                </div>
            </div>
        </div>
    );
}

export default ShoppableHome;
