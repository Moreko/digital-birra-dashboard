import React, {Component} from "react"
import {Link} from 'react-router-dom'

class LastProductInDb extends Component{

    constructor(props){
        super(props)
        this.state={
            producto: {},
            imagen: ''
        }
    }

    componentDidMount(){
        fetch("/api/birras")
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(productos => {
            this.setState({producto:productos.data[productos.meta.total-1]})
            this.setState({imagen:'http://localhost:5000/img/products/'+ this.state.producto.imagen})
        }) 
        .catch(error => console.log(error))
    }
    


    render(){
    return(

        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-2 font-weight-bold text-primary">Último producto en base de datos</h4>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15+'rem'}} src={this.state.imagen} alt="lastdb"/>
                    </div>
                    <p>{this.state.producto.descripcion}</p>
                    <Link rel="nofollow" to="detalle">View product detail</Link>
                </div>
            </div>
            </div>
        </React.Fragment>
    )}
}

export default LastProductInDb;