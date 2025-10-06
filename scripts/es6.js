// Nelle lezioni precedenti noi abbiamo già imparato le maniere migliori
// per fare le nostre operazioni quotidiane... oggi facciamo un recap
// e introduciamo delle maniere più pratiche, delle scorciatoie per facilitarci
// la vita!

// abbiamo imparato che esistono due modi moderni per dichiarare le variabili in JS
// - let, che crea una variabile riassegnabile
let dog = 'Fido'
dog = 'Pluto'
// - const, che crea una costante, una allocazione di memoria NON sovrascrivibile
const URL = 'https://www.epicode.com'
// URL = 'https://www.google.com' <-- darebbe ERRORE

// ...prima di ES6 c'era UN UNICO modo di creare una variabile, tramite la keyword
// "var". La creazione di variabili tramite questa metodologia aveva una particolarità
// che rendeva la creazione di variabili in JS un po' "strana" e scomoda: le variabili
// create con "var" avevano visibilità di FUNZIONE e non di BLOCCO (come succede in
// praticamente ogni altro linguaggio serio)

// --- NON FATE COSÌ
const test = function () {
  if (true) {
    var myName = 'Stefano'
  }

  console.log(myName) // <-- NON È UNA BUONA PRASSI IMPARARE A CREARE VARIABILI
  // CON VISIBLILITÀ DI FUNZIONE
  // dobbiamo imparare a creare variabili con visiblità di BLOCCO e imparare il loro
  // funzionamento come in tutti gli altri linguaggi moderni
}
// --- NON FATE COSÌ

// sulla falsariga delle variabili create con var, abbiamo un'altra metodologia
// da evitare -> la creazione di funzioni esclusivamente con la parola "function"

// --- NON FATE COSÌ
function funzioneSbagliata() {
  // questa funzione ha il problema di essere accessibile anche PRIMA della riga
  // 37
  // questo perchè con le funzioni create in questa maniera l'interprete JS
  // applica un meccanismo di "HOISTING" (sollevamento)
}
// --- NON FATE COSÌ

// il modo CORRETTO di creare funzioni in JS è utilizzando una cosiddetta funzione
// "anonima" e successivamente assegnandola ad una variabile (meglio ancora costante)

const funzioneGiusta = function () {
  // una funzione dichiarata così NON È ACCESSIBILE prima della riga 48 :)
}

// ma... PLOT TWIST! c'è anche un TERZO modo di creare una funzione in JS
// questo modo ricade nelle metodologie "corrette", ed è stato introdotto anche
// lui in ES6
// - ARROW FUNCTIONS

const funzioneFreccia = () => {
  console.log('EVVIVA LE FUNZIONI FRECCIA!')
}

funzioneFreccia() // l'invocazione non subisce modifiche
// ma le funzioni freccia si comportano ESATTAMENTE come le funzioni normali
// al 100%?
// qualche minima differenza c'è:
// - in alcune situazioni NON SI POSSONO USARE (tipo i costruttori delle classi)
// - ci sono alcune keywords che hanno comportamento diverso se inserite in
// una funzione normale o in una funzione freccia (ad es. "this")
// "this" è un modo per richiamare il contesto corrente dell'esecuzione del codice

const person = {
  name: 'Stefano',
  bark1: function () {
    // questo è un METODO dell'oggetto
    console.log(this)
    // ottengo l'oggetto "person", che rappresenta il contesto di esecuzione
    // del metodo bark1
  },
  bark2: () => {
    // questo è un METODO dell'oggetto
    console.log(this)
  },
}

person.bark1()
person.bark2()
// come potete vedere i due console.log di "this" danno risultati differenti:
// nella funzione vera e propria (dichiarata con "function") il riferimento
// è l'oggetto in cui quel metodo è definito, mentre nella funzione freccia
// è l'intera finestra del browser (non possiede piena consapevolezza di sé).

