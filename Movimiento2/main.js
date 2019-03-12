import Movimiento from "./movimiento.js"
import Clientes from "./Cliente.js"

class Main{
    constructor(){
    this._list = new Movimiento(document.querySelector("#list"), document.querySelector('#info'));

    document.querySelector("#btn1").addEventListener("click", () => {
        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellido").value;
        let nCuenta = document.querySelector("#nCuenta").value;
        let opcion = document.querySelector("#select").value;
        let cantidad = document.querySelector("#cantidad").value;

        let cliente = new Clientes(nombre, apellido, nCuenta, opcion, cantidad);
        this._list.addMove(cliente);
    });

}
}

let m = new Main();