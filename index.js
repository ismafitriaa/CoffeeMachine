// const coffeeStock = require('./state');
 
// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// makeCoffee("robusta", 80);

/* output
Kopi berhasil dibuat!
*/

const {coffeeStock, isCoffeeMachineReady} = require('./state');

console.log(coffeeStock);
console.log(isCoffeeMachineReady);

