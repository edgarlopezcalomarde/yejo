const productsBox = document.getElementById("products")
const productsBestSellerBox = document.getElementById("bestseller")

const bannerSection = document.getElementById("banner")

const btnHaircare = document.getElementById("haircare")
const btnBodycare = document.getElementById("bodycare")
const btnOthers = document.getElementById("others")
const btnSkincare = document.getElementById("skincare")

const randomProductsSection = document.getElementById("moreProducts")
let listaproductos;
let cart = new Cart()
let user = new User();


const generarCartas = (category) =>{
    modal.innerHTML = ``;
    
    let productsFilterByCategory = listaproductos.filter(product => product.category == category)
  
    let cartas = ""

    productsFilterByCategory.forEach(product =>{

        cartas+=`
        <div class="c-card" idproduct="${product.id}">
            <div class="c-card__header">
                <img src="./assets/img/${product.id}.png" alt="" class="c-card__img">
                <img src="#" alt="" class="c-card__like">
            </div>
            
            <div class="c-card__body">
                <div class="c-card__name">${product.name}</div>
                <div class="c-card__company">${product.company}</div>
                <div class="c-card__description">${product.sortDescription}</div>
                <div class="c-card__price">${product.price}€</div>
                <div class="c-card__btn"><button  class="c-button c-button--primario-normal category">Añadir a la bolsa</button></div>
            </div>
        </div>
        `

    })

    productsBox.innerHTML = cartas
    

    document.querySelectorAll(".category").forEach( btn =>{
      
        const item = listaproductos.find(it => it.id == btn.parentNode.parentNode.parentNode.attributes.idproduct.value)
        btn.addEventListener("click", (e)=>{
            e.preventDefault()
            e.stopPropagation()
            cart.addItem(item)
        })
        
    })

   
    productModal(listaproductos)

}



const generarCartasBestSeller = (productos) =>{
    const productsCopy = [...productos].sort((a, b) => 0.5 - Math.random());
    const productosBestSeller =  productsCopy.slice(0,3)

    let cartas = ""

    productosBestSeller.forEach(product=>{
        cartas+=`
        <div class="c-card" idproduct = "${product.id}">
            <div class="c-card__header">
                <img src="./assets/img/${product.id}.png" alt="" class="c-card__img">
                <img src="#" alt="" class="c-card__like">
            </div>
            
            <div class="c-card__body">
                <div class="c-card__name">${product.name}</div>
                <div class="c-card__category">${product.category}</div>
                <div class="c-card__description">${product.sortDescription}</div>
                <div class="c-card__price">${product.price}€</div>
                <div class="c-card__btn"><button class="c-button c-button--primario-normal top">Añadir a la bolsa</button></div>
            </div>
        </div>
        `
    })

    productsBestSellerBox.innerHTML = cartas
  
    const btnsAddCart = document.querySelectorAll(".top")
    btnsAddCart.forEach(btn=>{
      
        const item = productos.find(it => it.id == btn.parentNode.parentNode.parentNode.attributes.idproduct.value)
        btn.addEventListener("click", (e)=>{
            e.preventDefault()
            e.stopPropagation()
            cart.addItem(item)
        })
    })

   
    productModal(productos)

}


const generarTarjetasMore = (productos) =>{
    const productsCopy = [...productos].sort((a, b) => 0.5 - Math.random());    
    const productsRandom =  productsCopy.slice(0,6)

    let listProducts = ''

    productsRandom.forEach(product =>{

        listProducts+=`
        <div class="c-product">
            <img class="c-product__img" src="./assets/img/${product.id}.png">
            <div class="c-product__body">
                <div class="c-product__name">${product.name}</div>
                <div class="c-card__btn"><button class="c-button c-button--primario-normal">Más info</button></div>
            </div>
        </div>
        `
    })

    randomProductsSection.innerHTML = listProducts

    const btnsMasInfo = document.querySelectorAll(".c-button--more")

    btnsMasInfo.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            productModal(productos)
        })
    })
}






btnSkincare.addEventListener("click",()=>{

    btnSkincare.checked = true

    bannerSection.style.display = 'none'
    randomProductsSection.parentNode.parentNode.style.display = 'none'
    btnSkincare.style.borderBottom ='2px solid black'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid transparent'
   
    generarCartas("skincare")
    

})

btnBodycare.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    randomProductsSection.parentNode.parentNode.style.display = 'none'
    btnSkincare.style.borderBottom ='2px solid transparent'
    btnBodycare.style.borderBottom = '2px solid black'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid transparent'

    generarCartas("bodycare")
  
})


btnOthers.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    randomProductsSection.parentNode.parentNode.style.display = 'none'
    btnSkincare.style.borderBottom = '2px solid transparent'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom = '2px solid black'
    btnHaircare.style.borderBottom ='2px solid transparent'

    generarCartas("others")

  
})


btnHaircare.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    randomProductsSection.parentNode.parentNode.style.display = 'none'
    btnSkincare.style.borderBottom = '2px solid transparent'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid black' 

    generarCartas("haircare")
})



/*Al cargar la pagina*/

window.onload = ()=>{

    const logo = document.querySelector("#logo")
    logo.addEventListener("click", ()=>{location.href = location.pathname})
    
    
    loadAllProducts()
    .then(response => {  
        listaproductos = response;
        generarCartasBestSeller(response)
        generarTarjetasMore(response)
    })
    .catch(error => { console.log(error)})
}


