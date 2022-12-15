/* ---------- General references -------------- */
const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector("#btnCloseModal");
const bodyModal = document.querySelector(".c-modal__body");
const footerModal = document.querySelector(".c-modal__footer");

btnCloseModal.addEventListener("click", () => {
  modal.close();
});

/* ---------- Product Modal -------------- */

const productModal = () =>{

    const products = document.querySelectorAll(".c-card");

    products.forEach((product) => {
    product.addEventListener("click", () => {
        bodyModal.innerHTML = `
            <div class="c-product-preview">
                            <img class="c-product-preview__img"src="https://www.druni.es/media/catalog/product/a/4/a4b60d7d00d0b1babad7d5e196e3ce8e76a85fbad4099445902818e2c1fec134c22b188c6c816b3f0a903ea4accdeb312bf9c5a90f02962e0fdaf1aebb04374e.jpg?quality=80&fit=bounds&height=600&width=600&canvas=600:600" alt="productimg" class="c-preview">
                            
                            <div class="c-product-preview__body">
                                <div class="c-product-preview__name">ECODERMA</div>
                                <div class="c-product-preview__category">Champu</div>
                                <div class="c-product-preview__price">79,95 € </div>

                                <div class="c-product-preview__description"> El Champú Suave Hidratante e Iluminador de Ecoderma, está elaborado con ingredientes de origen natural respetuosos con la piel y el medio ambiente.
                                Su fórmula, con extracto de Bambú y Aceite de Arroz, proporciona una hidratación excepcional, dejando el cabello suave e increíblemente brillante desde la primera aplicación.
                                Fórmula fácilmente biodegradable. 0% Colorantes, Parabenos, Aceites derivados del petróleo y ftalatos.</div>
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

productModal()



/* ---------- Cart Modal -------------- */
const btnCart = document.querySelector("#btnCart");

btnCart.addEventListener("click", () => {
  bodyModal.innerHTML = `
    <div class="l-flex l-flex--direction-column l-flex--gap-7 g--margin-top-6">
        <div class="c-article"> 
            <img src="https://www.druni.es/media/catalog/product/a/4/a4b60d7d00d0b1babad7d5e196e3ce8e76a85fbad4099445902818e2c1fec134c22b188c6c816b3f0a903ea4accdeb312bf9c5a90f02962e0fdaf1aebb04374e.jpg?quality=80&fit=bounds&height=300&width=300&canvas=300:300" alt="articleimg" class="c-article__img">
            <div class="c-article__info">
                <div class="c-article__name">ECODERMA</div>
                <div class="c-article__category">Champu</div>
                <div class="c-article__description">Hidratante E Iluminador 500ML</div>
            </div>

            <div class="c-article__quantity">
                <a class="c-button c-button--quantity-minus" id="removeOne"><i class="fa-solid fa-minus"></i></a>
                <div id="quantity">2</div>
                <a class="c-button c-button--quantity-plus" id="addOne"><i class="fa-solid fa-plus"></i></a>
            </div>

            <div class="c-article__options">
                <div class="c-article__price">4,49€</div>
                <a class="c-button c-button--remove">Eliminar</a>
            </div>  

        </div>

        <div class="c-article"> 
            <img src="https://www.druni.es/media/catalog/product/d/4/d45e4a977d9964f18b9bb5c34413c4fa0a079cc88d7c334397ed29cfcff0b7fd8fdadca277bdd7dd93d8dc9d9236ff1d8377f832bd0b478ec7b0b23eae2b958f.jpg?quality=80&fit=bounds&height=300&width=300&canvas=300:300" alt="articleimg" class="c-article__img">
            <div class="c-article__info">
                <div class="c-article__name">ORGANIC SHOP</div>
                <div class="c-article__category">Mascarilla</div>
                <div class="c-article__description">Repara el cabello, perfeccionando su apariencia y cuerpo dándole un aspecto sedoso y haciendo que deslumbres. </div>
            </div>

            <div class="c-article__quantity">
                <a class="c-button c-button--quantity-minus" id="removeOne"><i class="fa-solid fa-minus"></i></a>
                <div id="quantity">1</div>
                <a class="c-button c-button--quantity-plus" id="addOne"><i class="fa-solid fa-plus"></i></a>
            </div>

            <div class="c-article__options">
                <div class="c-article__price">2,95€</div>
                <a class="c-button c-button--remove">Eliminar</a>
            </div>
         
        </div>


        <div class="c-article"> 
            <img src="https://www.druni.es/media/catalog/product/5/0/5030297.jpg?quality=80&fit=bounds&height=300&width=300&canvas=300:300" alt="articleimg" class="c-article__img">
            <div class="c-article__info">
                <div class="c-article__name">WELEDA</div>
                <div class="c-article__category">Aceite</div>
                <div class="c-article__description">Aceite De Abedul Para La Celulitis | 100ML </div>
            </div>

            <div class="c-article__quantity">
                <a class="c-button c-button--quantity-minus" id="removeOne"><i class="fa-solid fa-minus"></i></a>
                <div id="quantity">1</div>
                <a class="c-button c-button--quantity-plus" id="addOne"><i class="fa-solid fa-plus"></i></a>
            </div>

            <div class="c-article__options">
                <div class="c-article__price">16,95€</div>
                <a class="c-button c-button--remove">Eliminar</a>
            </div>
     
        </div>  

    </div>
    `;

  footerModal.innerHTML = 
    `
    <div class="c-modal__total">Total: 24,39€</div>
    <div class="c-modal__btn"><a href="#" class="c-button c-button--buy">Realizar pedido</a></div>
    
    `;

  modal.showModal();
});

/* ---------- History Modal -------------- */

const btnHistory = document.querySelector("#btnHistory");
    
btnHistory.addEventListener("click", () => {
  bodyModal.innerHTML = `
  <table class="c-table">
  <thead class="c-table__header">
      <tr class="c-table__row">
          <th class="c-table__item">ID pedido</th>
          <th class="c-table__item">Fecha</th>
          <th class="c-table__item">Total</th>
          <th class="c-table__item">Estado</th>
          <th class="c-table__item">Operaciones</th>
      </tr>
  </thead>
  <tbody class="c-table__body">
      <tr class="c-table__row">
          <td class="c-table__item">24hj4pbk9938c9706thj1s</td>
          <td class="c-table__item">Martes, 13 Diciembre de 2022</td>
          <td class="c-table__item">45,34€</td>
          <td class="c-table__item">Pendiente de pago</td>    
          <td class="c-table__item">
              <a href="#" class="c-button--delete">Eliminar</a>
              <a href="#" class="c-button--pay">Pagar</a>
          </td>
      </tr>
      <tr class="c-table__row">
          <td class="c-table__item">24hj4pbk9938c9706thj1s</td>
          <td class="c-table__item">Martes, 13 Diciembre de 2022</td>
          <td class="c-table__item">45,34€</td>
          <td class="c-table__item">Pendiente de pago</td>
          <td class="c-table__item">
              <a href="#" class="c-button--delete">Eliminar</a>
              <a href="#" class="c-button--pay">Pagar</a>
          </td>
      </tr>
  </tbody>
</table>
  
    `;

  footerModal.innerHTML = ``;

  modal.showModal();
});
