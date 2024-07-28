/* Variáveis para manipular o DOM */
var divQrCode = document.querySelector(".qrcode");
var urlInput = document.querySelector("input");
var btnLimpar = document.querySelector("#btnLimpar");
var btnSalvar = document.querySelector("#btnSalvar");

function gerarQrCode() {
  divQrCode.innerHTML = "";

  if (urlInput.value !== "") {
    // new QRCode(divQrCode, urlInput.value);
    new QRCode(divQrCode, {
      text: urlInput.value,
      width: 250,
      height: 250,
      // colorDark: "#343b61",
      colorLight: "#ffffff",
    });
  } else {
    alert("Campo URL vazio!");
    return;
  }

  btnLimpar.disabled = false;
  btnSalvar.style.display = "block";
}

function limparQrCode() {
  divQrCode.innerHTML = "";
  urlInput.value = "";

  btnLimpar.disabled = true;
  btnSalvar.style.display = "none";
}

function salvarQrCodeEmPng() {
  const element = document.querySelector("img");

  html2canvas(element).then(function (canvas) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  });
}

function salcarQrCode() {
  const img = document.querySelector("img");
  const a = document.createElement("a");

  a.href = img.src;
  a.download = "qrcode.png";
  a.click();
}
