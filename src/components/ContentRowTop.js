import React, {Component} from 'react';
import SmallCard from './SmallCard';


let productInDataBase = {
    color:   "primary",
    titulo: "Productos en DB",
    valor: 0,
    icono: "fa-clipboard-list",
    moneda: false 
}

let amount ={
    color:   "success",
    titulo: "Valor total",
    valor: 0,
    icono: "fa-dollar-sign",
    moneda: true
}

let user = {
    color:   "danger",
    titulo: "Cantidad de usuarios",
    valor: 0,
    icono: "fa-user-check",
    moneda: false
}


class ContentRowTop extends Component{

    constructor(props){
        super(props)
        this.state={
            productos:[],
            usuarios:[],
        }
    }

    componentDidMount(){
        fetch("/api/birras")
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(productos => {
            this.setState({productos:productos.meta})
        }) 
        .catch(error => console.log(error))

        fetch("/api/users")
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(usuarios => {
            this.setState({usuarios:usuarios.meta.total})
        }) 
        .catch(error => console.log(error))
    }

    render() { 
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            <SmallCard  {...productInDataBase} valor={this.state.productos.total} key= {0}/>
            <SmallCard  {...amount} valor={this.state.productos.valorTotal} key= {1}/>
            <SmallCard  {...user} valor={this.state.usuarios} key= {2}/>
        </div>
        </React.Fragment>
    )
    }
}
export default ContentRowTop;