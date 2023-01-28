const cosmeticsUrl = "http://127.0.0.1:8000/api/cosmeticos"
const categoriesUrl = "http://127.0.0.1:8000/api/categorias"
const ordersUrl = "http://127.0.0.1:8000/api/pedidos"
const registerUrl = "http://127.0.0.1:8000/api/register"
const loginUrl = "http://127.0.0.1:8000/api/login"



/*Funcion auxiliar para ahorrar codigo a la hora de realizar una peticion*/
const request = (method, url, responsetype, body) =>  new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    console.log(url)
    xhr.responseType = responsetype

    let currentUser = localStorage.getItem("currentuser")

    if(currentUser != ""){
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        xhr.setRequestHeader('Authorization', 'Bearer ' + JSON.parse(currentUser).token);
    }


    if (method === "GET" || method === "DELETE") {
        xhr.send()
    }

    if (method === "POST" || method === "PUT" || method === "PATCH") {
        
       
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        xhr.send(JSON.stringify(body))
    }

    xhr.addEventListener("load", () => {
        if (xhr.status < 400){
            resolve(xhr.response)
        }else{
            reject(xhr.response)
        }
    })

    xhr.addEventListener("error", () => {
        reject(xhr.response)
    })
})


/*Peticiones*/ 
const loadAllProducts = () => request("GET", cosmeticsUrl, "json")
const loadAllCategories = () => request("GET", categoriesUrl, "json")
const saveCart = (cart) =>  request("POST", ordersUrl, "json", cart)
const registerUser = (user) =>  request("POST", registerUrl, "json", user)
const logIn = (user) => request("POST", loginUrl , "json", user)
const getCarrito = (id) => request("GET", ordersUrl + "/cartid/" + id, "json")
const getOrdersByUser = (userid) => request("GET", ordersUrl + "/userid/" + userid, "json")
const deletePedido = (id) => request("DELETE", ordersUrl + "/" + id, "json")
const updatePedido = (id,cart) => request("PATCH", ordersUrl + "/" + id, "json", cart)


/*Operaciones*/
const almacenarCarritoPendiente = () =>{
  
    if(localStorage.getItem("currentuser") != "" && localStorage.getItem("currentuser") != null){
        
        const currentUser = JSON.parse(localStorage.getItem("currentuser"))
        cart.userId = currentUser.id
        cart.date = (new Date()).fecha()
        cart.totalprice = cart.total
        cart.status = "pendiente"


        getCarrito(cart.cartid).then(response =>{
     

            if(response.length <= 0){
                saveCart({...cart})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }else{
                
               

                updatePedido(response._id,cart).then(res=>{
                    console.log("Lo que importa")
                    console.log(res)
                })
            }
        })
        .catch(err =>{

            //Si no devuelve repuesta lo guarda


            saveCart({...cart})
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
        
        updatePedido(res._id,cart)
        .then(res => {
            console.log(res)
            cart = new Cart() //Vaciar el carrito
            counter.innerHTML = cart.items;
        })
        .catch(err => console.log(err))
    })

}


