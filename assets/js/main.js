/*
    TOOLS:
    prompt,
    if else,
    arithmetic operators,
    toFixed()
*/

// Chiedi all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
const distance = Number(
	prompt("Quanti chilometri vuole percorrere il passeggero?"),
);
const age = Number(prompt("Qual è l'età del passeggero?"));
// Avrei potuto usare anche parseInt()
console.log(distance, age);

// Calcola il biglietto

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
// Va applicato uno sconto del 20% per i minorenni
// Va applicato uno sconto del 40% per gli over 65

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
