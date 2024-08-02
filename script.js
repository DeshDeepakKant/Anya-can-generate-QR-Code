// Selects the input field where the user will type the content for the QR code
let qrContentInput = document.getElementById("qr-content");

// Selects the form element that will be used to submit the QR code generation request
let qrGenerationForm = document.getElementById("qr-generation-form");

// Variable to hold the QRCode object; it will be initialized later
let qrCode;

/**
 * Function to generate a QR code with the given content.
 * @param {string} qrContent - The content that will be encoded in the QR code.
 * @returns {QRCode} - Returns a new QRCode object.
 */
function generateQrCode(qrContent) {
  return new QRCode("qr-code", { // The 'qr-code' is the ID of the HTML element where the QR code will be rendered
    text: qrContent, // The text content that will be encoded in the QR code
    width: 256, // The width of the generated QR code in pixels
    height: 256, // The height of the generated QR code in pixels
    colorDark: "#000000", // The color of the QR code's dark modules (default is black)
    colorLight: "#ffffff", // The color of the QR code's light background (default is white)
    correctLevel: QRCode.CorrectLevel.H, // Error correction level, 'H' stands for the highest error correction level (up to 30% error correction)
  });
}

// Adds an event listener to the form that triggers when the form is submitted
qrGenerationForm.addEventListener("submit", function (event) {
  // Prevents the default form submission action, which would refresh the page
  event.preventDefault();

  // Gets the value entered by the user in the input field
  let qrContent = qrContentInput.value;

  // Checks if a QRCode object has already been created
  if (qrCode == null) {
    // If not, it generates a new QR code with the provided content and stores the QRCode object in 'qrCode'
    qrCode = generateQrCode(qrContent);
  } else {
    // If a QRCode object already exists, it updates the QR code with the new content
    qrCode.makeCode(qrContent);
  }
});
