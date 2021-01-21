import Category from './Category';
import React, {Component} from 'react';


class CategoryInDb extends Component{

    constructor(props){
        super(props)
        this.state={
            estilos:[]
        }
    }

    componentDidMount(){
        fetch("/api/birras/estilos")
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(estilos => {
            this.setState({estilos:estilos})
        }) 
        .catch(error => console.log(error))
    }


    render(){
    return(

        <React.Fragment>

            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Categorias actuales</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                           {
                               this.state.estilos.map((categoria, index) =>{
                                   return <Category {...categoria} key={index}/>
                               })
                           }
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
}
export default CategoryInDb;