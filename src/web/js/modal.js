/* ---------- General references -------------- */
const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector("#btnCloseModal");
const bodyModal = document.querySelector(".c-modal__body");
const footerModal = document.querySelector(".c-modal__footer");

btnCloseModal.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("close", ()=>{
    document.body.style.overflow = "auto"
})

/* ---------- Product Modal -------------- */

const productModal = () =>{


    const products = document.querySelectorAll(".c-card");

    products.forEach((product) => {
    product.addEventListener("click", (e) => {
        document.body.style.overflow = "hidden"

        const productData = productos.find(producto => producto.id == product.attributes.idproduct.value)
   
        bodyModal.innerHTML = `
            <div class="c-product-preview">
                            <img class="c-product-preview__img" src="./assets/img/${productData.id}.png" alt="productimg" class="c-preview">
                            
                            <div class="c-product-preview__body">
                                <div class="c-product-preview__name">${productData.name}</div>
                                <div class="c-product-preview__category">${productData.category}</div>
                                <div class="c-product-preview__company">${productData.company}</div>
                               
                                <div class="c-product-preview__refs">
                                    <div class="c-product-preview__price">${productData.price}€</div>
                                    <div class="c-product-preview__quantity">${productData.quantity} ${productData.quantity_type}</div>
                                </div>
                                
                                <div class="c-product-preview__description"> ${productData.big_description}</div>
                            </div>
                        </div>
            `;
        footerModal.innerHTML = `
            <div class="c-modal__btn"><a href="#" class="c-button c-button--add-cart">Añadir a la cesta</a></div>
            `;
            
        modal.showModal();
    });
    });

}




/* ---------- Cart Modal -------------- */
const btnCart = document.querySelector("#btnCart");


btnCart.addEventListener("click", () => {
    document.body.style.overflow = "hidden"

    let cartBox = ""
    if(cart.cart.length < 1){

        cartBox = '<div class="l-flex l-flex--direction-column l-flex--gap-7 g--margin-top-6">'

    
        cartBox += `
        <div class='c-article c-article--void'>
            <svg class="c-article__voidimg" width="1em" height="1em" viewBox="0 0 20 25" width="200" height="100" focusable="false" role="presentation" aria-hidden="true" name="" class="box__Box-sc-1fis1rt-0 _icon-constructor__Svg-sc-1rjim1r-0 flAoqd ekyULb"><path fill="currentColor"  d="M2,22.5L3,8.3h2.2v3.4c0,0.5,0.4,0.8,0.9,0.8s0.9-0.4,0.9-0.8V8.3h6.5v3.4c0,0.5,0.4,0.8,0.9,0.8 c0.5,0,0.9-0.4,0.9-0.8V8.3h2.1l1,14.2H2z M6.8,5c0-1.7,1.4-3.1,3.2-3.1s3.2,1.4,3.2,3.1v1.7H6.8V5z M18.8,7.3L18.8,7.3L18.8,7.3 c0-0.5-0.4-0.8-0.9-0.8h-3V4.8C15,2.2,12.7,0,10,0C7.2,0,5,2.2,5,4.8v1.7H2c-0.4,0-0.8,0.3-0.9,0.8L0,23.3c0,0.2,0.1,0.4,0.2,0.6 c0.1,0.2,0.4,0.3,0.7,0.3h18.3c0.3,0,0.5-0.1,0.6-0.2c0.2-0.2,0.3-0.4,0.2-0.6L18.8,7.3z"></path></svg>
            <div class="c-article__voidtitle">Tu cesta está vacía</div>
            <div class="c-article__voiddescription">¡Parece un buen momento para empezar a comprar!</div>
        </div>`   
    }else{
        cartBox = '<div class="l-flex l-flex--direction-column l-flex--gap-7 g--margin-top-6 g--padding-right-10">'
    }
       

        cart.cart.forEach(art=>{
            cartBox +=`
            <div class="c-article"> 
                <img src="./assets/img/${art.complementary}.png" alt="articleimg" class="c-article__img">
                <div class="c-article__info">
                    <div class="c-article__name">${art.name}</div>
                    <div class="c-article__category">${art.category}</div>
                    <div class="c-article__description">${art.sort_description}</div>
                </div>

                <div class="c-article__quantity">
                    <a class="c-button c-button--quantity-minus" id="removeOne"><i class="fa-solid fa-minus"></i></a>
                    <div id="quantity">${art.unidades}</div>
                    <a class="c-button c-button--quantity-plus" id="addOne"><i class="fa-solid fa-plus"></i></a>
                </div>

                <div class="c-article__options">
                    <div class="c-article__price">${art.price} €</div>
                    <a class="c-button c-button--remove">Eliminar</a>
                </div>  

            </div>
            `
        })

    cartBox += '</div>'
    

    bodyModal.innerHTML = cartBox

    if(!cart.cart.length < 1) {
        footerModal.innerHTML = 
        `
        <div class="c-modal__total">Total: 24,39€</div>
        <div class="c-modal__btn"><a href="#" class="c-button c-button--buy">Tramitar pedido</a></div>
        `;


        const btnPagar = document.querySelector(".c-button--buy")
        btnPagar.addEventListener("click", ()=>{
            modal.close()
            modalPagar()

        })
    }
  

    modal.showModal();
});





