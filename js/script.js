/*Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

let age = parseInt(prompt("inserite la vostra età "));
console.log(age);

let km = parseInt(prompt("inserite il numero di km che volete percorrere "));
console.log(km);

let priceTicket =(0.21 * km);
console.log(priceTicket);

let ticketDiscount;


if(age < 18){
  ticketDiscount = priceTicket - (priceTicket * 20 / 100 );
  console.log(ticketDiscount.toFixed(2));
}
else if(age > 65){
  ticketDiscount = priceTicket - (priceTicket * 40 / 100);
  console.log(ticketDiscount.toFixed(2));
}
else{
   ticketDiscount = priceTicket;
}