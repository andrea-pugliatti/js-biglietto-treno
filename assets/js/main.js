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

// Controlla gli input
if (distance < 0 || age < 0) {
	console.error("Input inaspettati");
}

// Calcola il biglietto
// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
let cost = distance * 0.21;
// Va applicato uno sconto del 20% per i minorenni
if (age <= 18) {
	cost -= cost * 0.2;
}
// Va applicato uno sconto del 40% per gli over 65
if (age >= 65) {
	cost -= cost * 0.4;
}

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali)
console.log(cost.toFixed(2));

// Test
// 100km, 10 anni => prezzo corretto: €16.80
// 100km, 70 anni => prezzo corretto: €12.60
