import React, {Component} from "react"
import {Bar, Line, Pie} from 'react-chartjs-2'


class Graficos extends Component{

    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'cargando birras...',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
            }
        }
    }

    componentDidMount(){
        fetch("/api/birras")
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(birras => {
            let lasBirras =[]
            let losStocks = []
            let loscolores = []
            let paraElegir = ['#6B6E70', '#86C232', '#222629', '#61892F']

            birras.data.forEach(element => {
                lasBirras.push(element.nombre)
                losStocks.push(element.stock)
                loscolores.push(paraElegir[element.estilo_id-1])
            });

            this.setState(prevState => ({
                    chartData: {                  
                        ...prevState.chartData,
                        labels: lasBirras,  
                        datasets : [{
                            label: 'Stock de Digital Birra',
                            data: losStocks,
                            backgroundColor: loscolores,
                            borderColor: loscolores,
                            borderWidth: 1
                        }]  
                    }}))                

       
        }) 
        .catch(error => console.log(error))
    }


    render(){
    return(

        <React.Fragment>
       
            <div className="chart">
               <Bar
                    data={this.state.chartData}
                    width={1000}
                    height={50}
                    options={{
                       maintainAspectRatio:false
                    }} 
               />
            </div>

        </React.Fragment>
    )}
}

export default Graficos;