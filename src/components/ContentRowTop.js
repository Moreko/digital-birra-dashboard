import React, {Component} from 'react';
import SmallCard from './SmallCard';


let productInDataBase = {
    color:   "success",
    titulo: "Productos en DB",
    valor: 550,
    icono: "fa-clipboard-list",
    moneda: false 
}

let amount ={
    color:   "success",
    titulo: "Valor total",
    valor: 546,
    icono: "fa-dollar-sign",
    moneda: true
}

let user = {
    color:   "success",
    titulo: "Cantidad de usuarios",
    valor: 38,
    icono: "fa-user-check",
    moneda: false
}

let cardProps = [productInDataBase,amount,user];


class ContentRowTop extends Component{

    constructor(props){
        super(props)
        this.state={
            productos:[]
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
    }

    render() { 
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
    }
}
export default ContentRowTop;