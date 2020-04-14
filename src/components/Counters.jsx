import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class Counters extends Component{

    state = {
        counters:[
            {id:1,value:0},
            {id:2,value:5},
            {id:3,value:0},
            {id:4,value:2}
        ]
    }

    handleDelete = (counterId)=>{
        console.log("event handler delete", counterId);

        const counters = this.state.counters.filter(c=> c.id !== counterId);

        this.setState({counters:counters});
    }


    handleReset = ()=>{
        const counters = this.state.counters.map(c=>{
            c.value = 0;
            return c;
        })

        this.setState({counters});
    }

    handleIncrement = (counter)=>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }
    render(){
        return (
            <div>
                <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">Reset </button>
                                    
                {this.state.counters.map(counter => (
               // <Counter key = {counter.id} id = {counter.id} value={counter.value} onDelete={this.handleDelete}>
                 //   <h2>Counter #{counter.id}</h2>
                //</Counter>
                
                <Counter key = {counter.id} counter={counter} 
                onDelete={this.handleDelete}
                onIncrement = {this.handleIncrement}>
                    <h2>Counter #{counter.id}</h2>
                </Counter>
                ))}

              
            </div>
        );
    }


    getCounter(){
        return this.state.counters[0];
    }
}

export default Counters;