const generateID = () => (Date.now() / Math.random() * 10).toString(30).split(".").join("") + Math.random().toString(30).slice(2)

Date.prototype.fecha = function () {
    let dia = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    let mes = this.getMonth() + 1 < 10 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1);
    return dia + "/" + mes + "/" + this.getFullYear()
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

// window.addEventListener("scroll", rular);


// function rular() {

//     let banner = document.querySelector("#banner").getBoundingClientRect().top;
//     if (banner > 0) {

//         Array.from(document.querySelectorAll("c-menu__item")).forEach(
//             e => {e.style.backgroundColor="black"}
//         )
//         Array.from(document.querySelectorAll(".c-category__item")).forEach(
//             e => e.style.transition = "ease-in-out 1s"
//         )

//     } else {
        // Array.from(document.querySelectorAll("c-menu__item")).forEach(
        //     e => e.style
        // )
        // Array.from(document.querySelectorAll(".c-category__item")).forEach(
        //     e => e.style
        // )
//     }
// }




