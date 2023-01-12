const cosmeticsUrl = "http://localhost:3000/cosmeticos"
const usersUrl = "http://localhost:3000/usuarios"
const ordersUrl = "http://localhost:3000/pedidos"

/*Funcion auxiliar para ahorrar codigo a la hora de realizar una peticion*/
const request = (method, url, responsetype, body) =>{

    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = responsetype
    
    if(method === "GET" || method === "DELETE"){
        xhr.send()
    }

    if(method === "POST" || method === "UPDATE"){
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        xhr.send(JSON.stringify(body))
    }

    return xhr;
}

const loadAllProducts = () => new Promise((resolve, reject)=>{
    const result = request("GET",cosmeticsUrl, "json")
    result.addEventListener("load", ()=>{
        resolve(result.response)
    })

    result.addEventListener("error", ()=>{
        reject(result.response)
    })

})


const findUser = (user, password) => new Promise((resolve, reject) =>{
    let peticion = request("GET", usersUrl + "?nickname=" + user, "json");

    peticion.addEventListener("load", () => {
        resolve(peticion.response)
    })

    peticion.addEventListener("error", () => {
        reject(peticion.response)
    })

}) 

const checkUser = (data, user, password) => {
   
    if (data[0].nickname == user && data[0].pass == password) {
        localStorage.setItem("currentuser", 
            JSON.stringify({
                id: data[0].id,
                nick: data[0].nickname,
                mail: data[0].mail
            })
        )
    }
}

