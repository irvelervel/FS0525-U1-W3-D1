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
const returnCiao = () => 'Ciao!'

const result1 =
  'Io mi chiamo ' + myFirstName + ' ' + myLastName + ' e ho ' + myAge + 'anni.'

const result2 = `${returnCiao()} Io mi chiamo ${myFirstName} ${myLastName} e ho ${myAge} anni.`

// result1 === result2
console.log(result2)

// METODI DELLE STRINGHE
const str1 = 'Hello World!'
str1.length // 12
str1.slice(0, 5) // primi 5 caratteri, 'Hello'
str1.includes('!') // true
str1.includes('?') // false
str1.charAt(11) // '!'
str1.indexOf('!') // 11
str1.trim() // 'HelloWorld!'

const str2 = '          Stefano' // 'Stefano'

// ARRAY
// un array è una collezione (lista) di valori contenuti in un'unica allocazione
// di memoria separati da virgola
// gli array tipicamente sono "mono-tipo", ma questo non è un requisito
const arr1 = [50, 1, 1500]
const arr2 = [{ name: 'Stefano' }, { name: 'Piero' }, { name: 'Giovanni' }]
const arr3 = [
  [4, 5],
  [true, false],
  ['ciao', 'hello'],
]

// ogni array, come ogni stringa, è dotato di LUNGHEZZA (length) che è sempre
// un numero pari alla quantità di elementi nell'array
// gli array differenziano i loro elementi grazie alla loro POSIZIONE (non esiste
// un nome, un'etichetta per ogni elemento come negli oggetti)
// le POSIZIONI (o indici) negli array cominciano da 0 e terminano con length - 1
// per recuperare un elemento da un array utilizziamo la formula
// nomearray[indiceelemento]

// per esplorare gli array tipicamente si utilizzano dei cicli, specialmente i for
// per esplorare arr1:
for (let i = 0; i < arr1.length; i++) {
  // i diventa un numero da 0 fino a 2 (3-1)
  // i cambia valore ad ogni iterazione
  // utilizzando i come indice otteniamo ad ogni giro un elemento diverso dell'array
  // arr1[0]
  // arr1[1]
  // arr1[2]
  console.log(arr1[i])
}

// metodi degli array che conosciamo
// .pop() <- fa saltare l'ultimo elemento di un array
// .shift() <- fa saltare un elemento ad un array in posizione iniziale
// .push() <- aggiunge un elemento ad un array in posizione finale
// .unshift() <- aggiunge un elemento ad un array in posizione iniziale
// .splice() <- aggiunge/rimuove elementi da un array in una determinata posizione
// arr1.splice(1, 1) <-- rimuove il valore in seconda posizione, cioè 1

// NOVITÀ DI ES6: nuovi METODI per gli array
// questi nuovi metodi sono delle soluzione "integrate" per CICLARLO

const numeri = [45, 60, 70, 95]
// aggiungiamo 7 ad ogni valore
for (let i = 0; i < numeri.length; i++) {
  numeri[i] = numeri[i] + 7
  // versione pro: numeri[i] += 7
}
// il risultato è che numeri ora risulta essere: [52, 67, 77, 102]

// per accorciare/semplificare questa operazione, ES6 introduce il metodo
// FOREACH
const numeri2 = [45, 60, 70, 95]
numeri2.forEach(function (element) {
  // questo è un ciclo che scorre TUTTI gli elementi di numeri2
  // qui dentro, come nel corpo del for, definite l'operazione da fare per ogni elementos
  // element al primo giro è 45
  // element al secondo giro è 60
  // element al terzo giro è 70
  // element al quarto giro è 95
  element = element + 7
  // PRO VERSION: element += 7
})
// una funzione passata come parametro ad un'altra funzione si def. "callback"
// il risultato è che numeri ora risulta essere: [52, 67, 77, 102]

// ES. X GIADA
const stringhe = ['albero', 'orata', 'estonia', 'imola']

const addG = function (str) {
  console.log(`G${str}`)
}
stringhe.forEach(addG) // fornire un riferimento alla funzione precedente
// console.log('STRINGHE DOPO GIADA', stringhe)
// ES. X GIADA

// altro esempio forEach
const names = ['matteo', 'giorgio', 'alberto', 'silvia']
names.forEach((name) => {
  // questa funzione interna verrà eseguita 4 volte, una volta per ogni elemento
  // dell'array
  // l'elemento dell'array è utilizzabile grazie al nome del primo parametro
  // della "callback"
  name = name.charAt(0).toUpperCase() + name.slice(1)
  console.log(name) // 'matteo', poi 'giorgio', poi 'alberto', infine 'silvia'
})

