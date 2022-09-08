document.querySelectorAll('ul.header-menu__dropdown li a, ul.footer-menu__dropdown li a').forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()
        let target = event.target.href.match(/#[a-z0-9-]+/ig)[0]
        document.querySelector(target).scrollIntoView({block: "center", behavior: "smooth"});
    })
})

let targets = [
    {
        target: '.gun div:nth-child(1) .title-content',
        elements: [
            {
                element: '.gun div:nth-child(1) .title-content .title-content__title',
                class: 'scale-in-ver-bottom'
            },
            {
                element: '.gun div:nth-child(1) .title-content .title-content__content',
                class: 'scale-in-ver-bottom'
            }
        ],
        ratio: 0.9,
    },
    {
        target: '.gun div:nth-child(2)',
        elements: [
            {
                element: '.gun div:nth-child(2) .gun__content',
                class: 'scale-in-ver-bottom'
            },
            {
                element: '.gun div:nth-child(2) .gun__pic img',
                class: 'translate-in-hor-left'
            }
        ],
        ratio: 0.9,
    },
    {
        target: '.gun div:nth-child(3) .title-content',
        elements: [
            {
                element: '.gun div:nth-child(3) .title-content .title-content__title',
                class: 'scale-in-ver-bottom'
            },
            {
                element: '.gun div:nth-child(3) .title-content .title-content__content',
                class: 'scale-in-ver-bottom'
            }
        ],
        ratio: 0.9,
    },
    {
        target: '.gun-benefits',
        elements: [
            {
                element: '.gun-benefits .gun-benefits__pic',
                class: 'scale-in-ver-center'
            },
            {
                element: '.gun-benefits .gun-benefits__items',
                class: 'scale-in-ver-bottom'
            }
        ],
        ratio: 0.9,
    },
    {
        target: '.inside__text',
        elements: [
            {
                element: '.inside__text .title-content',
                class: 'scale-in-ver-bottom'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.inside__pic',
        elements: [
            {
                element: '.inside__pic img',
                class: 'scale-in-ver-center'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.cost-benefits__text',
        elements: [
            {
                element: '.title-content.title-content--block',
                class: 'scale-in-ver-bottom'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.cost-benefits__item:nth-child(1)',
        elements: [
            {
                element: '.cost-benefits__item:nth-child(1) img',
                class: 'scale-in-ver-bottom'
            },
            {
                element: '.cost-benefits__item:nth-child(1) .cost-benefits__item-content',
                class: 'scale-in-ver-bottom'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.cost-benefits__item:nth-child(2)',
        elements: [
            {
                element: '.cost-benefits__item:nth-child(2) img',
                class: 'scale-in-ver-bottom'
            },
            {
                element: '.cost-benefits__item:nth-child(2) .cost-benefits__item-content',
                class: 'scale-in-ver-bottom'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.cost-benefits__item:nth-child(3)',
        elements: [
            {
                element: '.cost-benefits__item:nth-child(3) img',
                class: 'scale-in-ver-bottom'
            },
            {
                element: '.cost-benefits__item:nth-child(3) .cost-benefits__item-content',
                class: 'scale-in-ver-bottom'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.cost-benefits__item:nth-child(4)',
        elements: [
            {
                element: '.cost-benefits__item:nth-child(4) img',
                class: 'scale-in-ver-bottom'
            },
            {
                element: '.cost-benefits__item:nth-child(4) .cost-benefits__item-content',
                class: 'scale-in-ver-bottom'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.cost .cost__pic',
        elements: [
            {
                element: '.cost .cost__pic img',
                class: 'scale-in-ver-center'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.cost .cost__cost',
        elements: [
            {
                element: '.cost .cost__cost .cost__cost-price',
                class: 'scale-in-ver-center'
            },
            {
                element: '.cost .cost__cost .cost__cost-text',
                class: 'scale-in-ver-center'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.title-content.title-content--margin.title-content--map',
        elements: [
            {
                element: '.title-content.title-content--margin.title-content--map .title-content__title',
                class: 'scale-in-ver-center'
            },
            {
                element: '.title-content.title-content--margin.title-content--map .title-content__content',
                class: 'scale-in-ver-center'
            },
        ],
        ratio: 0.9,
    },
    {
        target: '.work',
        elements: [
            {
                element: '.work__text .title-content .title-content__title',
                class: 'scale-in-hor-left'
            },
            {
                element: '.work__text .title-content .title-content__content',
                class: 'scale-in-hor-right'
            },
        ],
        ratio: 0.5,
    },
]

targets.forEach(el => {
    let target = document.querySelector(el.target)
    new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting && entry.intersectionRatio > el.ratio) {
                el.elements.forEach(item => {
                    document.querySelector(item.element).classList.add(item.class);
                })
            }
        });
    }, { threshold: [ 0.5, 0.9 ] }).observe(target)
})
