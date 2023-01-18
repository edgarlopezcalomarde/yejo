const generateID = () => (Date.now() / Math.random() * 10).toString(30).split(".").join("") + Math.random().toString(30).slice(2)

Date.prototype.fecha = function () {
    let dia = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    let mes = this.getMonth() + 1 < 10 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1);
    return dia + "/" + mes + "/" + this.getFullYear()
}
Date.prototype.fechaSinDias = function () {
    let mes = this.getMonth() + 1 < 10 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1);
    return mes + "/" + this.getFullYear()
}


const isEmpty = (data) => {
    if (Object.values(data).some(v => v === "")) {
        field = Object.keys(data).findIndex(it => data[it] == "")

        throw {
            msg: `El campo ${Object.keys(data)[field]} no puede estar vacio`,
            field: field
        }
    }
    return data
}


const passMatches = (pass1, pass2) => {
    if (pass1 !== pass2) throw { msg: `El campo ${Object.keys(data)[field]} no puede estar vacio` }
}

window.addEventListener("scroll", rular);


function rular() {

    let banner = document.querySelector("#banner").getBoundingClientRect().top;
    if (banner < 0) {
        document.querySelector(".c-menu").classList.add("g--padding-vertical-0")
        document.querySelector(".c-category").classList.add("g--padding-vertical-1")        
    } else {
        document.querySelector(".c-menu").classList.remove("g--padding-vertical-0")
        document.querySelector(".c-category").classList.remove("g--padding-vertical-1")
    }
}




