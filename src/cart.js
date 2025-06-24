
let cart = []

export function addCart(menu) {

    console.log("add")
    

    const targetMenu =cart.filter(obj => obj.mno === menu.mno)

    if(targetMenu){
        targetMenu.qty = targetMenu.qty +1
    }else {
        menu.qty = 1
        cart = [...cart, menu]
    }

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