import React, {Component} from "react"
import Footer from './Footer'

class detalleLastP extends Component{

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
            <div className="container-fluid bg-dark">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Último producto en base de datos</h6>
                </div>





            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <div className="card-body">
                                        <div className="text-center">
                                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "100%"}} src={this.state.imagen} alt="lastdb"/>
                                        </div>
                                    </div>
                    </div>
                <div className="col-sm">
                <table className="table table-dark"style={{"margin-top": "20%"}} >
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Descripcion</td>
                        <td>{this.state.producto.descripcion}</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Tamaño</td>
                        <td>{`${this.state.producto.tamano}ml`}</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Precio</td>
                        <td>{`$${this.state.producto.precio}`}</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>Stock</td>
                        <td>{`${this.state.producto.stock}`}</td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>IBU</td>
                        <td>{`${this.state.producto.ibu}`}</td>
                        </tr>
                        <tr>
                        <th scope="row">6</th>
                        <td>Alcohol</td>
                        <td>{`${this.state.producto.alcohol}%`}</td>
                        </tr>
                    </tbody>
                </table>
                    </div>
                    
            </div>
            </div>
            <Footer/>
        </div>

        </React.Fragment>
    )}
}

export default detalleLastP;