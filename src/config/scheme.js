export default {
    qrcode: (createElement, context) => {
        return createElement('div', {
            class: 'qr-code-warp',
        }, [
            createElement('img', {
                class: ['qr-code', context.elementId],
                ref: 'img',
                attrs: {
                    alt: 'qrcode',
                    draggable: 'false',
                    src: 'wqeqwewqe'
                }
            })
        ])
    },
    barcode: (createElement, context) => {
        let $varText = createElement('var-text', {
            class: 'barcode-text',
            style: context.getStyle,
            props: {
                text: context.data
            }
        })
        return createElement('div', {
            class: 'barcode-wrap',
        }, [
            createElement('img', {
                ref: 'img',
                class: ['barcode', context.elementId],
                style: context.getStyle,
                attrs: {
                    alt: 'barcode',
                    src: '',
                    draggable: 'false'
                }
            }),
            context.displayValue === '1' && $varText
        ])
    },
    rectangle(createElement, context) {
        return createElement('div', {
            class: 'rectangle-warp',
            style: context.getStyle
        })
    }
}