/* ---------- History Modal -------------- */

const btnHistory = document.querySelector("#btnHistory");
    
btnHistory.addEventListener("click", () => {
    document.body.style.overflow = "hidden"

  bodyModal.innerHTML = `
  <table class="c-table">
  <thead class="c-table__header">
      <tr>
          <th class="c-table__head">ID pedido</th>
          <th class="c-table__head">Fecha</th>
          <th class="c-table__head">Total</th>
          <th class="c-table__head">Estado</th>
          <th class="c-table__head">Operaciones</th>
      </tr>
  </thead>
  <tbody class="c-table__body">
      <tr class="c-table__row">
          <td class="c-table__item">24hj4pbk9938c9706thj1s</td>
          <td class="c-table__item">Martes, 13 Diciembre de 2022</td>
          <td class="c-table__item">45,34€</td>
          <td class="c-table__item c-table__item--status-pay">Pagado</td>    
          <td class="c-table__item c-table__item--btns">
              <a href="#" class="c-button c-button--pay">Pagar</a>
              <a href="#" class="c-button c-button--delete">Eliminar</a>
          </td>
      </tr>
      <tr class="c-table__row">
          <td class="c-table__item">rfnli1de96s9c17dtfntf</td>
          <td class="c-table__item">Martes, 24 Diciembre de 2022</td>
          <td class="c-table__item">45,34€</td>
          <td class="c-table__item c-table__item--status-pay">Pagado</td>
          <td class="c-table__item  c-table__item--btns">
              <a href="#" class="c-button c-button--pay">Pagar</a>
              <a href="#" class="c-button c-button--delete">Eliminar</a>
          </td>
      </tr>

      <tr class="c-table__row">
      <td class="c-table__item">24hj4pbk9938c9706thj1s</td>
      <td class="c-table__item">Martes, 13 Diciembre de 2022</td>
      <td class="c-table__item">45,34€</td>
      <td class="c-table__item c-table__item--status-pay">Pagado</td>    
      <td class="c-table__item c-table__item--btns">
          <a href="#" class="c-button c-button--pay">Pagar</a>
          <a href="#" class="c-button c-button--delete">Eliminar</a>
      </td>
    </tr>
    <tr class="c-table__row">
        <td class="c-table__item">24hj4pbk9938c9706thj1s</td>
        <td class="c-table__item">Martes, 13 Diciembre de 2022</td>
        <td class="c-table__item">45,34€</td>
        <td class="c-table__item c-table__item--status-pending">Pendiente</td>
        <td class="c-table__item  c-table__item--btns">
            <a href="#" class="c-button c-button--pay">Pagar</a>
            <a href="#" class="c-button c-button--delete">Eliminar</a>
        </td>
    </tr>
    <tr class="c-table__row">
    <td class="c-table__item">24hj4pbk9938c9706thj1s</td>
    <td class="c-table__item">Martes, 13 Diciembre de 2022</td>
    <td class="c-table__item">45,34€</td>
    <td class="c-table__item c-table__item--status-pay">Pagado</td>
    <td class="c-table__item  c-table__item--btns">
        <a href="#" class="c-button c-button--pay">Pagar</a>
        <a href="#" class="c-button c-button--delete">Eliminar</a>
    </td>
</tr>

  </tbody>
</table>
  
    `;

  footerModal.innerHTML = ``;

  modal.showModal();
});


