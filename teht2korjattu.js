var input = require("readline-sync"); //(view -> terminal -> npm i readline-sync)
let henkilot = [
  { nimi: "Aku Ankka", numero: 55 },
  { nimi: "Hessu Hopo", numero: 45 },
];

let uusihenkilo = { nimi: "Iines Ankka", numero: 55 };

henkilot.push(uusihenkilo);

function lisays() {
  var snimi = input.question("Anna nimi: ");
  var inumero = input.questionInt("Anna puhelinnumero: ");
  let henkilo = { nimi: snimi, numero: inumero };
  henkilot.push(henkilo);
  console.log("Henkilö lisätty luetteloon.");
}

function haku() {
  let haettunimi = input.question("Kenen puhelinnumeron haluat hakea? ");
  for (let i = 0; i < henkilot.length; i++) {
    if (henkilot[i].nimi == haettunimi) {
      return henkilot[i].numero;
    }
  }
}

console.log(
  "Tervetuloa puhelinluetteloon. Valitse haluamasi toiminto kirjoittamalla\ntoiminnon kuvausta vastaava numero ja painamalla enter."
);
console.log(
  "1 Lisää henkilö luetteloon.\n2 Hae puhelinnumero kirjoittamalla nimi."
);
var toiminto = input.question("Mitä haluat tehdä? ");
if (toiminto == 1) {
  lisays();
} else if (toiminto == 2) {
  console.log(haku());
} else {
  console.log("Syötteesi on virheellinen, valitse 1 tai 2.");
}
