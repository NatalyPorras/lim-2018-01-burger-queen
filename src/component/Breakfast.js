import React, {Component} from 'react';
import data from '../data/data'
import './Breakfast.css'
class Breakfast extends Component{

    showData(){
        return (
            <div className="card-columns">
                { data.map(aliment =>{
                    return aliment.Breakfast.map((breakfast,i)=>{                             
                        return (
                                <div  key={i} className="card text-center">
                                    <div className="card-body">
                                    <h5 className="card-title">{breakfast.name}</h5>
                                    <p className="card-text">S/ {breakfast.price}</p>
                                    </div>
                                </div>
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