const dogs = [
  {
    name: 'Fufy',
    breed: 'Pomeranian',
    specialty: ['bark'],
  },
  {
    name: 'Gerry',
    breed: 'Labrador',
    specialty: ['play'],
  },
  {
    name: 'Bruno',
    breed: 'Shepard',
    specialty: ['Chase sheeps'],
  },
]

// creiamo per ogni elemento una proprietà age:
// CON UN FOR
for (let i = 0; i < dogs.length; i++) {
  // la i varrà da 0 a 2
  dogs[i].age = 2 + i
}

// CON UN FOREACH
dogs.forEach((cane, i) => {
  cane.age = 2 + i
  // i, se la esponete come secondo parametro della callback, si comporta
  // esattamente come la i che avreste nel for: è l'INDICE dell'elemento
})

// MAP
// map TRASFORMA UN ARRAY IN UN ALTRO ARRAY DI PARI LUNGHEZZA

// vogliamo creare un nuovo array con solamente i NOMI dei cani di dogs
const dogsNames = dogs.map((cane) => {
  // la differenza nel map è che dovrete RITORNARE un elemento ogni volta
  // il valore che tornate rappresenterà la TRASFORMAZIONE che applicherete su
  // ogni dog
  return cane.name // da un oggetto ritorno una stringa, il suo nome
})

console.log(dogsNames) // è un array di STRINGHE

// versione PRO, sfruttando il return "implicito" delle funzioni freccia
const dogsNamesPro = dogs.map((cane) => cane.name) // ['Fufy', 'Gerry', 'Bruno']

// metodo un po' underground per clonare un array :)
const dogsCopy = dogs.map((dog) => {
  return dog
})

// trasformiamo dogs in un altro array di oggetti: questa volta solo con il nome e l'età
const simplerDogs = dogs.map((cane) => {
  // cane è sempre un oggetto con 4 proprietà: name breed specialty age
  return {
    name: cane.name,
    age: cane.age,
  }
})

// x KEVIN, versione PRO
const simplerDogsPro = dogs.map((cane) => ({
  name: cane.name,
  age: cane.age,
}))

// come si fa quando il valore di ritorno è un OGGETTO e volete ritornarlo
// senza le graffe e senza il return? dovete circondare le graffe del vostro
// oggetto che intendete ritornare con un paio di PARENTESI TONDE

console.log('SIMPLERDOGS', simplerDogs)

// trasformiamo dogs in un array di NUMERI. Ogni cane diventerà solo
// un numero pari alla lunghezza del suo nome -> [4, 5, 5]

const justNamesLength = dogs.map((cane) => {
  return cane.name.length
})

console.log('lunghezze dei nomi', justNamesLength)

// con MAP avete sempre la certezza di NON ROVINARE l'array originale, perchè
// .map() ritorna SEMPRE un nuovo array (compreso di nuova allocazione in memoria)
// con MAP otterrete SEMPRE un array di PARI LUNGHEZZA all'originale!

// FILTER
// il metodo FILTER serve per FILTRARE un array.
// un array "filtrato" è un array in cui non è detto ci siano TUTTI gli elementi
// dell'array di partenza: dato un array di partenza di 3 elementi, una versione
// "filtrata" potrebbe avere 3 elementi, oppure 2, oppure 1, oppure 0.
// gli elementi risultanti nell'array filtrato saranno identici a quelli originali.

const gattini = [
  {
    name: 'Gino',
    color: 'White',
    age: 3,
  },
  {
    name: 'Pino',
    color: 'Black',
    age: 4,
  },
  {
    name: 'Rino',
    color: 'White',
    age: 2,
  },
  {
    name: 'Mino',
    color: 'Grey',
    age: 7,
  },
]

// voglio ottenere un array solamente di gatti bianchi.

// FOR
const whiteCats = []
for (let i = 0; i < gattini.length; i++) {
  if (gattini[i].color === 'White') {
    whiteCats.push(gattini[i])
  }
}

// FILTER
const white = gattini.filter((gatto) => {
  // dobbiamo tornare per ogni gatto true o false
  // se per un certo gatto torniamo TRUE, il gatto PASSA IL FILTRO
  // se per un certo gatto torniamo FALSE, il gatto NON PASSA IL FILTRO
  if (gatto.color === 'White') {
    return true // entra nell'array filtrato
  } else {
    return false // NON entra nell'array filtrato
  }
})

const whitePro = gattini.filter((gatto) => gatto.color === 'White')
console.log(whitePro)

// REDUCE
