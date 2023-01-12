const isEmpty = (data) =>{
    if(Object.values(data).some(v => v === "")){
        field = Object.keys(data).findIndex(it => data[it] == "")

        throw {
            msg: `El campo ${Object.keys(data)[field]} no puede estar vacio`,
            field: field
        }
    }
    return data
}


const passMatches = (pass1, pass2) =>{
    if(pass1 !== pass2) throw{ msg: `El campo ${Object.keys(data)[field]} no puede estar vacio`}

}

