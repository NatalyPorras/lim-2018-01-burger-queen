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
            total:0,
            showHide:false,
            showValueInput:false,
            name:''
        }
    }
    addHandleTakeOrder = (name,price) =>{
        let {order} = this.state;
        order.push({
                name:name,
                price:price
            })
        this.setState({order})
    }

    calculateOrder=()=> {
        let {order} = this.state;
        let total = 0;
        if(order !== []){
            order.map((order) =>{
                total += order.price
                return total
            })
            return(
                <span>{total}</span>)
        }

    }

    handleGetPosicionDelete=(e)=>{
        const {order} = this.state;
        const posicion=e.target.id;
        // delete order[posicion]
        order.splice(posicion,1)
        
        this.setState({order})
    }

    handleInputName =(name) => {
        this.setState({name})
    }

    handleSendData=()=>{
        const {order,name} = this.state
        if(name !== ''){
            window.firebase.firestore().collection('pedido').add({
                fullname: name,
                order:this.state.order,
                Total:this.state.total,
              });  
              order.splice(0,this.state.order.length)   
              this.setState({
                order:order,
                showValueInput:true
                })
      
        }else{
            alert('Ingresa nombre del cliente')
        }

    }

    render(){
        return (    
            <div className="main"> 
                <HeaderOrder handleInputName={this.handleInputName} showValueInput={this.state.showValueInput} />
                <div className="section4">
                    <div className="container takeOrder">
                        <div className="row titleOrder text-center">
                            <div className="col-12">
                                <p> Tomar Pedido </p>
                            </div>
                        </div>
                        <div className="row filaContent">
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
                            <div className="col-5 orderListContent">
                                <div className="orderList">
                                    {
                                        this.state.order.map((order ,i) =>{
                                        return (
                                            <div key={i} className="listFood">
                                                <div className="food name pl-2"> {order.name} </div>
                                                <div className="food price text-center"> {order.price} </div>
                                                <div className="food icono text-center"><i className="fas fa-trash-alt" id={i} onClick={this.handleGetPosicionDelete}></i></div>
                                            </div>
                                        )                                   
                                        })
                                    }
                                                          
                                   <div className="priceTotal ml-2 mr-1 mt-2 mb-1"> 
                                        <p>Total: S/ {this.calculateOrder()}</p>
                                        <button className = {(this.state.order.length > 0)? "hiden1 btn btn-outline-light mb-2 ml-3" : "hiden"} onClick={this.handleSendData}>Enviar a Cocina</button>
                                   </div>
                                </div>  
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TakeOrderDay
