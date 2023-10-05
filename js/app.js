// ### Calcolo del prezzo del biglietto del treno

// - chiedo di inserire il nome e il cognome
//     - seleziono l'elemento input tramite ID
//     - recupero il valore presente nell'input e lo salvo in una variabile

const inputDOMElement = document.getElementById('name');
const kmDOMElement = document.getElementById('km');
console.log(kmDOMElement);

let km = parseFloat(inputDOMElement.value);
console.log(km);

// prendo il pulsante dal DOM
const btnDOMElement = document.getElementById('btn-calc');
console.log(btnDOMElement);

// - chiedo di scegliere la fascia di età
const selDOMElement = document.getElementById('discount')
let etaUser;

//leggo clicca scelta
btnDOMElement.addEventListener('click', 
function () {
    console.log("CLICK")
    console.log('selDOMElement.value', selDOMElement.value) 
    
// recupero dall'input il valore dell'attributo value
    let km = parseFloat(kmDOMElement.value)
	console.log('km', km)

    // - calcolare il prezzo totale del viaggio
//     - calcolare prezzo base (0.21 € al km)
// - moltiplicare il prezzo al km per i km da percorrere
let price = (parseFloat(0.21));  
let priceBase = km * price;    
let priceFinal = priceBase;
console.log(priceFinal)

if (selDOMElement == 1) {
console.log(parseFloat(priceBase)); 
}

// - Se l'utente è minorenne         
//  - sottrarre il 20% dal prezzo base
if (etaUser < 18) {
    let offUnder = (priceBase * (20 / 100));
    let priceUnder = (priceBase - offUnder);
    priceFinal = priceUnder;
    console.log(parseFloat(priceUnder)); 
    if (selDOMElement == 0) {
    console.log(parseFloat(priceUnder)); 
    }
}

// Se L'utente è over 65
// - sottraggo il 40% dal prezzo base 
if (etaUser > 65) {
    let offOver = (priceBase * (40 / 100));
    let priceOver = (priceBase - offOver);
    priceFinal = priceOver;
    console.log(parseFloat(priceOver));
    if (selDOMElement == 2) {
        console.log(parseFloat(priceOver)); 
    }
}
})

// - stampare il prezzo finale
// arrotondare a 2 cifre decimali
priceFinal = priceFinal.toFixed(2)
let messageDomElement = document.getElementById('price');
console.dir(messageDomElement);

    // creazione dati biglietto in pagina
    document.getElementById("name").innerHTML = inputDOMElement;
    // document.getElementById("discount").innerHTML = discountType;
    document.getElementById("price").innerHTML = priceFinal + "€";