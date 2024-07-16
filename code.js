function gerarQrCode() {
  let divQrCode = document.querySelector(".qrcode");
  let urlInput = document.querySelector("input");
  let btnLimpar = document.querySelector("#btnLimpar");

  divQrCode.innerHTML = "";

  if (urlInput.value !== "") {
    // new QRCode(divQrCode, urlInput.value);
    new QRCode(divQrCode, {
      text: urlInput.value,
      width: 250,
      height: 250,
      colorDark: "#343b61",
      colorLight: "#ffffff",
    });
  } else {
    alert("Campo URL vazio!");
  }

  btnLimpar.disabled = false;
}

function limparQrCode() {
  let divQrCode = document.querySelector(".qrcode");
  let urlInput = document.querySelector("input");

  divQrCode.innerHTML = "";
  urlInput.value = "";

  btnLimpar.disabled = true;
}
