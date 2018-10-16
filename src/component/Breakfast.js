import React, {Component} from 'react';
import data from '../data/data';
import Button from './Button'
import './Breakfast.css'
class Breakfast extends Component{
    showDataCafe(){
        return (
            <div className="typeCafe">
                <h5>Café</h5>
                <div className="pl-5">
                    { data.map(aliment =>{
                        return aliment.Breakfast.map((breakfast,i)=>{  
                            console.log(breakfast.name);
 
                            if(breakfast.name.substring(4,-1) === 'Café'){
                                
                                return (
                                
                                    <Button key={`break${i}`} name={breakfast.name} price={breakfast.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                                )
                            }                          
                           
                            })
                        })
                    }
                </div>
               
            </div>
        )
    }
    showDataJugo(){
        return (
            <div className="typeJugo">
                <h5>Jugos</h5>
                <div className="pl-5">
                    { data.map(aliment =>{
                        return aliment.Breakfast.map((breakfast,i)=>{  
                            console.log(breakfast.name);
 
                            if(breakfast.name.substring(4,-1) === 'Jugo'){
                                
                                return (
                                
                                    <Button key={`break${i}`} name={breakfast.name} price={breakfast.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                                )
                            }                          
                           
                            })
                        })
                    }
                </div>
               
            </div>
        )
    }
    showDataSandwich(){
        return (
            <div className="typeSandwich">
                <h5>Sandwiches</h5>
                <div className="pl-5">
                    { data.map(aliment =>{
                        return aliment.Breakfast.map((breakfast,i)=>{  
                            console.log(breakfast.name);
 
                            if(breakfast.name.substring(8,-1) === 'Sandwich'){
                                
                                return (
                                
                                    <Button key={`break${i}`} name={breakfast.name} price={breakfast.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                                )
                            }                          
                           
                            })
                        })
                    }
                </div>
               
            </div>
        )
    }

    render(){

        return (
            <div className="showFoods pt-3 pb-3 pl-3 pr-3">
                {this.showDataCafe()}
                <hr />
                {this.showDataJugo()}
                <hr />
                {this.showDataSandwich()}
            </div>
        )   
    }
}

export default Breakfast