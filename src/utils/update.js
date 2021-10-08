import QrCode from 'qrcode';

export function updateQrcode(id, data, options) {
    const config = {
        errorCorrectionLevel: options.errorCorrectionLevel,
        margin: options.margin,
        scale: options.scale,
        type: 'image/jpeg',
        color: {}
    }
    QrCode.toDataURL(data, config, (err, res) => {
        if (err) throw err;
        document.querySelector('.' + id).src = res
    });
}

