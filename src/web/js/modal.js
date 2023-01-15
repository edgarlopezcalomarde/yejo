/* ---------- General references -------------- */

const modal = document.querySelector("#modal");
const btnHistory = document.querySelector("#btnHistory");

function closeModal() {
    const btnCloseModal = document.querySelector("#btnCloseModal");
    btnCloseModal.addEventListener("click", () => {
        modal.classList.remove("g--background-color-alternativo-6")
        modal.close()
    });
}

modal.addEventListener("close", () => {
    document.body.style.overflow = "auto"
    
})

modal.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        modal.classList.remove("g--background-color-alternativo-6")
    }
})

if (localStorage.getItem("currentuser") != "" && localStorage.getItem("currentuser") != null) {
    const nicknameBox = document.querySelector("#currentUserNick")
    let currentUser = JSON.parse(localStorage.getItem("currentuser"))
    nicknameBox.innerHTML = currentUser.nick
    btnHistory.parentNode.classList.remove("g--oculto")
}

/* ---------- Product Modal -------------- */

const productModal = (productos) => {

    const products = document.querySelectorAll(".c-card");
    products.forEach((product) => {
        product.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            const productData = productos.find(producto => producto.id == product.attributes.idproduct.value)

            let preview = `
            <div class="c-modal__header">
                <div class="c-modal__title"></div>
                <div class="c-modal__close" id="btnCloseModal">&times;</div>
            </div>

            <div class="c-modal__body">
                <div class="c-preview">
                <img class="c-preview__img" src="./assets/img/${productData.id}.png" alt="productimg" class="c-preview">
                <div class="c-preview__body">
                    <div class="c-preview__name">${productData.name}</div>
                    <div class="c-preview__category">${productData.category}</div>
                    <div class="c-preview__company">${productData.company}</div>
                    <div class="c-preview__refs">
                        <div class="c-preview__price">${productData.price}€</div>
                        <div class="c-preview__quantity">${productData.quantity + " " + productData.quantityType}</div>
                    </div>
                    <div class="c-preview__description"> ${productData.bigDescription}</div>
                </div>
            </div>

            <div class="c-modal__footer">
                <div class="c-modal__btn"><a href="#" class="c-button c-button--primario-normal">Añadir a la cesta</a></div>
            </div>`

            modal.innerHTML = preview

            const cpreview = document.querySelector(".c-preview")
            cpreview.style.overflowY = "hidden"

            closeModal()
            modal.showModal();
        });
    });

}




/* ---------- Carrito Modal -------------- */

