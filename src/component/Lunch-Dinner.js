import React, { Component } from 'react';
import data from '../data/data'
import './Breakfast.css'
class LunchDinner extends Component{

    handleGetValues(e){
        console.log(e.target.txt);
        
    }
    showDataH(){
        return data.map(aliment =>{
            console.log(aliment.Lunchdinner);
                                //  return lunchDinner.map((hamburguesas,i)=>{
                             return aliment.Lunchdinner.hamburguesas.map((hamburguesas,i)=>{
                                return (
                                    <div  key={`h${i}`} className="card text-center" txt='holi' onClick={this.handleGetValues.bind(this)}>
                                        {hamburguesas.name} {hamburguesas.type}
                                        S/ {hamburguesas.price}
                                    </div>
                                )              
                            }) 
                    })
    }
    showDataA(){
        return  data.map(aliment =>{
            return aliment.Lunchdinner.acompañamientos.map((acompañamiento,i)=>{
                return (
                    <div  key={`a${i}`} className="card text-center">
                        <div className="card-body">
                        <h5 className="card-title">{acompañamiento.name}</h5>
                        <p className="card-text">S/ {acompañamiento.price}</p>
                        </div>
                    </div>
            )              
                })
        })
    }
    showDataB(){
        return data.map(aliment =>{
            return aliment.Lunchdinner.bebidas.map((bebidas,i)=>{
                    return (
                        <div  key={`b${i}`} className="card text-center">
                            <div className="card-body">
                            <h5 className="card-title">{bebidas.name} {bebidas.length}</h5>
                            <p className="card-text">S/ {bebidas.price}</p>
                            </div>
                        </div>
                )              
                    })                                                             
        })
    }

    render(){

        return (
            <div>
                <div>
                    <div className="card-columns">
                    {this.showDataH()}
                    </div>
                </div>
                <div>
                    <div className="card-columns">
                    {this.showDataA()}
                    </div>
                </div>
                <div>
                    <div className="card-columns">
                    {this.showDataB()}
                    </div>
                </div>
            </div>
        )   
    }
}
export default LunchDinner