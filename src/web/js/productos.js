
const productsBox = document.getElementById("products")
const bannerSection = document.getElementById("banner")

const btnHaircare = document.getElementById("haircare")
const btnBodycare = document.getElementById("bodycare")
const btnOthers = document.getElementById("others")
const btnSkincare = document.getElementById("skincare")


const productos = [

    {
        id: "2jpn8l5kptpga4qge24ipch",
        category: "skincare",
        name: "SUPER GREEN CONCENTRATE",
        sort_description: "Sérum super nutritivo que ayuda a equilibrar pieles con rojeces o acné.",
        big_description: `
            Suero anhidro que contiene Hechy Complex combinado con aceite de semilla de cáñamo combinado con aceite de chía, considerado un “superalimento” antioxidante rico en omega-3 y omega-6, y escualano, un emoliente protector obtenido a través del aceite de oliva.
            Es una inyección de fitonutrientes naturales para la piel, que le da una extraordinaria sensación de confort, elasticidad, protección, hidratación y suavidad. Se absorbe rápidamente y no deja rastros grasientos.
            97% ingredientes de origen natural / Apto para todo tipo de pieles / Testado dermatológicamente
        `,
        efficacy: `
        El 95%* de los consumidores confirman que el producto aporta suavidad, luminosidad y sensación de confort a la piel.
        *Eficacia subjetiva en 20 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica.        
        `,
        ingredients: "VEGAN, PARABEN FREE, NATURAL ORIGIN FRAGRANCE, PEG-FREE, NON TOXIC",
        price: 21.50
    },

    {
        id: "35820h75phr68dn0d8m33mg",
        category: "skincare",
        name: "RESCUE FACE MIST",
        sort_description: "Bruma facial hidratante, antioxidante  y nutritiva que refresca la piel y aporta sensación de confort a cualquier hora del día.",
        big_description: `
        Delicada bruma facial de agua de Rosa Búlgara y una poderosa combinación a base de kale, limón y zanahoria que le aporta propiedades antioxidantes y nutritivas a la piel. Además, contiene extracto de Aloe vera y Niacinamida que refuerzan su efecto hidratante. Refresca la piel y le devuelve su sensación de confort a cualquier hora del día. 

        95% ingredientes de origen natural / Apto para todo tipo de pieles / Testado dermatológicamente y oftalmológicamente        
        `,
        efficacy: `
        El 100% de los consumidores confirma que el producto refresca y restaura la sensación de confort de la piel en cualquier momento del día, dejándola suave e hidratada.
        *Eficacia subjetiva en 20 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica y oftalmológica.
        `,
        ingredients: "VEGAN, PEG-FREE, PARABEN FREE, SILICONE FREE, ALCOHOL FREE, NATURAL ORIGIN FRAGRANCE",
        price: 27.95
    },
    {
        id: "q1hc977cmf92gidqq1l8tfo",
        category: "skincare",
        name: "URBAN FACE MIST",
        sort_description: "Bruma facial que aporta sensación de hidratación, frescura y protección a la piel a cualquier hora del día.",
        big_description: `
        Bruma facial que aporta sensación de hidratación, frescura y protección a la piel a cualquier hora del día. Suave bruma facial a base de agua de Cannabis Sativa combinada con un polisacárido de  alto peso molecular, que ejerce de escudo protector, invisible y transpirable frente a la polución ambiental debida a la contaminación atmosférica. Además, contiene Niacinamida, que refuerza el efecto protector de la piel al ayudar a reducir los efectos producidos por la luz azul.
        95% ingredientes de origen natural / Apto para todo tipo de pieles / Testado dermatológicamente y oftalmológicamente       
        `,
        efficacy: `
        El 100% de los consumidores confirma que el producto reequilibra el bienestar de la piel en cualquier momento del día y el 95%, además, confirma que lo hace mientras la protege de factores externos ambientales.
        *Eficacia subjetiva en 22 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica y oftalmológica.        
        `,
        ingredients: "VEGAN, PEG FREE, PARABEN FREE, ALCOHOL FREE, NATURAL ORIGIN FRAGRANCE, SILICONE FREE",
        price: 26.30
    },
    {
        id: "1ssaee7q71m84d79jppaka1",
        category: "skincare",
        name: "GLOWY CLEANSING GEL",
        sort_description: "Limpiador facial hidratante e iluminador.",
        big_description: `
        Mantén tu piel limpia, hidratada y con un efecto glowy gracias a nuestro Glowy Cleansing Gel. Elimina los restos de maquillaje e impurezas de forma delicada, aportando un extra de hidratación a tu piel para mantenerla sana e iluminada. Formulado con agua termal, extracto de cúrcuma y betaína hidratante extraída de la raíz de la remolacha, este limpiador es el aliado perfecto para tu limpieza facial. 
        95% ingredientes de origen natural /Apto para todo tipo de pieles / Testado dermatológicamente 
        `,
        efficacy: `
    
        `,
        ingredients: "VEGAN, PEG FREE, PARABEN FREE, SILICONE FREE, ALCOHOL FREE, SULFATE FREE",
        price: 28
    }
]


let plantilla =    {
    id: "",
    category: "",
    name: "",
    sort_description: "",
    big_description: `
       
    `,
    efficacy: `

    `,
    ingredients: "",
    price: 0
}



const generarCartas = () =>{

    productsBox.innerHTML= `
    
        <div class="c-card">
            <div class="c-card__header">
                <img src="./assets/img/esponja.png" alt="" class="c-card__img">
                <img src="#" alt="" class="c-card__like">
            </div>
            
            <div class="c-card__body">
                <div class="c-card__name">SUPER GREEN CONCENTRATE</div>
                <div class="c-card__description"></div>
                <div class="c-card__price">10,49</div>
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



