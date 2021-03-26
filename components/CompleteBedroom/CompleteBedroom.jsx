import { useContext } from 'react';
import { Button } from '@components/Button';
import { ROOT_ASSET_PATH } from '@config/globals';
import categoryData from '@config/category-supplemental-data.json';
import { Translations } from '@context';
import Image from 'next/image';

const copy = {
    mattresses: {
        title: 'Mattresses',
        description: 'Our made-to-order luxury mattresses are handcrafted using the highest quality materials with comfort options to suit every sleeper.',
        imageAlt: 'Saatva mattress'
    },
    bedding: {
        title: 'Bedding',
        description: 'Our line of luxury bedding includes irresistibly soft organic cotton sheets, a supportive Talalay latex pillow, and more.',
        imageAlt: 'woman lying on Saatva pillow and sheets'
    },
    bedFrames: {
        title: 'Designer bed frames',
        description: 'Our new collection of handmade bed frames takes its inspiration from coastal cities and towns around the globe.',
        imageAlt: 'mattress on saatva bedframe'
    }
}

const CompleteBedroom = () => {
    const { getTranslatedText } = useContext(Translations.Context);

    const classes = 'container u-marginBottom--3xl';
    const columnClasses = 'col col--xs-12 col--md-6';
    const containerClasses = 'u-flex u-flexJustify--center u-textCenter';
    const headingClasses = 't-heading3 u-marginBottom--xs u-marginTop--xs';
    const contentClasses = 'containerCol--md-11 containerCol--lg-10 u-marginBottom completeBedroom__content';
    const getDisplayCategories = currentCategory => ['mattresses', 'bedding', 'bed-frames'].filter(category => category !== currentCategory);
    const displayCategories = getDisplayCategories('mattresses');

    const buildCard = ({
        parentDirectory,
        fileName,
        fileType,
        categoryName,
        href,
        buttonLabel
    }, index) => {
        return (
            <div key={index} className={columnClasses}>
                <div className={containerClasses}>
                    <a className="pictureLink" href={href}>
                        <Image
                            className="completeBedroom__img"
                            src={`${ROOT_ASSET_PATH}/images/${parentDirectory}/${fileName}/d-${fileName}@2x.${fileType}`}
                            alt={copy[categoryName].imageAlt}
                            width={600}
                            height={400}
                            objectFit="cover"
                        />
                    </a>
                    <h3 className={headingClasses}>{copy[categoryName].title}</h3>
                    <p className={contentClasses}>{copy[categoryName].description}</p>
                    <Button kind="primary" href={href}>{getTranslatedText(`labels.${buttonLabel}`)}</Button>
                </div>
            </div>
        );
    }

    return (
        <section className="section">
            <div className={classes}>
                <h2 className="t-heading2 u-textCenter u-marginBottom--2dot5xl">Complete your bedroom</h2>
                <div className="row row--gutter-lg row--center-xs">
                    {
                        displayCategories.map((category, index) => {
                            return buildCard(categoryData[category].displayProps, index)
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default CompleteBedroom;
