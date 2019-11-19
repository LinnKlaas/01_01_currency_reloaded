
/*
 * CURRENCY CONVERTER RELOADED
 * Author: <your name here>
 * ---------------------------
 *
 * This converts currencies...somehow.
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe: Baut einen neuen Währungsumrechner. Nachfolgend findet ihr Code der die 
 *  dafür notwendingen Eingabewerte von der Konsole entgegennimmt.
 * 
 *  Dafür müsst ihr das Script wie folgt aufrufen:
 *  npm start -- <Ausgangssumme> <Ausgangswährung-Code> <Zielwährung-Code>
 *  also z.B.
 *  npm start -- 10.0 USD EUR
 * 
 *  Die erwartete Ausgabe ist ein Text in folgender Form:
 *  "Ergebnis: <Ausgangssumme> <Ausgangswährung> = <Ergebnis> <Zielwährung>"
 *  also z.B.
 *  Ergebnis: 10.00 USD = 11.00 EUR
 *  
 *  Das Script soll mindestens drei verschiedene Währungen in beide Richtungen unterstützen
 */

let args = process.argv.slice(2);

let amount, originalCurrency, targetCurrency;

/*const USD = 1.11;
const NZD = 1.75;*/

if (args.length < 3) {
  console.log('Error: Not enough input arguments given!');
} else {
  amount = args[0];
  originalCurrency = args[1];
  targetCurrency = args[2];
}

/*let Ergebnis

if ((originalCurrency === 'USD') && (targetCurrency === 'EUR')) {
  Ergebnis = amount / USD;
} else if ((originalCurrency === 'NZD') && (targetCurrency === 'EUR')) {
  Ergebnis = amount / NZD;
} else if ((originalCurrency === 'EUR') && (targetCurrency === 'USD')) {
  Ergebnis = amount * USD;
} else if ((originalCurrency === 'NZD') && (targetCurrency === 'USD')) {
  Ergebnis = amount * USD;
} else if ((originalCurrency === 'EUR') && (targetCurrency === 'NZD')) {
  Ergebnis = amount * NZD;
} else if ((originalCurrency === 'USD') && (targetCurrency === 'NZD')) {
  Ergebnis = amount * NZD;
} else {
  Ergebnis = 'Error'
}


console.log(Ergebnis + targetCurrency); */

let currencies = {
  EUR: {value: 1, symbol: ' €'},
  USD: {value: 1.11, symbol: ' $'},
  NZD: {value: 1.75, symbol: ' $ NZ'},
  SEK: {value: 10.65, symbol: ' kr'},
  LKR: {value: 198.57, symbol: ' Rs'},
  VND: {value: 25.688, symbol: ' ₫'},
  CLP: {value: 866.26, symbol: ' chil. $'}
}

const request = require('request');
request('https://api.exchangeratesapi.io/latest', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
  let bodyObj = JSON.parse(body);
  for (let field in bodyObj.rates) {
    console.log(field);
    console.log(bodyObj.rates[field])
  }
});



let output = 1 / currencies[originalCurrency].value * [amount] * currencies[targetCurrency].value
console.log('Das Ergebnis ist: ' + output + currencies[targetCurrency].symbol);

/*let currencies = {EUR: 1, USD: 1.11, NZD: 1.75, SEK: 10.65, LKR:198.57, VND: 25.688, CLP: 866.26,
symbols: {EUR: ' €', USD: ' $', NZD: ' $ NZ', SEK: ' kr', LKR: ' Rs', VND: ' ₫', CLP: ' chil. $'}
}
let output = 1 / currencies[originalCurrency] * [amount] * currencies[targetCurrency]


console.log('Das Ergebnis ist: ' + output + currencies.symbols[targetCurrency]);*/

