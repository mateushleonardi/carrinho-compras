
export function addItemCart(userCart,item){
    userCart.push(item);
    console.log(`\n Item ${item.name} adicionado`)

}

export async function removeItemCartByIndex(userCart,index){  
    if(index >= 0 && index < userCart.length){
        const removeItem = userCart[index].name
        userCart.splice(index,1); 
        console.log(`\n Item ${removeItem} removido`)
    }
    else{
        console.log(`\n Item não encontrado`)
    }
}

export async function removeItemCartByQuantity(userCart, name, quantity){

    const itemIndex = userCart.findIndex((item)=> item.name === name);
    if(itemIndex >= 0){
        if(userCart[itemIndex].quantity > quantity){
            const removeItem = userCart[itemIndex].name;
            userCart[itemIndex].quantity -= quantity;
            console.log(`Item ${removeItem} removido`)
 } else if(userCart[itemIndex].quantity === quantity){
            const removeItem = userCart[itemIndex].name;
            userCart.splice(itemIndex,1);
            console.log(`\n Item ${removeItem} removido`)
        }else{
            console.log(`\n Quantidade para remover é maior do que a quantidade disponível no carrinho`)
        }

    }


}


export async function deleteItemCart(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name)
    if(index !== -1){
        const removeItem = userCart[index].name;
        userCart.splice(index,1)
        console.log(`Item ${removeItem} removido`)
    }
    else{
        console.log(`\n Item não encontrado`)
    }

}

export async function displayCart(userCart){
    console.log("Lista de Compras: ")
    userCart.forEach((item,index)=>{
    console.log(`
--------------------------------------------------
            |${index + 1} 
            |              - NOME DO PRODUTO: ${item.name} 
            |              - PREÇO DO PRODUTO: ${item.priceFormat} 
            |              - QUANTIDADES COMPRADAS: ${item.quantity} 
            | Subtotal ${item.subtotalFormatted()}      
        `)  
    })
}

export async function calculateTotal(userCart, price){
    const result = userCart.reduce((price,item)=> price + item.subtotal(),0)
    const formatResult = result.toLocaleString("pt-br",{style:"currency",currency:"BRL"})
    console.log(`Valor a ser pago: ${formatResult}`);
}