/* ---------- Login Modal --------------*/ 
const btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", () => {
    bodyModal.innerHTML =
        `
        <div class="c-login">
            <div class="c-login__header">
                <img src="./assets/img/img_login.png" alt="login" id="login" class="c-login__img">
            </div>
            <div class="c-login__body">

                <div class="c-login__input">
                    <label for="email" class="c-login__label" >Correo electrónico: </label>
                    <input type="text" name="correo" class="c-input c-input--login" id="correo" placeholder="pepe@gmail.com">
                </div>
                
                <div class="c-login__input">
                    <label for="password" class="c-login__label">Contraseña: </label>
                    <input type="password" name="password" class="c-input c-input--login" id="password" placeholder="Tú contraseña">
                </div>

            </div>

            <button id="login" class="c-button c-button--login">Login</button>

        </div>
        `;
        footerModal.innerHTML = ``;
    modal.showModal();
});


/* ---------- Pagar Modal --------------*/ 


const btnPagar = document.querySelector("#boton2");

const modalPagar = () =>{
    
    modal.style.backgroundColor = "#FDEAA5";

    bodyModal.innerHTML = `
    <div class="l-flex l-flex--direction-column l-flex--align-items-center">
        <div class="l-flex l-flex--direction-row l-flex--align-items-center">
            <input type="radio" name="pago" id="iconVisa" value="visa.png" checked><img src="./assets/img/visa.png"
                alt="icono visa" class="c-icon__visa">
            <input type="radio" name="pago" id="iconMastercard" value="mastercard.png"><img
                src="./assets/img/mastercard.png" alt="icono mastercard" class="c-icon__mastercard">
        </div>
        <form id="formu" class="c-formulario">
            <img id="imagenTarjeta" name="imagenTarjeta" class="c-formulario__img" src="./assets/img/visa.png" alt="icono tarjeta">
            <label for="numeroTarjeta" class="c-formulario__texto">Número de tarjeta</label>
            <input type="text" maxlength="16" name="numeroTarjeta" id="numeroTarjeta" class="c-formulario__input" placeholder="1234 6969 8400 6755">
            <label for="titular" class="c-formulario__texto">Titular de la tarjeta</label>
            <input type="text" name="titular" id="titular" class="c-formulario__input" placeholder="Paolo Mongez">
            <div class="l-flex l-flex--direction-row">
                <div class="l-flex l-flex--direction-column">
                    <label for="mes" class="c-formulario__texto">Fecha de expiración</label>
                    <input type="date" name="expirar" id="expirar" class="c-formulario__input">
                </div>
                <div class="l-flex l-flex--direction-column g--padding-left-10 pruebas">
                    <label for="cvc" class="c-formulario__texto">CVC</label>
                    <input type="password" name="cvc" id="cvc" class="c-formulario__input" placeholder="***"  maxlength="3">
                </div>
            </div>
        </form>
    </div>
    `;
    footerModal.innerHTML = `
    <div class="l-flex l-flex--justify-content-end">
    <button id="login" class="c-button c-button--pagar">Realizar Pago ( 1500€ )</button>
    </div>
    `;
    let imagen = document.getElementById("imagenTarjeta");
    let metodoPago = document.getElementsByName("pago");
    for (let post = 0; post < metodoPago.length; post++) {
        metodoPago[post].onclick = function() {
            imagen.setAttribute("src", "./assets/img/"+this.value);
            }      
    }
    modal.showModal();

    btnCloseModal.addEventListener("click", ()=>{
        modal.style.backgroundColor = "#FFFFFF";

    })

    modal.addEventListener("keydown", (e)=>{
        console.log(e.key)
        if(e.key == "Escape"){
            modal.style.backgroundColor = "#FFFFFF";
        }
    })
}

