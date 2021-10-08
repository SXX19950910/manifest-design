export function getStringVars(text) {
    const reg = /\${(.+?)\}/g;
    const data = String(text)
    const all = data.match(reg) || []
    const getVarIndexes = (firstIndex, value) => {
        const arr = []
        for (let i = 0; i < value.length; i++) {
            arr.push(firstIndex + i)
        }
        return arr
    }
    const vars = all.map((item) => {
        const string = String(item)
        return {
            value: string,
            key: string.replace('${', '').replace('}', ''),
            indexes: getVarIndexes(data.indexOf(string), string)
        }
    })
    return text.split('').reduce((total, item, index) => {
        const textItem = {
            value: item,
            key: '',
            indexes: index
        }
        const varItem = vars.find(item => item.indexes.includes(textItem.indexes))
        if (!varItem) {
            total.push(textItem)
        } else if (total.findIndex(item => item.value === varItem.value) < 0) {
            total.push(varItem)
        }
        return total
    }, [])
}

export function checkLine(type) {
    return type === 'XLineUi' || type === 'YLineUi' || type === 'RectangleUi';
}
