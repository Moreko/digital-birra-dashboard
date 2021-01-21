import React, {Component} from 'react';
import SmallCard from './SmallCard';


let productInDataBase = {
    color:   "success",
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
    color:   "success",
    titulo: "Cantidad de usuarios",
    valor: 0,
    icono: "fa-user-check",
    moneda: false
}

let cardProps = [productInDataBase,amount,user];


class ContentRowTop extends Component{

    constructor(props){
        super(props)
        this.state={
            productos:[],
            usuarios:0,
            total:0
        }
    }

    componentDidMount(){
        fetch("/api/birras")
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(productos => {
            this.setState({productos:productos.data})
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
            {/* {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto} valor={this.state.usuarios} key= {index}/>
                })
            }       */}
            <SmallCard  {...productInDataBase} valor={this.state.productos.length -1} key= {0}/>
            <SmallCard  {...amount} valor={0} key= {1}/>
            <SmallCard  {...user} valor={this.state.usuarios} key= {2}/>
        </div>
        </React.Fragment>
    )
    }
}
export default ContentRowTop;