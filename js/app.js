// ### Calcolo del prezzo del biglietto del treno

// - chiedo di inserire il nome e il cognome
//     - seleziono l'elemento input tramite ID
//     - recupero il valore presente nell'input e lo salvo in una variabile
const btnDOMElement = document.getElementById('btn-calc');
console.log(btnDOMElement);

const inputDOMElement = document.getElementById('name');
console.log(inputDOMElement);


// - chiedo di inserire il numero di km da percorrere
//     - seleziono l'elemento input tramite ID
//     - recupero il valore presente nell'input e lo salvo in una variabile
const kmDOMElement = document.getElementById('km');
console.log(kmDOMElement);

// - inserire l'età del passeggero
//     - dichiara una variabile
//     - assegnare alla variabile il valore restituito da un prompt
let etaUser;
// etaUser = prompt('inserire età');
// console.log(parseInt(etaUser));


// - calcolare il prezzo totale del viaggio
//     - calcolare prezzo base (0.21 € al km)
// - moltiplicare il prezzo al km per i km da percorrere
let price 
price = (parseFloat(0.21));  
let priceBase = numKm * price;    
// console.(parseFloat(priceBase));
let priceFinal
priceFinal = priceBase;

// - Se l'utente è minorenne         
//         - sottrarre il 20% dal prezzo base
// SE l'utente è minorenne 
if (etaUser < 18) {
    let offUnder = (priceBase * (20 / 100));
    let priceUnder = (priceBase - offUnder);
    priceFinal = priceUnder;
    console.log(parseFloat(priceUnder)); 
}

// Se L'utente è over 65
// - sottraggo il 40% dal prezzo base 
if (etaUser > 65) {
    let offOver = (priceBase * (40 / 100));
    let priceOver = (priceBase - offOver);
    priceFinal = priceOver;
    console.log(parseFloat(priceOver));
}

// - stampare il prezzo finale
// arrotondare a 2 cifre decimali
priceFinal = priceFinal.toFixed(2)
let messageDomElement = document.getElementById('price');
console.dir(messageDomElement);

//- Modificare l'innerHTML dello span con il prezzo finale del biglietto 
messageDomElement.innerHTML = priceFinal;