import React, { Fragment } from "react";
import './dashboard.css'
import FormularioComponent from '../components/formulario/formulario.js'
import HeaderComponent from '../components/header/header.js'
import FooterComponent from "../components/footer/footer";

const Dashboard = () => {

    return (
        <Fragment>
            <HeaderComponent />
            <FormularioComponent />
            <FooterComponent />
        </Fragment>

    )
}

export default Dashboard