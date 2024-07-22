import { createItem } from "./services/item.js"
import * as cartServices from "./services/cart.js"

const cart = [];

console.log("Bem vindo a api inicial de Cart 💸")

const item = await createItem("Tv 4k 22 polegadas",7000, 1)
const item2 = await createItem("Microondas Philips",2400, 3)
const item3 = await createItem("Honda Civic",50000 , 4)
const item4 = await createItem("Iphone 12",5000, 1)

await cartServices.addItemCart(cart,item)
await cartServices.addItemCart(cart,item2)
await cartServices.addItemCart(cart,item3)
await cartServices.addItemCart(cart,item4)

console.log(`\nItems antes da exclusão`);
//console.log(cart);

//await cartServices.removeItemCartByQuantity(cart,item3.name,2)
//await cartServices.removeItemCartByIndex(cart,1)
//await cartServices.deleteItemCart(cart,item.name)

await cartServices.displayCart(cart);

await cartServices.calculateTotal(cart)

//console.log(cart);

