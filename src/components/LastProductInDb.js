import React, {Component} from "react"

//Aquí hago la importanción de la imagen: product_dummy.svg
// import product_dummy from '../assets/images/product_dummy.svg';

class LastProductInDb extends Component{

    constructor(props){
        super(props)
        this.state={
            producto: {}
        }
    }

    componentDidMount(){
        fetch("/api/birras")
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(productos => {
            this.setState({producto:productos.data[productos.meta.total-1]})
        }) 
        .catch(error => console.log(error))
    }
    


    render(){
    return(

        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Último producto en base de datos</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15+'rem'}} src={'products/'+ this.state.producto.imagen} alt="lastdb"/>
                    </div>
                    <p>{this.state.producto.descripcion}</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
            </div>
        </React.Fragment>
    )}
}

export default LastProductInDb;