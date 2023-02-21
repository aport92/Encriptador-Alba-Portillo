const textoIngresado = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");

const btnEncriptar = document.querySelector("#encri");
const btnDesencriptar = document.querySelector("#desencri");
const btnCopiar = document.querySelector("#copiar");

const abecedarioEncriptado = {
    a: "enter",
    b: "imes",
    c: "ober",
    d: "ai",
    e: "ufat",
    f: "puli",
    g: "kilo",
    h: "runa",
    i: "shin",
    j: "baku",
    k: "vixi",
    l: "golo",
    m: "dorn",
    n: "faxa",
    o: "zufo",
    p: "pore",
    q: "chol",
    r: "luna",
    s: "noma",
    t: "xato",
    u: "qiba",
    v: "zera",
    w: "fiji",
    x: "hima",
    y: "jura",
    z: "toca",
};

function encriptar() {
  const texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    if (abecedarioEncriptado.hasOwnProperty(letra)) {
      textoEncriptado += abecedarioEncriptado[letra] + " ";
    } else {
      textoEncriptado += letra;
    }
  }
  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";
  textoResultado.value = textoEncriptado;
  document.getElementById("texto").value = "";
}

function desencriptar() {
  const textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = "";
  const palabrasEncriptadas = textoEncriptado.split(" ");
  for (let i = 0; i < palabrasEncriptadas.length; i++) {
    const palabraEncriptada = palabrasEncriptadas[i];
    if (abecedarioEncriptado.hasOwnProperty(palabraEncriptada)) {
      texto += abecedarioEncriptado[palabraEncriptada][0];
    } else {
      texto += palabraEncriptada;
    }
  }

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = "";
}

function copiar() {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
