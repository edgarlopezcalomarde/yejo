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

    bodyModal.innerHTML = 

    cartBox = '<div class="l-flex l-flex--direction-column l-flex--gap-7 g--margin-top-6 g--padding-right-10">'

        console.log(cart.cart.length < 0)

        if(cart.cart.length < 1){
            cartBox += "<div class='c-article c-article--void'>Carrito Vacio</div>"
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

    footerModal.innerHTML = 
        `
        <div class="c-modal__total">Total: 24,39€</div>
        <div class="c-modal__btn"><a href="#" class="c-button c-button--buy">Tramitar pedido</a></div>
        `;

    modal.showModal();
});





/* ---------- History Modal -------------- */

const btnHistory = document.querySelector("#btnHistory");
    
btnHistory.addEventListener("click", () => {
    document.body.style.overflow = "hidden"

  bodyModal.innerHTML = `
  <table class="c-table">
  <thead class="c-table__header">
      <tr class="c-table__row">
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
          <td class="c-table__item">Pendiente de pago</td>    
          <td class="c-table__item">
              <a href="#" class="c-button c-button--pay">Pagar</a>
              <a href="#" class="c-button c-button--delete">Eliminar</a>
          </td>
      </tr>
      <tr class="c-table__row">
          <td class="c-table__item">24hj4pbk9938c9706thj1s</td>
          <td class="c-table__item">Martes, 13 Diciembre de 2022</td>
          <td class="c-table__item">45,34€</td>
          <td class="c-table__item">Pendiente de pago</td>
          <td class="c-table__item">
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


/* ---------- Card- Modal --------------*/ 
const btnCard = document.querySelector("#btnCard");

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