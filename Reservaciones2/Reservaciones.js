export default class Reservacion {
    constructor(tableReservacion, tableInfo) {
        this._tableReservacion = tableReservacion;
        this._tableInfo = tableInfo;

        this._numReservaciones = 0;
    }

    addReservacion(clientes) {
        let row = this._tableReservacion.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellTelefono = row.insertCell(1);
        let cellEmail = row.insertCell(2);
        let cellNcuarto = row.insertCell(3);
        let cellLlegada = row.insertCell(4);

        cellName.innertHTML = clientes.name;
        cellTelefono.innertHTML = clientes.telefono;
        cellEmail.innertHTML = clientes.email;
        cellNcuarto.innertHTML = clientes.Ncuarto;
        cellLlegada.innertHTML = clientes.getLlegadaAsString();

        this._numReservaciones++;

        this._totalRes = this._totalRes + clientes.Ncuarto;

        
        this._tableInfo.rows[1].cells[1].innertHTML = this._numReservaciones;

    }
}