

class Cart{

    constructor(){
        this.cart = []
    }

    addItem(item){
        const itemAlreadyExist = this.cart.find(it=> it.id == item.id)

        if(itemAlreadyExist){
            itemAlreadyExist.unidades++
        }else{
            item.unidades = 0
            this.cart.push(item)
        }

    }

    removeItem(id){
        const index = this.cart.findIndex(item=> item.id == id)
        this.cart.splice(index, 1)
    }

}