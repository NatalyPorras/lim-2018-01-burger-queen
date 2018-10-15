import React, { Component } from 'react';
import Breakfast from './Breakfast';
import LunchDinner from './Lunch-Dinner';
import './TakeOrderDay.css'
class TakeOrderDay extends Component{
    render(){
        return (
            <div className="main">
                <section className="section3">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 text-center">
                                <h4>BurguerQueen</h4>
                            </div>
                            <div className="col-6 text-center">
                                <p>
                                    Cliente:{this.props.name}
                                </p>
                            </div>
                            <div className="col-3">
                                <button>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
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
                            <div className="col-6 orders">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Desayuno</a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Almuerzo y Cena</a>                                    
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Breakfast /></div>
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><LunchDinner /></div>
                                </div>
                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TakeOrderDay