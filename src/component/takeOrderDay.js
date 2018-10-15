import React, { Component } from 'react';
import Breakfast from './Breakfast';
import LunchDinner from './Lunch-Dinner';
import HeaderOrder from './HeaaderOrder';
import './TakeOrderDay.css'
class TakeOrderDay extends Component{
    constructor(){
        super()
        this.state={
            order:[],
            total:0
        }
    }
    addHandleTakeOrder = (name,price) =>{
        let {order} = this.state;
        order.push({
                name:name,
                price:price
            })
        this.setState({order})
        let result = order.reduce((tot, arr) => { 
        // return the sum with previous value
         return tot + arr.price;
        },0);
        this.setState({
            total: result
          });
    }

    calculateOrder = () => {
        let {order,total} = this.state;
        let res = order.map(order =>{
               return total += order.price
        })
        this.setState({total:res})
    }
    render(){
        return (    
            <div className="main"> 
                <HeaderOrder name={this.props.name}/>
                <div className="section4">
                    <div className="container">
                        <div className="row titleOrder text-center">
                            <div className="col-12">
                                <p>
                                      Tomar Pedido
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7 orders">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Desayuno</a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Almuerzo y Cena</a>                                    
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Breakfast addHandleTakeOrder={this.addHandleTakeOrder} /></div>
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><LunchDinner addHandleTakeOrder={this.addHandleTakeOrder}/></div>
                                </div>
                            </div>
                            <div className="col-5">
                            {
                                this.state.order.map((order ,i) =>{
                                return (
                                    <div key={i}>
                                        <span> {order.name} </span>
                                        <span> {order.price} </span>
                                    </div>
                                )                                   
                                })
                            }
                            
                            <h5>Total :{this.state.total}</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TakeOrderDay