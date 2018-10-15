import React, { Component } from 'react';
import data from '../data/data';
import Button from './Button';
import './LunchDinner.css'
class LunchDinner extends Component{

    showDataH(){
        return data.map(aliment =>{
                             return aliment.Lunchdinner.hamburguesas.map((hamburguesas,i)=>{
                                return (
                                        <Button key={`h${i}`} name={hamburguesas.name} price={hamburguesas.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                                )              
                            }) 
                        })
    }
    showDataA(){
        return  data.map(aliment =>{
            return aliment.Lunchdinner.acompañamientos.map((acompañamiento,i)=>{
                return (
                    <Button key={`a${i}`} name={acompañamiento.name} price={acompañamiento.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
            )              
                })
        })
    }
    showDataB(){
        return data.map(aliment =>{
            return aliment.Lunchdinner.bebidas.map((bebidas,i)=>{
                    return (
                        <Button key={`h${i}`} name={bebidas.name} price={bebidas.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                )              
                    })                                                             
        })
    }

    render(){

        return (
            <div className="container">
                <div className="row fila1 mr-3 ml-3 mt-1 mb-1">
                    <div className="col">
                    {this.showDataH()}
                    </div>
                </div>
                <div className="row fila2 mr-3 ml-3 mt-1 mb-1">
                    <div className="col">
                    {this.showDataA()}
                    </div>
                </div>
                <div className="row fila3 mr-3 ml-3 mt-1 mb-1">
                    <div className="col">
                    {this.showDataB()}
                    </div>
                </div>
            </div>
        )   
    }
}
export default LunchDinner