// le funzioni freccia hanno una scorciatoia per RITORNARE dei valori
const stefify = function (str) {
  return 'stefano' + str
}

// se la vostra funzione fa UNA SOLA COSA (ha una riga) e in questa riga ritorna un
// valore, voi la potete abbreviare così:

const stefifyArrow = (str) => 'stefano' + str
// stefifyArrow fa LA STESSA COSA di stefify ma in una sola riga!
// ricordate che la funzione deve fare una sola cosa (avere una sola riga)
// e ritornare un valore: a quel punto potete abbreviarla in una funzione freccia
// in cui omettete SIA la parola "return" SIA le graffe
stefifyArrow('casasola') // ritorna 'stefanocasasola'

// un'altra novità di ES6: lo SPREAD OPERATOR
// lo spread operator è una tecnica per CLONARE efficacamente strutture dati
// complesse come array e oggetti

let a = 10
let b = a // crea una variabile b con un valore SEPARATO dal valore di a

a = 1
// b è rimasto 10

let objA = { counter: 10 }
let objB = objA // PROBLEMA! objB NON È UNA DIVERSA ALLOCAZIONE DI MEMORIA
objA.counter = 1
// objB.counter è diventato 1 pure lui! il valore era lo stesso condiviso

let arrA = ['cane', 'gatto']
let arrB = arrA // non è una vera copia! il valore è comune
arrA.pop()
// anche in arrB non c'è più il gatto, la lunghezza di entrambi è diventata 1

// per creare delle VERE copie di entità complesse (array e oggetti) potete
// utilizzare lo SPREAD OPERATOR

let objectA = { name: 'Stefano' }
let objectB = { ...objectA } // questo è un NUOVO oggetto con dentro trasportate
// una copia di TUTTE le proprietà di objectA
objectB.name = 'Piero' // non avete cambiato la proprietà name di objectA

// utilizziamo ora lo spread operator per creare un oggetto con tutte le proprietà
// di objectA e objectB
let objectC = { ...objectA, ...objectB } // { name: 'Stefano', name: 'Piero' }
// però non possiamo in JS avere un oggetto in cui due proprietà si chiamano uguali!
// risultato -> { name: 'Piero' }

const objC = {
  name: 'Stefano',
  name: 'Piero',
} // objC una volta creato ha UNA proprietà "name" con valore "Piero"

let objectD = { ...objectA, objectB }
// { name: 'Stefano', objectB: {name: 'Piero'} }
// JSON.parse(JSON.stringify(ARRAYDIOGGETTI))

const arrayA = ['cane', 'gatto']
const arrayB = [...arrayA] // una vera e propria copia!
arrayA.pop()
// arrayB ha ANCORA LUNGHEZZA 2

//
// OBJECT DESTRUCTURING (destrutturazione di oggetti)
const person1 = {
  firstName: 'Al',
  lastName: 'Bano',
  age: 100,
}

// const firstName = person1.firstName
// la potete fare anche così:

const { firstName, lastName, age } = person1
// ho creato una variabile "firstName" che ha valore person1.firstName
// ho creato una variabile "lastName" che ha valore person1.lastName
// ho creato una variabile "age" che ha valore person1.age

// pura scorciatoia, se vi fa venire il mal di testa fate a meno! :)

// TEMPLATE LITERALS (concatenazione easy di stringhe)
// per parlarne introduciamo il TERZO DELIMITATORE DI STRINGHE in JS!

const str = `
ciao mi chiamo Stefano
e insegno JS
`
// 1) con i backtick si possono fare stringhe su più righe
// 2) con i backtick possiamo INTERPOLARE variabili dentro alle stringhe

const myFirstName = 'Stefano'
const myLastName = 'Morandi'
const myAge = 60

const result1 =
  'Io mi chiamo ' + myFirstName + ' ' + myLastName + ' e ho ' + myAge + 'anni.'

const result2 = `Io mi chiamo ${myFirstName} ${myLastName} e ho ${myAge} anni.`

// result1 === result2
