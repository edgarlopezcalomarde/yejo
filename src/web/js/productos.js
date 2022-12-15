
const productsBox = document.getElementById("products")
const productsBestSellerBox = document.getElementById("bestseller")

const bannerSection = document.getElementById("banner")

const btnHaircare = document.getElementById("haircare")
const btnBodycare = document.getElementById("bodycare")
const btnOthers = document.getElementById("others")
const btnSkincare = document.getElementById("skincare")


const productos = [

    {
        id: "2jpn8l5kptpga4qge24ipch",
        complementary:"14ghol5b3flhq64octf6lol",
        category: "skincare",
        name: "Super green concentrated",
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
        complementary:"9drnei4pe6p4f2mftc76erl",
        category: "skincare",
        name: "Rescue face mist",
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
        complementary:"mib0k4nca769gl2en5dtabf",
        category: "skincare",
        name: "Urban face mist",
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
        complementary:"26q55i6q9mflnc3jb82dqe7",
        category: "skincare",
        name: "Glowy cleansing gel",
        sort_description: "Limpiador facial hidratante e iluminador.",
        big_description: `
        Mantén tu piel limpia, hidratada y con un efecto glowy gracias a nuestro Glowy Cleansing Gel. Elimina los restos de maquillaje e impurezas de forma delicada, aportando un extra de hidratación a tu piel para mantenerla sana e iluminada. Formulado con agua termal, extracto de cúrcuma y betaína hidratante extraída de la raíz de la remolacha, este limpiador es el aliado perfecto para tu limpieza facial. 
        95% ingredientes de origen natural /Apto para todo tipo de pieles / Testado dermatológicamente 
        `,
        efficacy: `
        El 100% de los consumidores confirma que el producto limpia y elimina de manera eficiente la impurezas de la piel y el exceso de sebo dejándola suave y de aspecto saludable.
        *Eficacia subjetiva en 21 consumidores, 2 veces al día durante 4 semanas de uso.
        `,
        ingredients: "VEGAN, PEG FREE, PARABEN FREE, SILICONE FREE, ALCOHOL FREE, SULFATE FREE",
        price: 28
    },
    {
        id: "29m4trfo2q97maa0e3sip2",
        complementary:"14ghol5b3flhq64octf6lol",
        category: "bodycare",
        name: "Hyaluronic Energy Serum",
        sort_description: "Sérum corporal piernas cansadas",
        big_description: `
        Sérum en formato de gel. Su fórmula aporta una sensación de alivio y confort inmediatos gracias a 8 activos vegetales: goldenrod, el alga roja, ácido hialurónico vegano, potentes activos naturales marinos.
        Contribuye al biensestar de la piel, con efecto calmante inmediato, acción antiséptica y antiinflamatoria y además activa la microcirculación y el flujo sanguíneo.
        Aporta máxima suavidad, firmeza y elasticidad en la piel, sin dejarla pegajosa gracias a su rápida absorción.      
        `,
        efficacy: `
            96% ingredientes de origen natural / Apto para pieles sensibles y atópicas / Apto para embarazadas 
        `,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE, PEG FREE, MEA FREE, TEA FREE,  SILICONE FREE, ALCOHOL FREE, MINERAL OILS FREE",
        price: 26
    },
    {
        id: "30l5sm5ffiqmar9jofriai7",
        complementary:"14ghol5b3flhq64octf6lol",
        category: "bodycare",
        name: "Hyaluronic Energy Body Serum",
        sort_description: "Emulsión corporal de rápida extensibilidad y absorción a base de aceite de semilla de cáñamo combinado con agua floral de Cannabis Sativa.",
        big_description: `
        Contribuye al bienestar de la piel dejándola suave e hidratada, sin sensación de pegajosidad, una vez absorbida. Actúa como agente calmante de acción rápida. Ayuda a la piel a reducir la pérdida de agua epidérmica. Es altamente nutritiva.
        `,
        efficacy: `96% ingredientes de origen natural / Apto para todo tipo de pieles: grasas, sensibles o mixtas`,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        price: 16
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



const generarCartas = (category) =>{

    let productsFilterByCategory = productos.filter(product => product.category == category)

    let cartas = ""

    productsFilterByCategory.forEach(product =>{
        cartas+=`
        <div class="c-card" idproduct = "${product.id}">
            <div class="c-card__header">
                <img src="./assets/img/${product.id}.png" alt="" class="c-card__img">
                <img src="#" alt="" class="c-card__like">
            </div>
            
            <div class="c-card__body">
                <div class="c-card__name">${product.name}</div>
                <div class="c-card__description">${product.sort_description}</div>
                <div class="c-card__price">${product.price}€</div>
                <div class="c-card__btn"><a href="#" class="c-button c-button--add-cart">Añadir a la bolsa</a></div>
            </div>
        </div>
        `

    })

    productsBox.innerHTML = cartas


    productModal()

}



const generarCartasBestSeller = () =>{
    const productsCopy = [...productos].sort((a, b) => 0.5 - Math.random());
    const productosBestSeller =  productsCopy.slice(3)

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
                <div class="c-card__description">${product.sort_description}</div>
                <div class="c-card__price">${product.price}€</div>
                <div class="c-card__btn"><a href="#" class="c-button c-button--add-cart">Añadir a la bolsa</a></div>
            </div>
        </div>
        `
    })


    productsBestSellerBox.innerHTML = cartas

}

generarCartasBestSeller()


btnSkincare.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    btnSkincare.style.borderBottom ='2px solid black'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid transparent'

    generarCartas("skincare")

})

btnBodycare.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    btnSkincare.style.borderBottom ='2px solid transparent'
    btnBodycare.style.borderBottom = '2px solid black'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid transparent'

    generarCartas("bodycare")

})


btnOthers.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    btnSkincare.style.borderBottom = '2px solid transparent'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom = '2px solid black'
    btnHaircare.style.borderBottom ='2px solid transparent'

    generarCartas("others")

})


btnHaircare.addEventListener("click",()=>{

    bannerSection.style.display = 'none'
    btnSkincare.style.borderBottom = '2px solid transparent'
    btnBodycare.style.borderBottom ='2px solid transparent'
    btnOthers.style.borderBottom ='2px solid transparent'
    btnHaircare.style.borderBottom ='2px solid black' 

    generarCartas("haircare")


})



