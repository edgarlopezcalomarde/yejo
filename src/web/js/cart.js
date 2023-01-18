class Cart{

    constructor(){
        this.cartid=generateID();
        this.cart = []
        this.userId = null
        this.status = ""
        this.date = null
		this.totalprice = 0
    }

    addItem(item){     
        if(this.cart.includes(item)){
			this.cart.find(art=> art.id == item.id).unidades +=1
		}else{
			item.unidades = 1
			this.cart.push(item)	
		}

		localStorage.setItem("carrito", JSON.stringify(this))
    }

    removeItem(id){
        const index = this.cart.findIndex(item=> item.id == id)
        this.cart.splice(index, 1)

	
		localStorage.setItem("carrito", JSON.stringify(this))
    }

    modifyItem(id,n){	
		const articulo = this.cart.find(art=>art.id == id)

		if(n==="+"){
			articulo.unidades += 1
		}

		if(n==="-"){
			if(articulo.unidades > 1){
				articulo.unidades -= 1
			}else{
				this.removeItem(articulo.id)
			}
		}


		localStorage.setItem("carrito", JSON.stringify(this))
	}	
			
	get total(){
		return this.cart.reduce((a,b)=> a + (b.price*b.unidades), 0)
	}

	get items(){
		return this.cart.reduce((a,b)=> a + b.unidades,0)
	}

}