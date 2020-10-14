/*  Chiedere numero di kilometri da percorrere
    Chiedere eta' passeggero

    Calcolare prezzo totale del viaggio
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65
*/

var km = parseInt( prompt('Quanti chilometri vuoi percorrere?') );
//// DEBUG:
console.log(km);

var eta = parseInt( prompt('Quanti anni hai?') );
//// DEBUG:
console.log(eta);

//Condizione per validare input
if ( isNaN(km) || isNaN(eta) ) {
  alert('Attenzione! I valori inseriti non sono corretti.');
}

//Prezzo del biglietto per kilometro
var prezzoKm = 0.21;

//Prezzo scontato del 20% per minorenni
var prezzoKmMinori = Math.trunc(0.21 * 0.8 * 100) / 100 ;

//Prezzo scontato del 40% per over 65 enni
var prezzoKmOver = Math.trunc(0.21 * 0.6 * 100) / 100 ;

//Calcolo per biglietto
var biglietto = km * prezzoKm;

//Calcolo per biglietto minorenni
var bigliettoMinori = km * prezzoKmMinori ;

//Calcolo per biglietto over 65
var bigliettoOver = km * prezzoKmOver ;

//Condizione per Calcolare l'eta' per lo sconto
if (eta > 65) {
  document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è : '+ bigliettoOver;
}
else if (eta < 18) {
  document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è : '+ bigliettoMinori;
}
else {
  document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è : '+ biglietto;
}
