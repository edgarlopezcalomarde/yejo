const cosmeticsUrl = "http://localhost:3000/cosmeticos"
const usersUrl = "http://localhost:3000/usuarios"
const ordersUrl = "http://localhost:3000/pedidos"

/*Funcion auxiliar para ahorrar codigo a la hora de realizar una peticion*/
const request = (method, url, responsetype, body) =>  new Promise((resolve, reject) => {

    const result = new XMLHttpRequest()
    result.open(method, url)
    result.responseType = responsetype

    if (method === "GET" || method === "DELETE") {
        result.send()
    }

    if (method === "POST" || method === "PUT" || method === "PATCH") {
        result.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        result.send(JSON.stringify(body))
    }

    result.addEventListener("load", () => {
        resolve(result.response)
    })

    result.addEventListener("error", () => {
        reject(result.response)
    })
})


/*Peticiones*/ 
const loadAllProducts = () => request("GET", cosmeticsUrl, "json")
const saveCart = (cart) =>  request("POST", ordersUrl, "json", cart)
const registerUser = (user) =>  request("POST", usersUrl, "json", user)
const getCarrito = (id) => request("GET", ordersUrl + "?cartid=" + id, "json")
const getOrdersByUser = (userid) => request("GET", ordersUrl + "?userId=" + userid, "json")
const updatePedido = (id,cart) => request("PATCH", ordersUrl + "/" + id, "json", cart)
const findUser = (user, password) => request("GET", usersUrl + "?nickname=" + user, "json")
const deletePedido = (id) => request("DELETE", ordersUrl + "/" + id, "json")


/*Operaciones*/

const almacenarCarritoPendiente = () =>{

    if(localStorage.getItem("currentuser") != "" && localStorage.getItem("currentuser") != null){
        
        const currentUser = JSON.parse(localStorage.getItem("currentuser"))
        cart.userId = currentUser.id
        cart.date = (new Date()).fecha()
        cart.totalprice = cart.total
        cart.status = "pendiente"

        getCarrito(cart.cartid).then(response =>{
            console.log(response)
            if(response.length <= 0){
                saveCart({...cart})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }else{
                updatePedido(response[0].id,cart)
                .then(res => console.log(res))
            }
        })

        modal.close()
        modalPagar()

    }else{
        alert("Debes registrarte primero")
        modal.close()
        loginRegister()
    }

}

const almacenarCarritoPagado = () =>{

    getCarrito(cart.cartid)
    .then(res =>{
        cart.status = "pagado"
        cart.totalprice = cart.total
        updatePedido(res[0].id,cart)
        .then(res => {
            console.log(res)
            cart = new Cart() //Vaciar el carrito
        })
        .catch(err => console.log(err))
    })

}


