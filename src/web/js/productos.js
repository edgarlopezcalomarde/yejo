
const productsBox = document.getElementById("products")
const bannerSection = document.getElementById("banner")

const btnHaircare = document.getElementById("haircare")
const btnBodycare = document.getElementById("bodycare")
const btnOthers = document.getElementById("others")
const btnSkincare = document.getElementById("skincare")




const generarCartas = () =>{

    productsBox.innerHTML= `
    
        <div class="c-card">
            <div class="c-card__header">
                <img src="./assets/img/esponja.png" alt="" class="c-card__img">
                <img src="#" alt="" class="c-card__like">
            </div>
            
            <div class="c-card__body">
                <div class="c-card__name">Esponja Uwu</div>
                <div class="c-card__description">Tacto suave</div>
                <div class="c-card__price">10,49 €</div>
                <div class="c-card__btn"><a href="#" class="c-button c-button--add-cart">Añadir a la bolsa</a></div>
            </div>
        </div>

        <div class="c-card">
            <div class="c-card__header">
            <img src="./assets/img/esponja.png" alt="" class="c-card__img">
                <img src="#" alt="" class="c-card__like">
            </div>

            <div class="c-card__body">
                <div class="c-card__name">Ecoderma</div>
                <div class="c-card__description">Hidratante e iluminador 500ML</div>
                <div class="c-card__price">4,49 €</div>
                <div class="c-card__btn"><a href="#" class="c-button c-button--add-cart">Añadir a la bolsa</a></div>
            </div>
        </div>

        <div class="c-card">
            <div class="c-card__header">
            <img src="./assets/img/esponja.png" alt="" class="c-card__img">
                <img src="#" alt="" class="c-card__like">
            </div>

            <div class="c-card__body">
                <div class="c-card__name">Ecoderma</div>
                <div class="c-card__description">Hidratante e iluminador 500ML</div>
                <div class="c-card__price">4,49 €</div>
                <div class="c-card__btn"><a href="#" class="c-button c-button--add-cart">Añadir a la bolsa</a></div>
            </div>
        </div>
    
    
    `

    productModal()

}


btnSkincare.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    btnSkincare.style.borderBottom ='2px solid black'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid transparent'

    generarCartas()

})

btnBodycare.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    btnSkincare.style.borderBottom ='2px solid transparent'
    btnBodycare.style.borderBottom = '2px solid black'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid transparent'

    generarCartas()

})


btnOthers.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    btnSkincare.style.borderBottom = '2px solid transparent'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom = '2px solid black'
    btnHaircare.style.borderBottom ='2px solid transparent'

    generarCartas()

})


btnHaircare.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    btnSkincare.style.borderBottom = '2px solid transparent'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid black' 

    generarCartas()

})



