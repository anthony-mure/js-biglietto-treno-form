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