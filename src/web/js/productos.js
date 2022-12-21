const productsBox = document.getElementById("products")
const productsBestSellerBox = document.getElementById("bestseller")

const bannerSection = document.getElementById("banner")

const btnHaircare = document.getElementById("haircare")
const btnBodycare = document.getElementById("bodycare")
const btnOthers = document.getElementById("others")
const btnSkincare = document.getElementById("skincare")


const randomProductsSection = document.getElementById("moreProducts")

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
        quantity_type: "ml",
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
        quantity_type: "ml",
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
        quantity_type: "ml",
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
        quantity_type: "ml",
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
    quantity_type: "ml",
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
        quantity_type: "ml",
        company: "Fisaude",
        quantity: 200,
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
        quantity_type: "gr",
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
        quantity_type: "ml",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
    {
        id: "1645obrbcfsbio4mejg97fn",
        complementary: "sort1645obrbcfsbio4mejg97fn",
        category: "others",
        name: "Crystal snow",
        sort_description: "Un baño dulce y mentolado",
        big_description: `Una maravilla mineral con cristales de sal marina, menta y vainilla que deja la piel suave e hidratada.`,
        efficacy: `null`,
        ingredients: "null",
        quantity_type: "gr",
        company: "Lush",
        quantity: 200,
        price: 6.00
    },
    {
        id: "1jrfmdn4fi7f8s2olhltngf",
        complementary: "sort1jrfmdn4fi7f8s2olhltngf",
        category: "others",
        name: "Bamboo toothbrush",
        sort_description: "Cepillo de dientes fabricado en madera natural de bambú presentado en caja individual kraft y tapón protector.",
        big_description: `Cepillo de dientes fabricado en madera natural de bambú presentado en caja individual kraft y tapón protector.`,
        efficacy: `null`,
        ingredients: "null",
        quantity_type: "null",
        company: "Fisaude",
        quantity: 30,
        price: 1.00
    },
    {
        id: "1gto3r4e03jfldk40jl809",
        complementary: "sort1gto3r4e03jfldk40jl809",
        category: "others",
        name: "OrganiCup",
        sort_description: "Copa menstrual de silicona.",
        big_description: `El material de silicona de grado médico se obtiene de la arena (cuarzo), el material más abundante en la naturaleza de nuestro planeta. OrganiCup no contiene elementos químicos innecesarios, toxinas ni colorantes artificiales.`,
        efficacy: `Más de 700 000 mujeres usan la copa menstrual OrganiCup como su principal medida de protección higiénica.`,
        ingredients: "null",
        quantity_type: "null",
        company: "OrganiCup",
        quantity: 0,
        price: 10.00
    },
    {
        id: "3ql2pd332fcdt89rgdfcbg",
        complementary: "sort3ql2pd332fcdt89rgdfcbg",
        category: "others",
        name: "Natural sea sponge",
        sort_description: "Esponja marina natural",
        big_description: `Una esponja marina natural de panal de abeja sin blanquear de primera calidad seleccionada recién del mar Egeo, en la isla griega de Kalymnos. Las aguas profundas y frías aquí son clave para dar a nuestras esponjas su gran resistencia y densidad.`,
        efficacy: `null`,
        ingredients: "VEGAN, PARABEN FREE, NON TOXIC, PEG FREE",
        quantity_type: "ml",
        company: "Yepoda",
        quantity: 30,
        price: 10.00
    },
            {
            id: "413eit74fehsrtt0sg2agl",
            complementary: "sort413eit74fehsrtt0sg2agl",
            category: "haircare",
            name: "Ultra soothed scalp shampoo bar",
            sort_description: "Shampoo ultra nutritivo y calmante para cabello graso y cuero cabelludo alterado.",
            big_description: `Shampoo formulado con tensioactivos suaves para la limpieza y cuidado del cabello y cuero cabelludo. Combina agua floral de Cannabis Sativa (extraída del tallo y las hojas mediante destilación por vapor) con agentes acondicionadores del cabello que le aportan suavidad y D-panthenol o provitamina B5, reconocido por sus propiedades hidratantes y nutritivas. Ayuda a regula y equilibrar el cuero cabelludo y el exceso de sebo, prevenir la rotura del cabello, engrosar la estructura y reducir las puntas abiertas. Actúa como protector de polución y de calor.

            89% ingredientes de origen natural / Apto para todo tipo de cabellos / Testado dermatológicamente
            
            `,
            efficacy: `
            null
            `,
            ingredients: "VEGAN, PARABEN FREE, SULFATE FREE, NON TOXIC",
            quantity_type: "ml",
            quantity: 300,
            company: "Yepoda",
            quantity: 50,
            price: 22.00
        },

        {
            id: "79b6mencq4phtpnda1rpaq",
            category: "haircare",
            complementary: "sort79b6mencq4phtpnda1rpaq",
            name: "Silky restoring shampoo bar",
            sort_description: "Shampoo formulado para controlar el encrespamiento y  aportar una alta dosis de hidratación en cabellos frágiles y dañados.",
            big_description: `
            Shampoo formulado con tensioactivos suaves para la limpieza y cuidado del cabello y cuero cabelludo. Contiene ácido hialurónico de diferentes pesos moleculares y extracto de algodón. 

Ayuda a reparar y equilibrar cabellos secos y castigados por factores externos, ya sean ambientales, térmicos o químicos. Actúa como protector de la cutícula del cabello, mejorando su aspecto y aportando hidratación y flexibilidad.

Apto para todo tipo de cabellos / Testado dermatológicamente
            `,
            efficacy: `
            null
            `,
            ingredients: "VEGAN, SULFATE FREE",
            quantity_type: "ml",
            quantity: 300,
            company: "Yepoda",
            quantity: 80,
            price: 18.00
        },

        {
            id: "1hmhes90gcs2rmpflhnr3eq",
            complementary: "sort1hmhes90gcs2rmpflhnr3eq",
            category: "haircare",
            name: "Intensive repair mask",
            sort_description: "Mascarilla capilar hidratante y reestructurante para cabellos frágiles y dañados.",
            big_description: `
            Aporta a tu cabello una dosis extra de volumen, brillo y fuerza. Nuestra mascarilla es el tratamiento perfecto para cabellos frágiles y dañados, debido a la exposición a factores externos ambientales, térmicos y químicos, que ayuda retener la humedad del cabello aportando densidad, plenitud, suavidad y grosor. Contiene una alta concentración de ácido hialurónico de diferentes pesos moleculares, manteca de mango y aceite de semilla de uva.

Apto para todo tipo de cabellos / Testado dermatológicamente  
            `,
            efficacy: `
            null
            `,
            ingredients: "VEGAN",
            quantity_type: "ml",
            company: "Yepoda",
            quantity: 300,
            
            price: 21.00
        },

        {
            id: "6b4sefp881egp0aa46ej0o3",
            category: "haircare",
            complementary: "sort6b4sefp881egp0aa46ej0o3",
            name: "Superfood hairoil",
            sort_description: "Aporta brillo, elasticidad y suavidad al cabello de manera natural.",
            big_description: `
            Aporta brillo, elasticidad y suavidad al cabello de manera natural.

 

Nuestro Super Food Hair Oil es un aceite de tacto seco para el cuidado del cabello. Formulado con una combinación de aceite de semilla de cáñamo, rico en omega 3 y 6, aceite de abisinia, rico en omega 9 y un emoliente biodegradable de origen natural, que le aporta un extraordinario brillo, elasticidad y suavidad al cabello de manera natural, sobre todo a cabellos secos y apagados. Forma un ligero film nutritivo que ayuda a protegerlo de las agresiones mecánicas o ambientales como el exceso de calor o el agua del mar, convirtiéndose en un imprescindible en tu rutina de belleza capilar

 

99% ingredientes de origen natural / Apto para todo tipo de pieles / Testado dermatológicamente  
            `,
            efficacy: `
            null
            `,
            ingredients: "VEGAN, PARABEN FREE, PEG-FREE, SILICONE FREE",
            quantity_type: "ml",
            company: "Fisaude",
            quantity: 50,
            price:16.00
        }

]



