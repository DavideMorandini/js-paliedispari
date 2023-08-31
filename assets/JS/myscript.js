/*  Esercizio n.1
    
    Consegna: Pari e Dispari

    -   L’utente sceglie pari o dispari e inserisce un numero da 1 a 5

    -   Generiamo un numero random (sempre  da 1 a 5) per il computer (usando una funzione). 
    
    -   Sommiamo i due numeri 
    
    -   Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
    
    -   Dichiariamo chi ha vinto.
*/

// Creo una variabile indefinita perché NON so cosa l'utente sceglierà di scrivere, quindi tale variabile indefinita conterrà successivamente la parola scelta dall'utente
let userWordChoice;

//Per evitare che l'utente scriva una qualsiasi parola DIVERSA da "pari o dispari" creo un ciclo di tipo WHILE (perché NON sappiamo quante volte l'utente si ostinerà a NON scrivere le cose che gli vengono richieste) per chiedere a ripetizione all'utente di scrivere obbligatoriamente le parole "pari o dispari" e tale ciclo si ripeterà AD OLTRANZA/LOOP fino a quando l'utente non si decide a scegliere obbligatoriamente o pari o dispari

do {
    // Chiedere all'utente di scegliere o pari o dispari
    userChoise = prompt ('Scegli: pari o dispari?');
    
    // Continuo a chiederglielo finché deve obbligatoriamente scegliere o pari o dispari
} while (userChoise.toLowerCase() !== 'pari' && userChoise.toLowerCase() !== 'dispari');

if (userWordChoice == "pari") {
    userWordChoice = "pari";

} else {
    userWordChoice = "dispari"; 
}

console.log ("Hai scelto:" + " " + userWordChoice);

// Creo una variabile indefinita perché NON so cosa l'utente sceglierà di scrivere, quindi tale variabile indefinita conterrà successivamente il numero scelto dall'utente
let userNumber;

//Per evitare che l'utente scriva una qualsiasi parola o un numero NON compreso tra 1 e 5 creo un ciclo di tipo WHILE (perché NON sappiamo quante volte l'utente si ostinerà a NON scrivere le cose che gli vengono richieste) per chiedere a ripetizione all'utente di scrivere obbligatoriamente un NUMERO e tale numero deve obbligatoriamente essere compreso tra 1 e 5, tale ciclo si ripeterà AD OLTRANZA/LOOP fino a quando l'utente non si decide a scegliere obbligatoriamente un NUMERO anziché una parola e che tale numero sia pure contenuto all'interno del range indicato
do {
    // Chiedere all'utente di scegliere un numero compreso tra 1 e 5
    userNumber = Number(prompt("Inserisci un numero da 1 a 5"));

    // Continuo a chiederglielo finché deve obbligatoriamente scegliere un numero anziché una parola e tale numero deve anche essere compreso tra 1 e 5
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

console.log("Hai scelto:" + " " + userNumber);

// Creo una variabile per salvare il numero scelto dal bot che successivamente verrà richiamata dalla funzione
let botNumber = randomGenerate();

console.log("Il computer ha scelto:" + " " + botNumber)

// Creo una variabile per la somma che verrà utilizzata per il calcolo della scelta dell'utente + il numero randomico scelto dal bot
let sum =  userNumber + botNumber;
console.log("La somma è: " + sum)

// Creo una funzione NON anonima e salvo all'interno di una variabile il valore del risultato pari o dispari
let finalRound = theWinnerIs(userNumber, botNumber, sum)
console.log("Il totale è: " + finalRound)

// Creo una variabile indefinita perché NON so cosa quale sarà il risultato finale, quindi tale variabile indefinita conterrà successivamente il risultato finale
let finalWinner;

// Se l'utente sceglie PARI e il risultato della somma è PARI, l'utente ha VINTO. lo stesso vale per dispari
if (userWordChoice == "pari" && finalRound == "pari" || userWordChoice ==  "dispari" && finalRound == "dispari") {
    finalWinner = "Hai vinto la scommessa!";

    // Altrimenti il bot ha VINTO
} else {
    finalWinner = "Ha vinto il computer";
}
console.log(finalWinner);

// Creo una funzione NON anonima per generare un numero randomico per il computer 
function randomGenerate (number) {
    // Creo una variabile per salvare il numero randomico
    let randomNumber = Math.floor(Math.random() * 5 + 1);

    //  Uso return per utilizzare nell'ambito dello scope globale
    return randomNumber;
}

// Creo una funzione per dichiarare se il risultato finale è pari o dispari basandomi su numero1 e numero2

function theWinnerIs(number1, number2, total) {
    if ((number1 + number2) % 2 == 0 ) {
        total = "pari";
    }else {
        total = "dispari";
    }
    return total;
    }

/*  Esercizio n.2

    Consegna: Palindroma

    -   Chiedere all’utente di inserire una parola 
    
    -   Creare una funzione per capire se la parola inserita è palindroma
*/

// let userWord = prompt("Scrivi una qualsiasi parola a tua scelta");

// let reverseWord = invertiParola(userWord);

// if (userWord == reverseWord) {
//     console.log("La parola è palindroma");

// } else {
//     console.log("La parola non è palindroma");
// }

// function invertiParola(my_string) {
//     let stringReverse = my_string.split('').reverse().join(''); 
//     return stringReverse;
// }









