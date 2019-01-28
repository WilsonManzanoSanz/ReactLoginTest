import React, {Component} from 'react';

class AboutPage extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <div className="center-card">
                <div className="card">
                    <h1>Bienvenido a la testapp</h1>
                    <h2>Prueba desarrollada por Wilson Manzano</h2>
                    <h3>Para conseguir entrar a la aplicación por favor ingresa con los siguientes credenciales:</h3>
                    <p>Usuario: test@test.com</p>
                    <p>Constraseña: 123456</p>
                </div>
            </div>);
    }
}

export default AboutPage;