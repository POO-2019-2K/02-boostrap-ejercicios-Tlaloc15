import Reservacion from "./Reservaciones.js";
import Clientes from "./Clientes.js";

class Main {
    constructor() {
        this._reservacion = new Reservacion(document.querySelector('#reservaciones'),
        document.querySelector('#info'));

        document.querySelector('#btnAdd').addEventListener('click', () => {
            let name = document.querySelector('#name').value;
            let telefono = document.querySelector('#telefono').value;
            let email = document.querySelector('#email').value;
            let Ncuarto = document.querySelector('#Ncuartos').value;
            let sLlegada = document.querySelector('#llegada').value;
            sLlegada = sLlegada.split('-');

            
            let llegada = new Date(sLlegada[0], sLlegada[1], sLlegada[2]);
            
            let clientes = new Clientes(name, telefono, email, Ncuarto, llegada);
            
            this._reservacion.addReservacion(clientes);
        })
    }
}
let m = new Main();