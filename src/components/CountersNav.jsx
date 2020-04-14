import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class CountersNav extends Component{

    
    render(){
        //object destructuring
        const {onReset, onDelete, onIncrement, counters} = this.props;
        return (
            <div>
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset </button>
                                    
                {counters.map(counter => (
               // <Counter key = {counter.id} id = {counter.id} value={counter.value} onDelete={this.handleDelete}>
                 //   <h2>Counter #{counter.id}</h2>
                //</Counter>
                
                <Counter key = {counter.id} counter={counter} 
                onDelete={onDelete}
                onIncrement = {onIncrement}
                 >
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

export default CountersNav;