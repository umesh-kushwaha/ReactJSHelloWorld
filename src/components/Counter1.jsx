import React, { Component, Fragment } from 'react';


class Counter1 extends Component{


    state = {
        value:this.props.counter.value
    }


    render(){

        console.log("props", this.props);
        return (
            <div>
                {this.props.children}
                 <span  className="badge badge-primary m-2">{this.formateCount()}</span>
                 <button onClick = {this.handleIncrement} className = "btn btn-secondary btn-sm m-2">Increment</button>
                 <button onClick = {()=>this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">delete</button>

            </div>
        );
    }

   
    handleIncrement = ()=>{
        this.setState({value:this.state.value+1});
    }

    formateCount(){
        const {value} = this.state;

        return value ===0 ? <h3>Zero</h3> : value;
    }


}

export default Counter1;