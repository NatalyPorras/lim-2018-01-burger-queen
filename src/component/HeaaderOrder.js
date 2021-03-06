    import React from 'react';

const Header = ({handleInputName, name}) =>{
    let textInput = React.createRef();
    function getHandleInputName(){
        handleInputName(textInput.current.value)
    }

    return (
        <section className="section3">
        <div className="container">
            <div className="row">
                <div className="col-6 text-center">
                    <h4>BurguerQueen</h4>
                </div>
                <div className="col-6 text-center">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre del Cliente:</span>
                        </div>
                    <input type="text" ref={textInput} value={name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={getHandleInputName} />
                    </div>
                </div>
                <div className="col-3">
                    {/* <button>
                        Cancelar
                    </button> */}
                </div>
            </div>
        </div>
    </section>
    )
}
export default Header