const generarCartas = (category) =>{
    footerModal.innerHTML = ``;
    
    let productsFilterByCategory = productos.filter(product => product.category == category)
  
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
                <div class="c-card__description">${product.sort_description}</div>
                <div class="c-card__price">${product.price}€</div>
                <div class="c-card__btn"><button  class="c-button c-button--add-cart uwu">Añadir a la bolsa</button></div>
            </div>
        </div>
        `

    })

    productsBox.innerHTML = cartas
    

    document.querySelectorAll(".uwu").forEach( btn =>{
      
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


const generarTarjetasMore = () =>{
    const productsCopy = [...productos].sort((a, b) => 0.5 - Math.random());    
    const productsRandom =  productsCopy.slice(0,6)

    let listProducts = ''

    productsRandom.forEach(product =>{

        listProducts+=`
        <div class="c-product">
            <img class="c-product__img" src="./assets/img/${product.id}.png">
            <div class="c-product__body">
                <div class="c-product__name">${product.name}</div>
                <div class="c-card__btn"><button class="c-button c-button--more">Más info</button></div>
            </div>
        </div>
        `
    })

    randomProductsSection.innerHTML = listProducts

    const btnsMasInfo = document.querySelectorAll(".c-button--more")

    btnsMasInfo.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            productModal()
        })
    })
}



generarCartasBestSeller()

generarTarjetasMore()



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



const logo = document.querySelector("#logo")
logo.addEventListener("click", ()=>{location.href = location.pathname})




