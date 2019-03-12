export default class Clientes {
    constructor(name, telefono, email, Ncuarto, llegada) {
        this._name = name.toUpperCase();
        this._telefono = telefono;
        this._email = email;
        this._Ncuarto = Ncuarto;
        this._llegada = llegada;
    }

    get name() {
        return this._name;
    }

    get telefono() {
        return this._telefono;
    }

    get email() {
        return this._email;
    }

    get Ncuarto() {
        return this._Ncuarto;
    }

    getLlegadaAsString() {
        let d = this._llegada.getDate() + '/' + this._llegada.getMonth() + '/' + this._llegada.getFullYear();

        return d;
    }

    get llegada() {
        return this._llegada;
    }

}