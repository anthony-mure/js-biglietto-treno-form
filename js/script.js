/*Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

/*MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.*/ 


// nell'html creo due imput per chiedere l'età e i km che l'utente vuole percorrere
//  creo un bottone con id per l'invio dei dati
// in js creo la funzione click sul bottone creato in html 
//prendo i valori età e km degli imput


const button = document.getElementById('btn');

const recapData = document.getElementById('recapData');

button.addEventListener('click',function(event){
  event.preventDefault();

   const name = document.getElementById('name').value;
   const surname = document.getElementById('surname').value;
   const sex = document.getElementById('sex').value;
   const date = document.getElementById('date').value;

   const eta = document.getElementById('eta').value;
   const km = document.getElementById('km').value;

console.log(name,surname,sex,date,eta,km);



let priceTicket =(0.21 * km);
console.log(priceTicket);

let ticketDiscount;

if(eta < 18){
  ticketDiscount = priceTicket - (priceTicket * 20 / 100 );
  
}
else if(eta > 65){
  ticketDiscount = priceTicket - (priceTicket * 40 / 100);
  
}
else{
   ticketDiscount = priceTicket;
}
    console.log(ticketDiscount.toFixed(2));

    recapData.innerHTML = `
  <ul>
    <li><strong>NOME: </strong>${name}</li>
    <li><strong>COGNOME: </strong>${surname}</li>
    <li><strong>SESSO: </strong>${sex}</li>
    <li><strong>DATA DI PARTENZA: </strong>${date}</li>
    <li><strong>ETÀ: </strong>${eta}</li>
    <li><strong>KILOMETRI TRATTA: </strong>${km}</li>
    <li><strong>PREZZO BIGLIETTO: </strong>€ ${ticketDiscount.toFixed(2)}</li>
  </ul>
`;

});

/*MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//nell'html sistemare e implementare la form in cui l'utente inserirà i propri dati (nome , cognome ,sesso ,data di partenza )
//aggiungere questi nuovi dati alla funzione evento click button in js
//inniettare nell'html il calcolo finale con il prezzo del biglietto del passeggero
//creare nell'html una card con i dati di recap del passeggero e il prezzo finale del biglietto