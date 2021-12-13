// Esercizio 1(Mail)
// Programma che chiede all'utente la sua email, 
// controlla che sia sulla lista di chi può accedere
// e stampa un messaggio a seconda dell'esito del controllo.

// definisco un array in cui metterò una lista di email.
const emailVerified = ['example@gmail.com','example@gmail.it', 'example@outlook.it', 'example@hotmail.it'];
// Definisco una variabile 'flag = false' in modo che, l'utente acceda solo
// quando immette un email identica a quelle contenute nell'array.
let flag = false;
// Chiedo all'utente la sua email.
const userEmail = prompt('Inserisci la tua email.');
// Controllo se l'email inserita è presente sulla lista delle email che hanno accesso,
for (let i = 0; i < emailVerified.length; i++) {
    
    if (userEmail === emailVerified[i]) {
        flag = true;
    }
};
// se il controllo risulta positivo stamperò un messaggio di benvenuto,
// altrimenti stamperò un messaggio di email errata/non registrata.
if (flag) {
    console.log('Hai effettuato l\'accesso.')
} else {
    console.log('Questa email non risulta registrata.')
};

/********************************************************/

// Esercizio 2(Gioco dei dadi)
// Programma che genera un numero randomico da 1 a 6
// sia per il player umano che per il computer,
// dopodichè stabilisce un vincitore basandosi
// sul confronto dei valori dei numeri generati.

// Genero un numero casuale per il player umano.
let humanNumber = Math.floor(Math.random(1) * 6) + 1; 
// Genero un numero casuale per il computer.
let computerNumber = Math.floor(Math.random(1) * 6) + 1;

console.log(humanNumber);
console.log(computerNumber);
// Controllo se il numero generato dal player umano
// è maggiore, uguale o minore del numero generato dal computer(o viceversa)
// A seconda dei vari casi stamperò un messaggio appropriato.
if (humanNumber > computerNumber) {
    console.log('hai vinto!')
} else if (humanNumber < computerNumber) {
    console.log('ha vinto il computer.')
} else {
    console.log('è un pareggio.')
};



