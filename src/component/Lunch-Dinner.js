import React, { Component } from 'react';
import data from '../data/data';
import Button from './Button';
import './LunchDinner.css'
class LunchDinner extends Component{

    showDataH(){
        return(<div className="">
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
        return(<div className="col">
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
        return(<div className="col">
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
            <div className="showFoods pt-3 pb-3 pl-3 pr-3">
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