const pintarCarrito = () => {
    document.body.style.overflow = "hidden"

    let cartBox = `
    <div class="c-modal__header">
        <div class="c-modal__title"></div>
        <div class="c-modal__close"  id="btnCloseModal">&times;</div>
    </div>
    `
    if (cart.cart.length < 1) {

        cartBox += `
        <div class="c-modal__body">
            <div class="l-flex l-flex--direction-column l-flex--gap-7 g--margin-top-6">
                <div class='c-article c-article--void'>
                    <svg class="c-article__voidimg" width="1em" height="1em" viewBox="0 0 20 25" width="200" height="100" focusable="false" role="presentation" aria-hidden="true" name="" class="box__Box-sc-1fis1rt-0 _icon-constructor__Svg-sc-1rjim1r-0 flAoqd ekyULb"><path fill="currentColor"  d="M2,22.5L3,8.3h2.2v3.4c0,0.5,0.4,0.8,0.9,0.8s0.9-0.4,0.9-0.8V8.3h6.5v3.4c0,0.5,0.4,0.8,0.9,0.8 c0.5,0,0.9-0.4,0.9-0.8V8.3h2.1l1,14.2H2z M6.8,5c0-1.7,1.4-3.1,3.2-3.1s3.2,1.4,3.2,3.1v1.7H6.8V5z M18.8,7.3L18.8,7.3L18.8,7.3 c0-0.5-0.4-0.8-0.9-0.8h-3V4.8C15,2.2,12.7,0,10,0C7.2,0,5,2.2,5,4.8v1.7H2c-0.4,0-0.8,0.3-0.9,0.8L0,23.3c0,0.2,0.1,0.4,0.2,0.6 c0.1,0.2,0.4,0.3,0.7,0.3h18.3c0.3,0,0.5-0.1,0.6-0.2c0.2-0.2,0.3-0.4,0.2-0.6L18.8,7.3z"></path></svg>
                    <div class="c-article__voidtitle">Tu cesta está vacía</div>
                    <div class="c-article__voiddescription">¡Parece un buen momento para empezar a comprar!</div>
                </div>
            </div>
        </div>
      `

    } else {

        let articulos = ""

        cart.cart.forEach(art => {
            articulos += `
            <div class="c-article" artId="${art.id}"> 
                <img src="./assets/img/${art.id}sort.png" alt="articleimg" class="c-article__img">
                <div class="c-article__info">
                    <div class="c-article__name">${art.name}</div>
                    <div class="c-article__category">${art.category}</div>
                    <div class="c-article__description">${art.sortDescription}</div>
                </div>

                <div class="c-article__quantity">
                    <a class="c-button c-button--quantity btnRemoveOne"><i class="fa-solid fa-minus"></i></a>
                    <div id="quantity">${art.unidades}</div>
                    <a class="c-button c-button--quantity btnAddOne"><i class="fa-solid fa-plus"></i></a>
                </div>

                <div class="c-article__options">
                    <div class="c-article__price">${art.price} €</div>
                    <a class="c-button c-button--terciario-peligroso btnDelete">Eliminar</a>
                </div>  

            </div>
            `
        })

        cartBox += `
        <div class="c-modal__body">
            <div class="l-flex l-flex--direction-column l-flex--gap-7 g--margin-top-6 g--padding-right-10">
                ${articulos}
            </div>
        </div>
        <div class="c-modal__footer">
            <div class="c-modal__total">Total: ${cart.total} €</div>
            <div class="c-modal__btn"><a href="#" class="c-button c-button--primario-normal" id="btnTramitar">Tramitar pedido</a></div>
        </div>
        `
    }

    modal.innerHTML = cartBox


    if (!cart.cart.length < 1) {

        const btnsAddOne = document.querySelectorAll(".btnAddOne")
        const btnsRemoveOne = document.querySelectorAll(".btnRemoveOne")
        const btnsDelete = document.querySelectorAll(".btnDelete")

        btnsAddOne.forEach(btn => {
            btn.addEventListener("click", () => {
                cart.modifyItem(btn.parentNode.parentNode.getAttribute("artId"), "+")
                pintarCarrito()
            })
        })

        btnsRemoveOne.forEach(btn => {
            btn.addEventListener("click", () => {
                cart.modifyItem(btn.parentNode.parentNode.getAttribute("artId"), "-")
                pintarCarrito()
            })
        })

        btnsDelete.forEach(btn => {
            btn.addEventListener("click", () => {
                cart.removeItem(btn.parentNode.parentNode.getAttribute("artId"))
                pintarCarrito()
            })
        })


        const btnPagar = document.querySelector("#btnTramitar")
        btnPagar.addEventListener("click", () => { almacenarCarritoPendiente() })

    }

    closeModal()

}


const btnCart = document.querySelector("#btnCart");

btnCart.addEventListener("click", () => {
    pintarCarrito()
    modal.showModal();
});


/* ---------- History Modal -------------- */

const pintarOrders = (orders) => {
    document.body.style.overflow = "hidden"
    let ordersBox = ""

    orders.forEach(order => {

        ordersBox += `
        <tr class="c-table__row">
            <td class="c-table__item">${order.id}</td>
            <td class="c-table__item">${order.date}</td>
            <td class="c-table__item">${order.totalprice}€</td>
            <td class="c-table__item c-table__item--status-pay">${order.status}</td>    
            <td class="c-table__item c-table__item--status-pending g--oculto">${order.status}</td>    
            <td class="c-table__item c-table__item--btns">
                <a href="#" id="${order.id}_recuperar" class="c-button c-button--primario-normal">Recuperar</a>
                <a href="#" id="${order.id}_eliminar" class="c-button c-button--primario-peligroso">Eliminar</a>
            </td>
        </tr>
        `
    })

    modal.innerHTML = `
    <div class="c-modal__header">
        <div class="c-modal__title"></div>
        <div class="c-modal__close"  id="btnCloseModal">&times;</div>
    </div>
        
    <div class="c-modal__body">
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
            ${ordersBox}
        </tbody>
        </table>
    </div>
    `;
    orders.forEach(e => {
        document.getElementById(e.id + "_recuperar").addEventListener("click", () => { recuperarPedido(e) });
        document.getElementById(e.id+"_eliminar").addEventListener("click", () => {eliminarPedido(e.id)});
    })
}

function recuperarPedido(order) {
    cart.cartid = order.cartid;
    cart.cart = order.cart;
    pintarCarrito()
}

btnHistory.addEventListener("click", () => {
obtenerPedidos();
});

const obtenerPedidos = () =>{
    getOrdersByUser(JSON.parse(localStorage.getItem("currentuser")).id)
    .then(orders => {
        pintarOrders(orders)
        closeModal()
    })

modal.showModal();
}


/* ---------- User, Login y Register Modal --------------*/

