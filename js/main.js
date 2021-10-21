// Biglietto del treno //

// Chiedere l'età del passeggero //
const age = parseInt (prompt('Prego inserisca la sua età'));

// Chiedere quanti chilometri si vuole percorrere //
const km = parseInt (prompt('Prego inserisca quanti chilometri deve percorrere'));

//Prezzo di base del biglietto
let priceTicket = 0.21;

//Calcolo prezzo biglietto
let totTicket = priceTicket * km;

if (age < 18) {
    totTicket = totTicket - (totTicket * 20 / 100);
    
} else if (age > 65) {
    totTicket = totTicket - (totTicket * 40 / 100);
}

let totFinTicket = totTicket.toFixed(2);

// Output a schermo
document.getElementById('final-price').innerHTML = `Il prezzo del suo biglietto è: € ${totFinTicket}`