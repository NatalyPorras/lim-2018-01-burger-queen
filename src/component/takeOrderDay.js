import React, { Component } from 'react';
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
                                <p>
                                    Pedidos:
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

                </div>
            </div>
        )
    }
}

export default TakeOrderDay