let entry = `
<div class="c-modal__header">
    <div class="c-modal__title"></div>
    <div class="c-modal__close"  id="btnCloseModal">&times;</div>
</div>

<div class="c-entry" id="loginBox">

    <h2 class="c-title c-title--xl">Iniciar Sesion</h2>

    <form name="login" class="l-flex l-flex--direction-column" style="width:80%;">
        <label for="user" class="c-entry__label" >Usuario: </label>
        <input type="text" name="user" class="c-input c-input--entry" placeholder="pepe@gmail.com">
            
        <label for="password" class="c-entry__label">Contraseña: </label>
        <input type="password" name="password" class="c-input c-input--entry" placeholder="Tú contraseña">
    </form>

    <div class="g--margin-vertical-5"></div>

    <button id="btnIniciarSesion" class="c-button c-button--primario-normal" style="width:80%;">Inicia Sesion</button>
    <p id="btnIrRegister" class="c-button g--margin-top-5">¿No tienes cuenta? Registrate</p>
</div>

<div class="c-entry g--oculto" id="registerBox">

    <h2 class="c-title c-title--xl">Crea tu Cuenta</h2>

    <form name="register" class="l-flex l-flex--direction-column" style="width:80%;">
        <label for="email" class="c-entry__label" >Correo electrónico: </label>
        <input type="text" name="mail" class="c-input c-input--entry" placeholder="pepe@gmail.com">

        <label for="user" class="c-entry__label">Usuario: </label>
        <input type="text" name="nickname" class="c-input c-input--entry" placeholder="pepe15">

        <label for="password" class="c-entry__label">Contraseña: </label>
        <input type="password" name="password" class="c-input c-input--entry" placeholder="Escribe una contraseña">

        <label for="repassword" class="c-entry__label">Repetir Contraseña: </label>
        <input type="password" name="repassword" class="c-input c-input--entry" placeholder="Repite la contraaseña">

    </form>

    <div class="g--margin-vertical-5"></div>
    <button id="btnRegister" class="c-button c-button--primario-normal" style="width:80%;">Registrate</button>
    <p id="btnIrLogin" class="c-button g--margin-top-5">¿Ya tienes cuenta? Inicia Sesion</p>

</div>

<div id="userBox" class="g--oculto">

    <div class="c-entry">
        <div class="c-title">User Info</div>
        <div id="usernickname" class="g--margin-vertical-5"></div>
        <div id="usermail" class="g--margin-vertical-5"></div>
        <button id="btnCerrarSesion" class="c-button c-button--primario-normal">Cerrar Sesion</button>
    </div>
</div>
`

function loginRegister() {
    modal.innerHTML = entry

    const btnIrRegister = document.querySelector("#btnIrRegister");
    const btnIrLogin = document.querySelector("#btnIrLogin");
    const loginBox = document.querySelector("#loginBox");
    const registerBox = document.querySelector("#registerBox");
    const userBox = document.querySelector("#userBox");
    const btnCerrarSesion = document.querySelector("#btnCerrarSesion");

    const usernickname = document.querySelector("#usernickname");
    const usermail = document.querySelector("#usermail");
    const nicknameBox = document.querySelector("#currentUserNick")

    btnIrRegister.addEventListener("click", () => {
        loginBox.classList.add("g--oculto")
        registerBox.classList.remove("g--oculto")
    })

    btnIrLogin.addEventListener("click", () => {
        loginBox.classList.remove("g--oculto")
        registerBox.classList.add("g--oculto")
    })

    /*BTN INICIAR SESION*/

    const btnIniciarSesion = document.querySelector("#btnIniciarSesion")
    btnIniciarSesion.addEventListener("click", (e) => {
        let loginData = {}
        Array.from(document.forms.login).forEach(input => loginData[input.name] = input.value)

        try {
            let response = isEmpty(loginData)

            findUser(response.user, response.password)
                .then(data => {

                    if(data.length > 0){
                        if (data[0].nickname == response.user && data[0].pass == response.password) {

                            console.log("uwu")
    
                            loginBox.classList.add("g--oculto")
                            registerBox.classList.add("g--oculto")
                            userBox.classList.remove("g--oculto")
            
                            localStorage.setItem("currentuser", 
                                JSON.stringify({
                                    id: data[0].id,
                                    nick: data[0].nickname,
                                    mail: data[0].mail
                                })
                            )
    
                            let currentUser = JSON.parse(localStorage.getItem("currentuser"))
    
                            usernickname.innerHTML = currentUser.nick
                            usermail.innerHTML = currentUser.mail
                            nicknameBox.innerHTML = currentUser.nick
                            btnHistory.parentNode.classList.remove("g--oculto")
    
                            modal.close() 
                        }else{
                            alert("Nombre de usuario o contraseña incorrectos")
                        }

                    }else{
                        alert("Nombre de usuario o contraseña incorrectos")
                    }

                     
                })
                .catch(response => console.log(response));

        } catch (err) {
            alert(err.msg)
        }

    })


    /*BTN REGISTRARSE*/
    const btnRegister = document.querySelector("#btnRegister")
    btnRegister.addEventListener("click", ()=>{
        let registerData = {}
        Array.from(document.forms.register).forEach(input => registerData[input.name] = input.value);

        try {
            let data = isEmpty(registerData);
            passMatches(data.password, data.repassword);
         
        
            registerUser( {nickname:data.nickname,mail:data.mail,pass:data.password} )
            .then(response => {
                console.log(response)
                
            }).catch(err => console.log(err));

        } catch (err) {
            alert(err.msg)
        }
       
    })


    /*BTN CERRAR SESION*/

    btnCerrarSesion.addEventListener("click", () => {
        localStorage.setItem("currentuser", "")
        loginBox.classList.remove("g--oculto")
        userBox.classList.add("g--oculto")
        nicknameBox.innerHTML = ""
        btnHistory.parentNode.classList.add("g--oculto")
        modal.close()
    })


    if (localStorage.getItem("currentuser") != "" && localStorage.getItem("currentuser") != null) {
        loginBox.classList.add("g--oculto")
        registerBox.classList.add("g--oculto")
        userBox.classList.remove("g--oculto")


        let currentUser = JSON.parse(localStorage.getItem("currentuser"))
        usernickname.innerHTML = currentUser.nick
        usermail.innerHTML = currentUser.mail
        nicknameBox.innerHTML = currentUser.nick



    } else {
        loginBox.classList.remove("g--oculto")
        registerBox.classList.add("g--oculto")
        userBox.classList.add("g--oculto")
    }

    closeModal()
    modal.showModal();

}


