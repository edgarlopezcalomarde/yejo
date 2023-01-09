class Cart{

    constructor(){
        this.cart = []
    }

    addItem(item){
        
        if(this.cart.includes(item)){
			this.cart.find(art=> art.id == item.id).unidades +=1
		}else{
			item.unidades = 1
			this.cart.push(item)	
		}

    }

    removeItem(id){
        const index = this.cart.findIndex(item=> item.id == id)
        this.cart.splice(index, 1)
    }

}