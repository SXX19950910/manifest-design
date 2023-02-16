export default class Design {
    constructor(options) {
        this.template = options.template
        this.$createElement = options.createElement
        return this.generate()
    }

    renderBarcode(component) {
        const fields = this.getFields(component)
        const createElement = this.$createElement
        const $codeValue = createElement('p', {
            class: 'barcode-text',
            domProps: {innerHTML: this.renderText(component)},
            style: this.getSelfStyle(component),
            attrs: {
                'data-fields': fields
            }
        })
        return createElement('div', {
            class: 'barcode-wrap',
            style: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
            }
        }, [
            createElement('img', {
                ref: 'img',
                class: ['barcode', component.id, component.type],
                style: Object.assign(this.getSelfStyle(component), {width: '100%'}),
                attrs: {
                    alt: 'barcode',
                    draggable: 'false'
                }
            }),
            component.props.displayValue === '1' && $codeValue
        ])
    }

    paintBoard() {
        const { options } = this.template
        return {
            class: 'template-wrap',
            style: {
                width: options.width + 'px',
                height: options.height + 'px'
            },
            ref: 'app'
        }
    }

    getFields(component) {
        return component.variable ? component.variable.textData.filter((item) => item.key).map((item) => item.key).join('') : null
    }

    renderQrcode(component) {
        const createElement = this.$createElement
        return createElement('div', {
            class: 'qr-code-wrap'
        }, [
            createElement('img', {
                class: ['qr-code', component.id],
                ref: 'img',
                style: {
                    maxWidth: '100%',
                    verticalAlign: 'middle',
                    userSelect: 'none'
                },
                attrs: {
                    alt: 'qrcode',
                    draggable: 'false',
                    'data-fields': this.getFields(component)
                }
            })
        ])
    }

    getSelfStyle(component) {
        const style = {}
        const {props, type} = component
        const {width, fontSize, align, borderWidth = '1', lineHeight, isBold, hasBorder, height, lineType = 'solid'} = props
        const isXLine = type === 'XLineUi'
        const isYLine = type === 'YLineUi'
        const isBarcode = type === 'BarcodeUi'
        const isText = type.includes('Text')
        const isRectangle = type === 'RectangleUi'
        if (isXLine) {
            style.width = '100%'
            style.borderTop = `${height}px`
            if (lineType === 'solid') {
                style.height = `${height}px`
                style.backgroundColor = '#000'
            } else if (lineType === 'dashed') {
                style.borderTop = `${height}px ${lineType} #000`
            }
        } else if (isYLine) {
            style.width = `${width}px`
            style.minHeight = '100%'
            if (lineType === 'solid') {
                style.backgroundColor = '#000'
            } else if (lineType === 'dashed') {
                style.borderLeft = `${width}px ${lineType} #000`
            }
        } else if (isBarcode) {
            style.fontSize = fontSize + 'px'
        } else if (isText) {
            style.textAlign = align
            style.fontSize = fontSize
            style.lineHeight = lineHeight
            style.border = hasBorder ? '1px solid #000' : '1px solid transparent'
            style.fontWeight = isBold ? 'bold' : '400'
        } else if (isRectangle) {
            style.border = `${borderWidth}px ${lineType} #000`
        }
        return style
    }

    renderHorizontalLine (component) {
        return this.$createElement(component.tag, {
            class: 'x-line-wrap',
            style: this.getSelfStyle(component)
        })
    }

    renderVerticalLine(component) {
        return this.$createElement(component.tag, {
            class: 'y-line-wrap',
            style: this.getSelfStyle(component)
        })
    }

    static isQrcode(type) {
        return type === 'QrCodeUi'
    }

    static isBarcode(type) {
        return type === 'BarcodeUi'
    }

    static isLine(type) {
        return type === 'XLineUi' || type === 'YLineUi' || type === 'RectangleUi';
    }

    static isText(type) {
        return type.includes('Text')
    }

    static isEditable(type) {
        return type === 'TableUi'
    }

    static getTemplateVars(template) {
        return template.data.reduce((total, item) => {
            if (item?.variable?.enable) {
                item.variable.textData.forEach(text => {
                    if (text.key) {
                        total.push(text.key)
                    }
                })
            }
            return total
        }, [])
    }

    getContainerStyle(component) {
        const {props = {}, position, rect, type} = component
        const {fontSize, fontFamily, lineHeight, align, isBold} = props
        const fontWeight = isBold ? 'bold' : 'normal'
        return {
            fontSize,
            fontFamily,
            lineHeight,
            textAlign: align,
            top: position.clientY + 'px',
            left: position.clientX + 'px',
            fontWeight,
            width: rect.width + 'px',
            height: rect.height + 'px',
            padding: Design.isLine(type) ? '0' : '0 10px 0 0'
        }
    }

    renderRectangle(component) {
        return this.$createElement(component.tag, {
            class: 'rectangle-warp',
            style: this.getSelfStyle(component)
        })
    }

    generateWidget(component) {
        const renderMap = {
            barCode: (instance) => this.renderBarcode(instance),
            qrCode: (instance) => this.renderQrcode(instance),
            xLine: (instance) => this.renderHorizontalLine(instance),
            yLine: (instance) => this.renderVerticalLine(instance),
            rectangle: (instance) => this.renderRectangle(instance),
        }[component.name]
        const defaultRender = () => {
            const attrs = {
                'data-fields': this.getFields(component)
            }
            return this.$createElement(component.tag, {
                class: 'detail',
                style: this.getSelfStyle(component),
                attrs
            }, [
                this.$createElement('span', {
                    class: `${component.id} ${component.type}`,
                    domProps: {innerHTML: this.renderText(component)},
                })
            ])
        }

        const createElement = this.$createElement

        return createElement('div',
            {
                attrs: {
                    id: component.id,
                },
                class: 'component',
                style: this.getContainerStyle(component),
            },
            [
                renderMap ? renderMap(component) : defaultRender()
            ]
        )
    }

    renderText(component) {
        let result = ''
        const { variable } = component
        if (variable && variable.enable) {
            component.variable.textData.map((item) => {
                result = result + `<span class="${item.key}">${item.value || item.value}</span>`
            })
        } else {
            result = component.props.text || component.props.data
        }
        return result
    }

    paintWidget() {
        const { data } = this.template
        return data.map((component) => {
            return this.generateWidget(component)
        })
    }

    generate() {
        const { $createElement } = this
        return $createElement(
            'div',
            this.paintBoard(),
            this.paintWidget()
        )
    }
}
