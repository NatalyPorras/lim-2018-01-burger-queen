import React, { Component } from 'react';
import data from '../data/data'
import './Breakfast.css'
class LunchDinner extends Component{

    showDataH(){
        return (
            <div className="card-columns">
                 { data.map(aliment =>{
                    return Object.values(aliment.Lunchdinner).map((lunchDinner,i)=>{                                                     
                        //  return lunchDinner.map((hamburguesas,i)=>{
                         if(i===0){
                             return lunchDinner.map((hamburguesas,i)=>{
                                return (
                                    <div  key={`h${i}`} className="card text-center">
                                        <div className="card-body">
                                        <h5 className="card-title">{hamburguesas.name}</h5>
                                        <p className="card-text">{hamburguesas.price}</p>
                                        </div>
                                    </div>
                            )              
                             })
                                       
                    }
                        
                        })
                    })
                } 
            </div>
        )
    }
    showDataA(){
        return (
            <div className="card-columns">
                 { data.map(aliment =>{
                    return Object.values(aliment.Lunchdinner).map((lunchDinner,i)=>{                                                     
                        //  return lunchDinner.map((hamburguesas,i)=>{
                         if(i===1){
                             return lunchDinner.map((acompañamiento,i)=>{
                                return (
                                    <div  key={`a${i}`} className="card text-center">
                                        <div className="card-body">
                                        <h5 className="card-title">{acompañamiento.name}</h5>
                                        <p className="card-text">{acompañamiento.price}</p>
                                        </div>
                                    </div>
                            )              
                             })
                                       
                        }
                        })
                    })
                } 
            </div>
        )
    }
    showDataB(){
        return (
            <div className="card-columns">
                 { data.map(aliment =>{
                    return Object.values(aliment.Lunchdinner).map((lunchDinner,i)=>{                                                     
                        //  return lunchDinner.map((hamburguesas,i)=>{
                         if(i===2){
                             return lunchDinner.map((bebidas,i)=>{
                                return (
                                    <div  key={`b${i}`} className="card text-center">
                                        <div className="card-body">
                                        <h5 className="card-title">{bebidas.name}</h5>
                                        <p className="card-text">{bebidas.price}</p>
                                        </div>
                                    </div>
                            )              
                             })                                       
                        }                        
                    })
                    })
                } 
            </div>
        )
    }

    render(){

        return (
            <div>
                {this.showDataH()}
                {this.showDataA()}
                {this.showDataB()}
            </div>
        )   
    }
}
export default LunchDinner