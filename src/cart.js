
let cart = []

export function addCart(menu) {

    console.log("--------------------1")
    console.log(menu)
    
    const targetMenuArr =cart.filter(obj => obj.mno === menu.mno)
    console.log("--------------------2")
    console.log(targetMenuArr)

    if(targetMenuArr.length !==0){
        console.log("--------------------3-1")
        
        targetMenuArr[0].qty = targetMenuArr[0].qty +1
    }else {
        console.log("--------------------3-2")
        menu.qty = 1
        cart = [...cart, menu]
    }
    
    console.log(cart)
    
    return cart

}
export function changeCartQty(mno,oper) {
    console.log("changeCartQty")

    const targetMenu =cart.filter(obj => obj.mno === Number(mno))[0]

    console.log("------------eerserwer------------------")
    console.log(targetMenu)

    if(oper === 'plus'){
        targetMenu.qty += 1
    }else if(oper === 'minus'){

        if(targetMenu.qty === 1){
            
            cart = cart.filter(obj => obj.mno !== Number(mno))

        }else {

            targetMenu.qty -= 1
        }

    }
    return cart
}