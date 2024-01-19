function generateQRCode() {
  let website = document.getElementById("text").value;
  if (website) {
    // let qrcodeContainer = document.getElementById("qr_generator");
    // qrcodeContainer.innerHTML = "";
    // new QRCode(qrcodeContainer, website);

    // With some styles
    let qrcodeContainer2 = document.getElementById("qr_generator");
    qrcodeContainer2.innerHTML = "";
    new QRCode(qrcodeContainer2, {
      text: website,
      width: 250,
      height: 250,
      colorDark: "#000000",
      colorLight: "#e0e0e0",
      correctLevel: QRCode.CorrectLevel.H,
    });
    document.getElementById("qr-text1").innerHTML = website;

    // document.getElementById("qr_generator").style.display = "block";
  } else {
    alert("Please enter a valid URL");
  }
}

document.getElementById("button2").addEventListener("click", download);

function download() {
  const img = document.querySelector("img");
  var link = document.createElement("a");
  link.href = img.src;
  link.download = "Download.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
