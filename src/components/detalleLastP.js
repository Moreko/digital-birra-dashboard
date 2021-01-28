import React, {Component} from "react"

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
            <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Último producto en base de datos</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15+'rem'}} src={this.state.imagen} alt="lastdb"/>
                    </div>
                    <p>{this.state.producto.descripcion}</p>
                    <p>{this.state.producto.tamano}</p>
                    <p>{this.state.producto.precio}</p>
                </div>
            </div>
            </div>
        </React.Fragment>
    )}
}

export default detalleLastP;