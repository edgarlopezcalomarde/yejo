function dialogo() {
    let dialogo = document.getElementById("dialog");
    dialogo.style.backgroundColor = "#ffb48a";
    dialogo.innerHTML =
        `
		<div class="l-flex l-flex--direction-column l-flex--align-items-center">
        <img src="./assets/img/cruz.png" alt="imagen zapato" id="cerrar" class="c-img__cerrar g--padding-bottom-7">
        <img src="./assets/img/zapato.jpg" alt="cerrar" id="zapato" class="c-img__articulo">
			<form id="formu" class="c-formulario">
			<h2 id="titulo" class="c-formulario__titulo">LOGIN</h2>
			<label for="email" class="c-formulario__texto">Correo electrónico</label>
            <input type="text" name="correo" class="c-input" id="correo" placeholder="pepe@gmail.com">
            <label for="password" class="c-formulario__texto">Contraseña</label>
            <input type="password" name="password" class="c-input" id="password" placeholder="Tú contraseña">
        </form>
			<button id="login" class="c-button c-button--primaria-normal">Login</button>
		</div>`;
    document.getElementById("cerrar").onclick = () => { dialogo.close() }
    document.getElementById("login").onclick = () => { dialogo.close() }
    dialogo.showModal();
}
function dialogo2() {
    let fecha = new Date();
    let dialogo = document.getElementById("dialog");
    dialogo.style.backgroundColor = "rgb(210, 253, 255)";
    dialogo.innerHTML =
        `
        <div class="l-flex l-flex--direction-column l-flex--align-items-center">
        <img src="./assets/img/cruz.png" alt="imagen zapato" id="cerrar" class="c-img__cerrar g--padding-bottom-7">
        <img src="./assets/img/tarjetas.png" alt="tarjetas" id="cerrar" class="c-img__tarjetas g--padding-bottom-3">
        <form id="formu" class="c-formulario l-flex l-flex--direction-column">
            <div class="l-flex l-flex--direction-row">
                <div class="l-flex l-flex--direction-column">
                    <label for="numero_tarjeta" class="c-formulario__texto">Número tarjeta</label>
                    <input type="text" name="numeroTarjeta" id="numeroTarjeta" class="c-input" size="20"
                        placeholder="7419 9412 5910 9218">
                </div>
                <div class="l-flex l-flex--direction-column g--padding-left-5">
                    <label for="cvc" class="c-formulario__texto">CVC</label>
                    <input type="text" name="cvc" id="cvc" class="c-input" size="2" placeholder="253">
                </div>
            </div>
            <div class="l-flex l-flex--direction-column">
                <label for="titular" class="c-formulario__texto">Titular de la tarjeta</label>
                <input type="text" name="titular" id="titular" class="c-input" placeholder="Paolo Mondanguez">
            </div>
            <div class="l-flex l-flex--direction-column">

                <label for="caducidad" class="c-formulario__texto">Fecha caducidad</label>
                <div class="l-flex l-flex--direction-row">     
                        <select type="text" name="mes" id="mes" class="c-input " >
                        <option value="enero">Enero</option>
                        <option value="febrero" selected>Febrero</option>
                        <option value="marzo">Marzo</option>
                        <option value="abril">Abril</option>
                        <option value="mayo">Mayo</option>
                        <option value="junio">Junio</option>
                        <option value="julio">Julio</option>
                        <option value="agosto">Agosto</option>
                        <option value="septiembre">Septiembre</option>
                        <option value="octubre">Octubre</option>
                        <option value="noviembre">Noviembre</option>
                        <option value="diciembre">Diciembre</option>	
                    </select>
                    <input type="number" name="anyo" id="anyo" class="c-input g--margin-horizontal-auto" size="4" value="${fecha.getFullYear()}">
                </div>
            </div>
        </form>
        <button id="pagar" class="c-boton c-button--primaria-normal g--margin-top-4">TERMINAR PAGO</button>
    </div>`;
    document.getElementById("cerrar").onclick = () => { dialogo.close() }
    document.getElementById("pagar").onclick = () => { dialogo.close() }
    dialogo.showModal();
}
window.onload = () => {
    document.getElementById("boton").addEventListener("click", dialogo);
    document.getElementById("boton2").addEventListener("click", dialogo2);
}