const btnLogin = document.querySelector("#btnLogin");


btnLogin.addEventListener("click", () => {
    loginRegister()
});





/* ---------- Pagar Modal --------------*/
const btnPagar = document.querySelector("#boton2");

const modalPagar = () => {



    modal.innerHTML = `
    <div class="c-modal__header">
        <div class="c-modal__title"></div>
        <div class="c-modal__close"  id="btnCloseModal">&times;</div>
    </div>

    <div class="l-flex l-flex--direction-column l-flex--align-items-center">

        <div class="l-flex l-flex--direction-row l-flex--align-items-center l-flex--gap-1">
            <input type="radio" name="pago" id="iconVisa" value="visa.png" checked>
            <img src="./assets/img/visa.png" alt="icono visa" class="c-img c-img--icon-s">
            
            <input type="radio" name="pago" id="iconMastercard" value="mastercard.png">
            <img src="./assets/img/mastercard.png" alt="icono mastercard" class="c-img c-img--icon-s">
        </div>

        <form id="formu" class="c-formulario">
            <img id="imagenTarjeta" name="imagenTarjeta" class="c-formulario__img" src="./assets/img/visa.png" alt="icono tarjeta">
            
            <label for="numeroTarjeta" class="c-formulario__texto">Número de tarjeta</label>
            <input type="text" maxlength="16" name="numeroTarjeta" id="numeroTarjeta" class="c-input c-input--creditcard" placeholder="1234 6969 8400 6755">
            
            <label for="titular" class="c-formulario__texto">Titular de la tarjeta</label>
            <input type="text" name="titular" id="titular" class="c-input c-input--creditcard" placeholder="Paolo Mongez">
            
            <div class="l-flex l-flex--direction-row">

                <div class="l-flex l-flex--direction-column">
                    <label for="mes" class="c-formulario__texto">Fecha de expiración</label>
                    <input type="date" name="expirar" id="expirar" class="c-input c-input--creditcard">
                </div>
                <div class="l-flex l-flex--direction-column g--padding-left-10">
                    <label for="cvc" class="c-formulario__texto">CVC</label>
                    <input type="password" name="cvc" id="cvc" class="c-input c-input--creditcard" placeholder="***"  maxlength="3">
                </div>

            </div>
        </form>

    </div>

    <div class="c-modal__footer">
        <div class="l-flex l-flex--justify-content-end">
            <button id="btnPagar" class="c-button c-button--primario-normal g--margin-top-2">Realizar Pago ( 1500€ )</button>
        </div>
    </div>
    `;


    let imagen = document.getElementById("imagenTarjeta");
    let metodoPago = document.getElementsByName("pago");
    for (let post = 0; post < metodoPago.length; post++) {
        metodoPago[post].onclick = function () {
            imagen.src = "./assets/img/" + this.value;
        }
    }

    const btnRealizarCompra = document.getElementById("btnPagar")
    btnRealizarCompra.addEventListener("click", () => {
        almacenarCarritoPagado()
    })

    closeModal();
    modal.classList.add("g--background-color-alternativo-6");
    modal.showModal();
}

