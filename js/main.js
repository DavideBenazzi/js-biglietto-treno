/*  Chiedere numero di kilometri da percorrere
    Chiedere eta' passeggero

    Calcolare prezzo totale del viaggio
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65
*/

var km = parseInt( prompt('Quanti chilometri vuoi percorrere?') );
//Condizione per validare input
if ( isNaN(km) ) {
  alert('Attenzione! Il valore inserito non è un numero.');
}

var eta = parseInt( prompt('Quanti anni hai?') );
//Condizione per validare input
if ( isNaN(eta) ) {
  alert('Attenzione! Il valore inserito non è un numero.');
}

//Prezzo del biglietto per kilometro
var prezzoKm = 0.21;

//Prezzo scontato del 20% per minorenni
var prezzoKmMinori = prezzoKm * 0.8;

//Prezzo scontato del 40% per over 65 enni
var prezzoKmOver = prezzoKm * 0.6;

//Calcolo per biglietto
var biglietto = (km * prezzoKm).toFixed(2);

//Calcolo per biglietto minorenni
var bigliettoMinori = (km * prezzoKmMinori).toFixed(2);

//Calcolo per biglietto over 65
var bigliettoOver = (km * prezzoKmOver).toFixed(2);

//Condizione per Calcolare l'eta' per lo sconto
if ( isNaN(km) || isNaN(eta) ) {
  document.getElementById('prezzo').innerHTML = 'Per cortesia ricaricare la pagina ed immettere valori coerenti, grazie per la disponibilita\'.';
}
else if (eta > 65) {
  document.getElementById('prezzo').innerHTML = 'Il biglietto è scontato del 40% per i passeggeri over 65 anni, il prezzo è : '+ bigliettoOver + ' €';
}
else if (eta < 18) {
  document.getElementById('prezzo').innerHTML = 'Il biglietto è scontato del 20% per i passeggeri minorenni, il prezzo è : '+ bigliettoMinori + ' €';
}
else {
  document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è : '+ biglietto + ' €' + ' Buon Viaggio !';
}
