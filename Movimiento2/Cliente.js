export default class Clientes {
    constructor(nombre, apellido, nCuenta, opcion, cantidad) {
        this._nombre = nombre.toUpperCase();
        this._apellido = apellido;
        this._nCuenta = nCuenta;
        this._opcion = opcion;
        this._cantidad = cantidad;
        this._balance = 0;
    }

    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get nCuenta(){
        return this._nCuenta;
    }
    get cantidad(){
        return this._cantidad;
    }

    get opcion(){
        return this._opcion;
    }

    getDeposito() {
        this._balance = Number(this._balance) + Number(this._cantidad);
        return this._balance;
    }
    
    getRetiro() {
        this._balance = Number(this._balance) - Number(this._cantidad);
        return this._balance;
    }

    getDinero() {
        return this._balance;
    }
}