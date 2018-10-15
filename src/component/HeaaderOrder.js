import React from 'react';

const Header = (props) =>{
    return (
        <section className="section3">
        <div className="container">
            <div className="row">
                <div className="col-3 text-center">
                    <h4>BurguerQueen</h4>
                </div>
                <div className="col-6 text-center">
                    <p>
                        Cliente:{props.name}
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
    )
}
export default Header