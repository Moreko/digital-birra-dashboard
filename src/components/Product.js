import React, {Component} from 'react';
import ProductList from "./ProductList";
import Swal from "sweetalert2"

class Product extends Component{

    constructor(props){
        super(props)
        this.state={
            productos:[]
        }
    }

    // Creo método
    mensaje(){
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )}

    componentDidMount(){
        fetch("/api/birras")
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(productos => {
            this.setState({productos:productos.data})
        }) 
        .catch(error => console.log(error))
    }

    render() {
    return (
        <React.Fragment>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 onClick={this.mensaje} className="h3 mb-2 text-gray-800">Productos en la base de datos</h1>
        
        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Precio por unidad</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.productos.map((producto, i) => {
                                    return <ProductList {...producto} key={i} />
                                })
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    
    </React.Fragment>
    )}
}
export default Product;
