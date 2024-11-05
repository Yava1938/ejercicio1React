import React, { Component } from "react";
import './formulario.css'
import BtnComponent from '../btnGeneral/btnGeneral'

class FormularioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            mensaje: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const nombre = event.target[0].value;
        const email = event.target[1].value;
        const mensaje = event.target[2].value;
        this.setState({ nombre: nombre, email: email, mensaje: mensaje })
        console.log("Información enviada:", { nombre, email, mensaje });
        alert(`nombre: ${nombre}, \nemail: ${email}, \nmensaje: ${mensaje}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Registro</h2>
                <label >Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />
                <label >Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />
                <label >Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                <BtnComponent text="Enviar" />
            </form>
        )
    }
}

export default FormularioComponent