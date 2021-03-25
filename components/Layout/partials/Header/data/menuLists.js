// iteratable for all of the link items and their items
// in the footer. title and translationKey correspond to the
// translation config name.

const MenuList = [
    {
        title: 'Mattresses',
        subCategories: [
            {
                title: 'FEATURED',
                items: [
                    {
                        title: 'Saatva Classic',
                        image: 'images/d-nav-saatva-classic@1x.jpg',
                        description: 'Luxury Hybrid Innerspring'
                    },
                    {
                        title: 'Loom & Leaf',
                        image: 'images/navigation/d-nav-loom-and-leaf@1x.jpg',
                        description: 'Ultra Premium Memory Foam'
                    },
                    {
                        title: 'Saatva Latex Hybrid',
                        image: 'images/navigation/d-nav-saatva-latex-hybrid@1x.jpg',
                        description: '100% Natural and Organic'
                    },
                    {
                        title:  'Solaire Adjustable',
                        image: 'images/navigation/d-nav-solaire@1x.jpg',
                        description: 'Customizable comfort'
                    }
                ]
            },
            {
                title: 'INNERSPRING',
                separator: true,
                items: [
                    {
                        title: 'Saatva Classic',
                        image: 'images/d-nav-saatva-classic@1x.jpg',
                        description: 'Luxury Hybrid Innerspring'
                    },
                    {
                        title: 'Saatva Latex Hybrid',
                        image: 'images/navigation/d-nav-saatva-latex-hybrid@1x.jpg',
                        description: '100% Natural and Organic'
                    },
                    {
                        title: 'Saatva Youth',
                        image: 'images/navigation/d-nav-saatva-youth@1x.jpg',
                        description: 'Dual-sided Innerspring for Growing Bodies'
                    },
                    {
                        title:  'Saatva HD',
                        image: 'images/navigation/d-nav-saatva-hd@1x.jpg',
                        description: 'Luxury Hybrid for Bigger Bodies'
                    }
                ]
            },
            {
                title: 'MEMORY FOAM',
                items: [
                    {
                        title: 'Loom & Leaf',
                        image: 'images/navigation/d-nav-loom-and-leaf@1x.jpg',
                        description: 'Ultra Premium Memory Foam'
                    }
                ]
            },
            {
                title: 'SPECIALTY',
                items: [
                    {
                        title:  'Solaire Adjustable',
                        image: 'images/navigation/d-nav-solaire@1x.jpg',
                        description: 'Customizable comfort'
                    },
                    {
                        title: 'Zenhavean Latex',
                        image: 'images/navigation/d-nav-zenhaven@1x.jpg',
                        description: '100% Natural Talalay Latex'
                    }
                ]
            },
           
        ]
    },
    {
        title: 'Bedding'
    },
    {
        title: 'Frame & Bases'
    },
    {
        title: 'Sale'
    }
]

export default MenuList
