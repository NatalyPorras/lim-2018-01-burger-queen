import React, {Component} from 'react';
import data from '../data/data';
import Button from './Button'
import './Breakfast.css'
class Breakfast extends Component{

    showData(){
        return (
            <div className="card-columns">
                { data.map(aliment =>{
                    return aliment.Breakfast.map((breakfast,i)=>{                             
                        return (
                            <Button key={`break${i}`} name={breakfast.name} price={breakfast.price} addHandleTakeOrder={this.props.addHandleTakeOrder}/>
                        )
                        })
                    })
                }
            </div>
        )
    }
  
    render(){

        return (
            <div>
                {this.showData()}
            </div>
        )   
    }
}

export default Breakfast