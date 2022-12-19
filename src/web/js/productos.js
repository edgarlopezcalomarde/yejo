const productsBox = document.getElementById("products")
const productsBestSellerBox = document.getElementById("bestseller")

const bannerSection = document.getElementById("banner")

const btnHaircare = document.getElementById("haircare")
const btnBodycare = document.getElementById("bodycare")
const btnOthers = document.getElementById("others")
const btnSkincare = document.getElementById("skincare")


let cart = new Cart()

const productos = [
    
    {
        id: "2jpn8l5kptpga4qge24ipch",
        complementary: "sort2jpn8l5kptpga4qge24ipch",
        category: "skincare",
        name: "Super green concentrated",
        sort_description: "Sérum super nutritivo que ayuda a equilibrar pieles con rojeces o acné.",
        big_description: `
        Suero anhidro que contiene Hechy Complex combinado con aceite de semilla de cáñamo combinado con aceite de chía, considerado un “superalimento” antioxidante rico en omega-3 y omega-6, y escualano, un emoliente protector obtenido a través del aceite de oliva.
        Es una inyección de fitonutrientes naturales para la piel, que le da una extraordinaria sensación de confort, elasticidad, protección, hidratación y suavidad. Se absorbe rápidamente y no deja rastros grasientos.   
        `,
        efficacy: `
        EFICACIA PROBADA:
        
        El 95%* de los consumidores confirman que el producto aporta suavidad, luminosidad y sensación de confort a la piel.
        
        *Eficacia subjetiva en 20 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica.
        `,
        ingredients: "VEGAN, PARABEN FREE, NATURAL ORIGIN FRAGRANCE, PEG-FREE, NON TOXIC",
        quantity_type: "ML",
        company: "Amapola",
        quantity: 100,
        price: 21.00 
    },

    {
        id: "35820h75phr68dn0d8m33mg",
        complementary: "sort35820h75phr68dn0d8m33mg",
        category: "skincare",
        name: "Urban face mist",
        sort_description: "Bruma facial que aporta sensación de hidratación, frescura y protección a la piel a cualquier hora del día.",
        big_description: `
        Bruma facial que aporta sensación de hidratación, frescura y protección a la piel a cualquier hora del día. Suave bruma facial a base de agua de Cannabis Sativa combinada con un polisacárido de  alto peso molecular, que ejerce de escudo protector, invisible y transpirable frente a la polución ambiental debida a la contaminación atmosférica. Además, contiene Niacinamida, que refuerza el efecto protector de la piel al ayudar a reducir los efectos producidos por la luz azul.
        
        95% ingredientes de origen natural / Apto para todo tipo de pieles / Testado dermatológicamente y oftalmológicamente
        `,
        efficacy: `
        EFICACIA PROBADA:

        El 100% de los consumidores confirma que el producto reequilibra el bienestar de la piel en cualquier momento del día y el 95%, además, confirma que lo hace mientras la protege de factores externos ambientales.

        *Eficacia subjetiva en 22 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica y oftalmológica.
        `,
        ingredients: "VEGAN, PEG FREE, PARABEN FREE, ALCOHOL FREE, NATURAL ORIGIN FRAGRANCE, SILICONE FREE",
        quantity_type: "ML",
        company: "Secretos del agua",
        quantity: 200,
        price: 21.00  
    },

    {
        id: "1ssaee7q71m84d79jppaka1",
        complementary: "sort29m4trfo2q97maa0e3sip2",
        category: "skincare",
        name: "Glowy cleansing gel",
        sort_description: "Limpiador facial hidratante e iluminador.",
        big_description: `
        Mantén tu piel limpia, hidratada y con un efecto glowy gracias a nuestro Glowy Cleansing Gel. Elimina los restos de maquillaje e impurezas de forma delicada, aportando un extra de hidratación a tu piel para mantenerla sana e iluminada. Formulado con agua termal, extracto de cúrcuma y betaína hidratante extraída de la raíz de la remolacha, este limpiador es el aliado perfecto para tu limpieza facial. 
        
        95% ingredientes de origen natural /Apto para todo tipo de pieles / Testado dermatológicamente 
        `,
        efficacy: `
        EFICACIA PROBADA:

        El 100% de los consumidores confirma que el producto limpia y elimina de manera eficiente la impurezas de la piel y el exceso de sebo dejándola suave y de aspecto saludable.
        
        *Eficacia subjetiva en 21 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica.
        `,
        ingredients: "VEGAN, PEG FREE, PARABEN FREE, SILICONE FREE, ALCOHOL FREE, SULFATE FREE",
        quantity_type: "ML",
        company: "Ecco Verde",
        quantity: 200,
        price: 28.00   
    },

    {
        id: "q1hc977cmf92gidqq1l8tfo",
        complementary: "sort30l5sm5ffiqmar9jofriai7",
        category: "skincare",
        name: "Rescue face mist",
        sort_description: "Bruma facial hidratante, antioxidante  y nutritiva que refresca la piel y aporta sensación de confort a cualquier hora del día.",
        big_description: `
        Delicada bruma facial de agua de Rosa Búlgara y una poderosa combinación a base de kale, limón y zanahoria que le aporta propiedades antioxidantes y nutritivas a la piel. Además, contiene extracto de Aloe vera y Niacinamida que refuerzan su efecto hidratante. Refresca la piel y le devuelve su sensación de confort a cualquier hora del día. 
        
        95% ingredientes de origen natural / Apto para todo tipo de pieles / Testado dermatológicamente y oftalmológicamente   
        `,
        efficacy: `
        EFICACIA PROBADA:

        El 100% de los consumidores confirma que el producto refresca y restaura la sensación de confort de la piel en cualquier momento del día, dejándola suave e hidratada.
        
        *Eficacia subjetiva en 20 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica y oftalmológica.
        `,
        ingredients: "VEGAN, PEG-FREE, PARABEN FREE, SILICONE FREE, ALCOHOL FREE, NATURAL ORIGIN FRAGRANCE",
        quantity_type: "ML",
        company: "Secretos del agua",
        quantity: 100,
        price: 21.00    
    },
    {
    id: "29m4trfo2q97maa0e3sip2",
    complementary: "sort29m4trfo2q97maa0e3sip2",

    category: "bodycare",
    name: "Hyaluronic Energy Serum",
    sort_description: "Sérum corporal piernas cansadas",
    big_description: `
    Sérum en formato de gel. Su fórmula aporta una sensación de alivio y confort inmediatos gracias a 8 activos vegetales: goldenrod, el alga roja, ácido hialurónico vegano, potentes activos naturales marinos.
    
    Contribuye al biensestar de la piel, con efecto calmante inmediato, acción antiséptica y antiinflamatoria y además activa la microcirculación y el flujo sanguíneo.
    Aporta máxima suavidad, firmeza y elasticidad en la piel, sin dejarla pegajosa gracias a su rápida absorción.
    
    96% ingredientes de origen natural / Apto para pieles sensibles y atópicas / Apto para embarazadas
    `,
    efficacy: `
    EFICACIA PROBADA:

    El 100% de los consumidores confirma que el producto refresca y restaura la sensación de confort de la piel en cualquier momento del día, dejándola suave e hidratada.
        
    *Eficacia subjetiva en 20 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica y oftalmológica.
    `,
    ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE, PEG FREE, MEA FREE, TEA FREE,  SILICONE FREE, ALCOHOL FREE, MINERAL OILS FREE",
    quantity_type: "ML",
    company: "KenzaOil",
    quantity: 200,
    price: 38.00
    },
    {
        id: "30l5sm5ffiqmar9jofriai7",
        complementary: "sort30l5sm5ffiqmar9jofriai7",
        category: "bodycare",
        name: "Balance body",
        sort_description: "Emulsión corporal de rápida extensibilidad y absorción a base de aceite de semilla de cáñamo combinado con agua floral de Cannabis Sativa. ",
        big_description: `
        Contribuye al bienestar de la piel dejándola suave e hidratada, sin sensación de pegajosidad, una vez absorbida. Actúa como agente calmante de acción rápida. Ayuda a la piel a reducir la pérdida de agua epidérmica. Es altamente nutritiva.

        96% ingredientes de origen natural / Apto para todo tipo de pieles: grasas, sensibles o mixtas
        `,
        efficacy: `
        EFICACIA PROBADA:

        El 95% de los consumidores confirma que el producto refresca y restaura la sensación de confort de la piel en cualquier momento del día, dejándola suave e hidratada.

        *Eficacia subjetiva en 20 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica y oftalmológica.

        `,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        cuantity_type: "ML",
        company: "Fisaude",
        cuantity: 200,
        price: 16.00
    },
    {
        id: "pmjg7dso8q925cqhm71n7e",
        complementary: "sortpmjg7dso8q925cqhm71n7e",
        category: "bodycare",
        name: "Exfoliating body soap",
        sort_description: "Jabón corporal exfoliante con aroma a almendras y limón.",
        big_description: `
        Enriquecido con aceite de Almendra de Provenza. Este jabón limpia y exfolia la piel mientras la envuelve en un sutil y delicioso aroma a almendras frescas y limón. Su textura ayuda la eliminación de células muertas, dejando la piel suave y luminosa. 

        100% ingredientes de origen natural / Apto para todo tipo de pieles: grasas, sensibles o mixtas
   
        `,
        efficacy: `
        EFICACIA PROBADA:

        El 100% de los consumidores confirma que el producto limpia y elimina de manera eficiente la impurezas de la piel y el exceso de sebo dejándola suave y de aspecto saludable.

        *Eficacia subjetiva en 21 consumidores, 2 veces a la semana durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica.
        `,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PALM OIL FREE",
        quantity_type: "GR",
        company: "KenzaOil",
        quantity: 125, 
        price: 8
    },
    {
        id: "qi7i4im3gg9j0d9qf0pt39",
        complementary: "sortqi7i4im3gg9j0d9qf0pt39",

        category: "bodycare",
        name: "Skin Food Light",
        sort_description: "Nutrición intensiva de textura cremosa y rápida absorción para piel seca.",
        big_description: `
        Skin Food Light aporta confort a la piel seca inmediatamente. Esta crema de textura cremosa que se absorbe rápidamente, combina aceite de girasol orgánico con los extractos calmantes de pensamiento silvestre, camomila y caléndula. La piel se hidrata al instante, su fórmula regenera la barrera protectora natural de la piel y la protege frente a la sequedad.

        96% ingredientes de origen natural / Apto para todo tipo de pieles: grasas, sensibles o mixtas 
        `,
        efficacy: `
        EFICACIA PROBADA:

        El 100% de los consumidores confirma que el producto refresca y restaura la sensación de confort de la piel en cualquier momento del día, dejándola suave e hidratada.

        *Eficacia subjetiva en 20 consumidores, 2 veces al día durante 4 semanas de uso. Test de uso en laboratorio bajo supervisión dermatológica.
        `,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "",
        complementary: "",
        category: "others",
        name: "",
        sort_description: "",
        big_description: ``,
        efficacy: ``,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "",
        complementary: "",
        category: "others",
        name: "",
        sort_description: "",
        big_description: ``,
        efficacy: ``,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "",
        complementary: "",
        category: "others",
        name: "",
        sort_description: "",
        big_description: ``,
        efficacy: ``,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "",
        complementary: "",
        category: "others",
        name: "",
        sort_description: "",
        big_description: ``,
        efficacy: ``,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "",
        complementary: "",
        category: "haircare",
        name: "",
        sort_description: "",
        big_description: ``,
        efficacy: ``,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "",
        complementary: "",
        category: "haircare",
        name: "",
        sort_description: "",
        big_description: ``,
        efficacy: ``,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "",
        complementary: "",
        category: "haircare",
        name: "",
        sort_description: "",
        big_description: ``,
        efficacy: ``,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "",
        complementary: "",
        category: "haircare",
        name: "",
        sort_description: "",
        big_description: ``,
        efficacy: ``,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ML",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    }

]



// let plantilla =    {
//     id: "",
//     category: "",
//     name: "",
//     sort_description: "",
//     big_description: `
       
//     `,
//     efficacy: `

//     `,
//     ingredients: "",
//     price: 0
// }



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
                <div class="c-card__company">${product.company}</div>
                <div class="c-card__description">${product.sort_description}</div>
                <div class="c-card__price">${product.price}€</div>
                <div class="c-card__btn"><button  class="c-button c-button--add-cart">Añadir a la bolsa</button></div>
            </div>
        </div>
        `

    })

    productsBox.innerHTML = cartas


    document.querySelectorAll(".c-button--add-cart").forEach( btn =>{
        const item = productos.find(it => it.id == btn.parentNode.parentNode.parentNode.attributes.idproduct.value)
        btn.addEventListener("click", (e)=>{
            e.preventDefault()
            e.stopPropagation()
            cart.addItem(item)
        })
        
    })

    productModal()

    

}



const generarCartasBestSeller = () =>{
    const productsCopy = [...productos].sort((a, b) => 0.5 - Math.random());
    const productosBestSeller =  productsCopy.slice(0,3)

    console.log(productosBestSeller)

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
                <div class="c-card__btn"><button class="c-button c-button--add-cart">Añadir a la bolsa</button></div>
            </div>
        </div>
        `
    })

    productsBestSellerBox.innerHTML = cartas
  
    const btnsAddCart = document.querySelectorAll(".c-button--add-cart")
    btnsAddCart.forEach(btn=>{
      
        const item = productos.find(it => it.id == btn.parentNode.parentNode.parentNode.attributes.idproduct.value)
        btn.addEventListener("click", (e)=>{
            e.preventDefault()
            e.stopPropagation()
            cart.addItem(item)
        })
    })

    productModal()

}

generarCartasBestSeller()




btnSkincare.addEventListener("click",()=>{

    btnSkincare.checked = true

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



const logo = document.querySelector(".c-logo")

logo.addEventListener("click", ()=>{location.href = location.pathname})




