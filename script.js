const output = document.getElementById('output-1');
const output2 = document.getElementById('output-2');
const output3 = document.getElementById('output-3');
const output4 = document.getElementById('pari-dispari');
const result = document.getElementById('risultato')

// 1
const pariDispariUtente = prompt('scegli se pari o dispari')
console.log(pariDispariUtente)
// 2
const numeroUtenteString = prompt('scegli un numero da 1 a 5')
const numeroUtente = parseInt(numeroUtenteString)
console.log(numeroUtente);

// 1b faccio si che l'utente possa scrivere solo o pari o dispari

if( pariDispariUtente == "pari" || pariDispariUtente == "dispari" ){
  output.innerHTML += 'hai scelto:' + pariDispariUtente
  }else{
    output.innerHTML = 'scegli se pari o dispari'
  }

if( numeroUtente == "1" || numeroUtente == "2" || numeroUtente == "3" || numeroUtente == "4" || numeroUtente == "5"){
  output2.innerHTML += 'hai scelto:' + numeroUtente
}else{
  output2.innerHTML = 'devi scegliere un numero da 1 a 5'}  
  
// 4
const numeroRandomPc = numeroRandom ('1 , 5');
console.log (numeroRandomPc);
document.getElementById("numero-casuale").innerHTML = 'il numero casuale generato è :' + numeroRandomPc;

// 6
const sommaFinale = sommaUtentePc(numeroRandomPc, numeroUtente);

// 7b
const verificaNumero = verificaPariDispari(sommaFinale);
console.log(verificaNumero);

document.getElementById("pari-dispari").innerHTML = 'il risultato finale è: ' + verificaNumero;

if ( pariDispariUtente === verificaNumero){
  risultato.innerHTML += 'hai vinto tu'
}else{
  risultato.innerHTML += 'hai perso'
}


// FUNZIONI

// 3
/**
 * numero random tra 1 e 5
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function numeroRandom (min, max){
  return Math.ceil(Math.random()*5);
}

// 5
/**
 * somma tra il numero random e il numero immesso da utente
 * @param {number} numeroRandomPc 
 * @param {number} numeroUtente 
 */
function sommaUtentePc ( numeroRandomPc, numeroUtente){
  output3.innerHTML += 'la somma tra il tuo numero e il numero random è :  ' + (numeroRandomPc+ numeroUtente);
  return numeroUtente + numeroRandomPc;
}


// 7
function verificaPariDispari (numero){
  console.log(numero)
  if ( numero % 2 === 0 ){
    return 'pari'
  }else{
    'dispari'
  }
}



// voglio controllare l'input corretto dell'utente --> deve essere o dispari o pari --> usp di operatore logico OR ||

// or --> a || b || c => quando è vera?
//  almeno una è vera

// a = true e b = true || = true
// a = true e b = false || = true
// a = false e b = false || = false
// a = false e b = true || = true

// and --> a && b => quando è vera?
// è vera se entrambe

// a = true e b = true ->&& = true
// a = true e b = false && = false
// a = false e b = false && = false
// a = false e b = true && = false







