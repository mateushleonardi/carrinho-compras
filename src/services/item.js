export async function createItem(name,price,quantity){
  const priceFormat = price.toLocaleString("pt-br",{style:"currency",currency:"BRL"})
return{
    name,
    price,
    priceFormat,
    quantity,
    subtotal(){return this.price * this.quantity},
    subtotalFormatted() {
        return (this.price * this.quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
}



}