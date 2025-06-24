
let cart = []

export function addCart(menu) {

    console.log("--------------------1")
    console.log(menu)
    
    const targetMenu =cart.filter(obj => obj.mno === menu.mno)
    console.log("--------------------2")
    console.log(targetMenu)

    if(targetMenu){
        console.log("--------------------3-1")
        
        targetMenu.qty = targetMenu.qty +1
    }else {
        console.log("--------------------3-2")
        menu.qty = 1
        cart = [...cart, menu]
    }
    
    console.log(cart)

}
export function removeCart(mno) {
    console.log("remove")

    const targetMenu =cart.filter(obj => obj.mno === mno)

    if(targetMenu){

        if(targetMenu.qty === 1){
            cart = filter(obj => obj.mno !== mno)
        }

    }


}