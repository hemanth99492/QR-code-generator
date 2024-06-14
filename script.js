function generateQRCode() {
    var qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ''; // Clear previous QR code
    var text = document.getElementById('text').value;
    if (text) {
        new QRCode(qrContainer, text);
    } else {
        alert('Please enter some text.');
    }
}
