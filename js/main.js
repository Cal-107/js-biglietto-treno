// Biglietto del treno //

// Chiedere l'età del passeggero //
const age = parseInt (prompt('Prego inserisca la sua età'));
console.log(age);

// Chiedere quanti chilometri si vuole percorrere //
const km = parseInt (prompt('Prego inserisca quanti chilometri deve percorrere'));
console.log(km);

//Prezzo di base del biglietto
let priceTicket = 0.21;
console.log(priceTicket)




//Calcolo prezzo biglietto
// - Prezzo in base ai km (0.21 € al km)
// - Sconto sul biglietto del 20% ai minorenni
// - Sconto sul biglietto del 40% per gli over 65
let totTicket = priceTicket * km;
console.log('Prezzo totale del ticket', totTicket,'€')

if (age < 18) {
    totTicket = totTicket - (totTicket * 20 / 100);

} else if (age > 65) {
    totTicket = totTicket - (totTicket * 40 / 100);
}


// Output a schermo
document.getElementById('final-price').innerHTML = totTicket;