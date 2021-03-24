module.exports = {
    storeView: 'saatva_us',
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1025,
        xl: 1200
    },
    containerWidths: {
        sm: 540,
        md: 680,
        lg: 932,
        xl: 1110
    },
    CATEGORIES: {
        bedFrames: 'bed-frames',
        bedding: 'bedding',
        mattresses: 'mattresses',
        bases: 'bases'
    },
    skus: {
        mattressRemoval: 'mattress-removal-1',
        lineal: 'lineal-adjustable-base',
        linealSolaire: 'lineal-adjustable-base-solaire',
        foundation: 'foundation',
        foundationSolaire: 'foundation-solaire',
        foundationHD: 'foundation-hd',
        frame: '9035',
        frameSolaire: 'adjustable-frame',
        solaire: 'solaire',
        hd: 'saatva-hd',
        youth: 'saatva-youth',
        latexHybrid: 'saatva-latex-hybrid',
        classic: 'saatva-classic',
        loom: 'loom-and-leaf',
        zenhaven: 'zenhaven',
        amalfi: 'amalfi',
        marbella: 'marbella',
        oslo: 'oslo',
        marseille: 'marseille',
        minori: 'minori',
        santorini: 'santorini',
        porto: 'porto',
        copenhagen: 'copenhagen',
        valencia: 'valencia',
        sydney: 'sydney',
        sheets: 'organic-cotton-sheets',
        organicPercaleSheets: 'organic-percale-sheet-set',
        linenSheets: 'linen-sheet-set',
        pillowcases: 'organic-cotton-pillowcase-pair',
        pillow: 'the-saatva-pillow',
        downAlternativePillow: 'down-alternative-pillow',
        foamPillow: 'memory-foam-pillow',
        pad: 'organic-mattress-pad',
        weightedBlanket: 'organic-weighted-blanket',
        topper: 'mattress-topper',
        bedding: [
            'organic-cotton-sheets',
            'organic-percale-sheet-set',
            'linen-sheet-set',
            'lofton-pillowcase-pair',
            'the-saatva-pillow',
            'down-alternative-pillow',
            'memory-foam-pillow',
            'organic-mattress-pad',
            'organic-weighted-blanket',
            'mattress-topper',
            'waterproof-mattress-protector'
        ],
        beddingBundles: [
            'sateen-sheets-latex-pillow-pad',
            'sateen-sheets-memory-foam-pillow',
            'sateen-sheets-latex-pillow'
        ],
        mattresses: ['saatva-classic', 'loom-and-leaf', 'zenhaven', 'solaire', 'saatva-hd', 'saatva-youth', 'saatva-latex-hybrid'],
        bedframes: ['amalfi', 'marbella', 'oslo', 'marseille', 'minori', 'santorini', 'porto', 'copenhagen', 'valencia', 'sydney'],
        platformBedframes: ['santorini', 'porto', 'copenhagen', 'valencia', 'sydney'],
        pillows: ['the-saatva-pillow', 'memory-foam-pillow', 'down-alternative-pillow'],
        mattressProtector: 'waterproof-mattress-protector'
    },
    pillowBundleSkus: {
        'P27D31CF18-SQ': 'P27D31CF18-2PKQ',
        'P27D31CF18-K': 'P27D31CF18-2PKK',
        'SAAGRPHPLW-Q': 'SAAGRPHPLW2PK-Q',
        'SAAGRPHPLW-K': 'SAAGRPHPLW2PK-K',
        'SAA5050PLW-Q': 'SAA5050PLW2PK-Q',
        'SAA5050PLW-K': 'SAA5050PLW2PK-K'
    },
    kingPillowSkus: [
        'P27D31CF18-K',
        'SAAGRPHPLW-K',
        'SAA5050PLW-K'
    ],
    storeViews: {
        us: {
            code: process.env.MAGENTO_STORE_VIEW,
            countryCode: 'us'
        }
    },
    zipPatterns: {
        US: '(\\d{5}([\\-]\\d{4})?)',
        CA: '^[A-Za-z][0-9][A-Za-z]( ?)[0-9][A-Za-z][0-9]'
    },
    regex: {
        email: '^(?!.*([._%+-])\\1)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$',
        phone: '^\\s*((\\d{3}[-\\s]?)|([(]{1}\\d{3}[)]{1}[\\s]?))(\\d{3})[-\\s]?(\\d{4})\\s*$',
        password: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,25}$'
    },
    offsets: {
        header: -70,
        mobileHeader: -47,
        floatingProductPanel: -95,
        mobileFloatingProductPanel: -79
    },
    messages: {
        noShipCanada: {
            // These keys should map to global sku values (from above)
            solaire: 'Thank you for your interest in Solaire. Currently we do not deliver to your location in Canada. Please contact one of our customer support representatives at 1-877-672-2882 if you would like to be notified when Solaire becomes available in your area.',
            'saatva-hd': 'Thank you for your interest in Saatva HD. Currently we do not deliver to your location in Canada. Please contact one of our customer support representatives at 1-877-672-2882 if you would like to be notified when Saatva HD becomes available in your area.',
            zenhaven: 'Thank you for your interest in Zenhaven. Currently we do not deliver to your location in Canada. Please contact one of our customer support representatives at 1-877-672-2882 if you would like to be notified when Zenhaven becomes available in your area.'
        },
        errors: {
            // Configured as array to allow for flexibility displaying in UI
            maintenance: ['We\'re undergoing maintenance.', 'Try again in 15 minutes.']
        }
    },
    phoneNumbers: {
        standard: '1-877-672-2882'
    },
    KLARNA_MESSAGING_IDS: {
        WITH_KLARNA_TEXT: '846c668a-bcdd-42c2-8876-b132c06b08c9',
        WITHOUT_KLARNA_TEXT: '0d14d34d-3d51-40c8-9454-bf5b1af0cd30',
        WITHOUT_ANY_TEXT: '8bd1f52e-7bec-4305-8bcb-cee4c2f89a04',
        SIX_MONTHS: '8e1bee08-941c-4d3d-8acd-1d503cc85e55',
        TWELVE_MONTHS: '046a9830-bbe6-4d56-a903-3a7049494467'
    },
    colors: {
        navBase: '#6b6257',
        actionBase: '#c19678'
    },
    heights: {
        banner: 40,
        tabletNav: 56,
        desktopNav: 65
    },
    defaultCurrency: {
        code: 'USD',
        symbol: '$',
        available: []
    },
    PRODUCT_ATTRIBUTES: {
        mattressType: 'mattressType',
        mattressSize: 'mattressSize',
        mattressHeight: 'mattressHeight',
        mattressComfort: 'comfortLevel', // TODO: update to mattressComfort once updated in magento attribute
        foundationHeight: 'foundationHeight',
        beddingSize: 'size',
        beddingColor: 'color',
        blanketSize: 'size',
        blanketColor: 'color',
        weightedBlanketSize: 'weightedBlanketSize'
    },
    PILLOW_SIZE_MAP: {
        'Twin': {
            pillowSize: 'Queen',
            pillowQty: 1
        },
        'Twin XL': {
            pillowSize: 'Queen',
            pillowQty: 1
        },
        'Full': {
            pillowSize: 'Queen',
            pillowQty: 2
        },
        'Queen': {
            pillowSize: 'Queen',
            pillowQty: 2
        },
        'Queen Upper-Flex': {
            pillowSize: 'Queen',
            pillowQty: 2
        },
        'Split Queen': {
            pillowSize: 'Queen',
            pillowQty: 2
        },
        'King': {
            pillowSize: 'King',
            pillowQty: 2
        },
        'King Upper-Flex': {
            pillowSize: 'King',
            pillowQty: 2
        },
        'Split King': {
            pillowSize: 'King',
            pillowQty: 2
        },
        'Cal King': {
            pillowSize: 'King',
            pillowQty: 2
        },
        'Split Cal King': {
            pillowSize: 'King',
            pillowQty: 2
        }
    },
    BLANKET_SIZE_MAP: {
        'Twin': {
            size: 'Queen'
        },
        'Twin XL': {
            size: 'Queen'
        },
        'Full': {
            size: 'Queen'
        },
        'Queen': {
            size: 'Queen'
        },
        'Queen Upper-Flex': {
            size: 'Queen'
        },
        'Split Queen': {
            size: 'Queen'
        },
        'King': {
            size: 'King'
        },
        'King Upper-Flex': {
            size: 'King'
        },
        'Split King': {
            size: 'King'
        },
        'Cal King': {
            size: 'King'
        },
        'Split Cal King': {
            size: 'King'
        }
    },
    FEATURE_FLAGS: {
        QUIZ_FOOTER_EMAIL: 'quizfooteremail',
        VALUE_COUPON: 'valuecoupon'
    },
    REVIEW_SORT_LABELS: {
        topReviews: 'Top Reviews',
        mostRecent: 'Most Recent',
        oldest: 'Oldest',
        mostHelpful: 'Most Helpful'
    },
    COUPONS: {
        bedding20PercentOff: 'BEDDING2020'
    },
    LANGUAGES: {
        ENGLISH: {
            code: 'en',
            name: 'English'
        },
        SPANISH: {
            code: 'es',
            name: 'Español'
        }
    },
    ROOT_ASSET_PATH: '/assets',
    trialDuration: 180,
    CHECKOUT_PASSTHROUGH_PATHS: [
        '/sms/signup',
        '/static/assets',
        '/email/sync'
    ],
    browserStorageItems: {
        HAS_ID_DOT_ME_DISCOUNT: 'hasIdDotMeDiscount',
        ID_DOT_ME_GROUP_NAME: 'idDotMeGroupName'
    }
}