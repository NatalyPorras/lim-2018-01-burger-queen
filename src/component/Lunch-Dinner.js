import React, { Component } from 'react';
import data from '../data/data';
import Button from './Button';
class LunchDinner extends Component{

    showDataH(){
        return(<div>
            <h5>Hamburguesa</h5>
            <div className="pl-5">
                {
                    data.map(aliment =>{
                        return aliment.Lunchdinner.hamburguesas.map((hamburguesas,i)=>{
                        return (
                                <Button key={`h${i}`} name={hamburguesas.name} price={hamburguesas.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                        )              
                    }) 
                    })
                }
            </div>
        </div>)

    }
    showDataA(){
        return(<div>
            <h5>Acompañamientos</h5>
            <div className="pl-5">
                {
                    data.map(aliment =>{
                        return aliment.Lunchdinner.acompañamientos.map((acompañamiento,i)=>{
                            return (
                                <Button key={`a${i}`} name={acompañamiento.name} price={acompañamiento.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                        )              
                            })
                    })
                }
            </div>
        </div>)
        
    }
    showDataB(){
        return(<div>
                    <h5>Bebidas</h5>
            <div className="pl-5">
                {data.map(aliment =>{
                    return aliment.Lunchdinner.bebidas.map((bebidas,i)=>{
                            return (
                                <Button key={`h${i}`} name={bebidas.name} price={bebidas.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                            )              
                        })                                                             
                    })
                }
            </div>
        </div>)
    }

    render(){

        return (
            <div className="showFoods pt-1 pb-1 pl-3 pr-1">
                {this.showDataH()}
                <hr />
                {this.showDataA()}
                <hr />
                {this.showDataB()}
            </div>
        )   
    }
}
export default LunchDinner