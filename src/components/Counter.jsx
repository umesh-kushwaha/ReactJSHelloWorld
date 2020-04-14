import React, { Component, Fragment } from 'react';


class Counter extends Component{

    render(){

        console.log("props", this.props);
        return (
            <div>
                {this.props.children}
                 <span  className="badge badge-primary m-2">{this.formateCount()}</span>
                 <button onClick = {()=>this.props.onIncrement(this.props.counter)} className = "btn btn-secondary btn-sm m-2">Increment</button>
                 <button onClick = {()=>this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">delete</button>

            </div>
        );
    }

  

    formateCount(){
        const {value} = this.props.counter;

        return value ===0 ? <h3>Zero</h3> : value;
    }


}

export default Counter;