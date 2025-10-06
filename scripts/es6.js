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
