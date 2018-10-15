import React, {Component} from 'react';
import TakeOderDay from '../component/takeOrderDay'
import './Client.css'
class Client extends Component{
    // constructor(){
    //     super()
    //     // this.state={
    //     //     input:"",
    //     //     showContent:false
    //     // }
    // }

    // handleInput = (e)=>{
    //     this.setState({
    //         input:e.target.value
    //     })
    // }

    // handleOrder(){
    //     if(this.state.input !== ''){
    //         this.setState({
    //             showContent:true
    //         })
    //     }else{
    //         alert('Ingresa un nombre')
    //     }

    // }
    render(){
        // if(this.state.showContent){
            return (<TakeOderDay />)
        // }else{
        //     return (
        //         <div>
        //             <section className="section1">
        //                 <header className="container">
        //                     <h3>Datos del Cliente</h3>
        //                 </header>
        //             </section>
        //             <div className="section2 pt-5">
        //                 <div className="container">
        //                     <div className="row  pt-2 pb-3">
        //                         <div className="col-12 pt-2 pb-2 pl-5 text-left">
        //                             <h5>Ingresa nombre del cliente:</h5> 
        //                         </div>
        //                         <div className="col-12 pt-3 mb-3 text-right">
        //                             <input className="form-control" type="text" placeholder="Nombre del Cliente" onChange={this.handleInput.bind(this)} value={this.state.inputText}/>
        //                             <button type="button" className="btn btn-outline-info mt-4 mb-2 mr-3" onClick={this.handleOrder.bind(this)}>Ordenar</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }

    }
}

export default Client; 