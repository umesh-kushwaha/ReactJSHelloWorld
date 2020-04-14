import React, { Component, Fragment } from 'react';
import './App.css';
import Counters from './components/Counters';
import NavBar from './components/Navbar';
import CountersNav from './components/CountersNav';
class App extends Component {

  state = {
    counters:[
        {id:1,value:0},
        {id:2,value:5},
        {id:3,value:0},
        {id:4,value:2}
    ]
}


constructor(){
  super();
  console.log("Constructor is called ");
}

componentDidMount(){
  //make ajax call to get data from server
  console.log("componentDidMount is called ");

}

componentDidUpdate(){
  console.log("componentDidUpdate is called ");
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


  render() {

    console.log("render is called ");
    return (
      <Fragment>
      <NavBar totalCounter = {this.state.counters.filter(c=>c.value >0).length}></NavBar>
      <main className="container">
        <CountersNav counters = {this.state.counters} onReset = {this.handleReset}
                   onDelete = {this.handleDelete}
                   onIncrement = {this.handleIncrement} ></CountersNav>
      </main>
      
      </Fragment>

    );
  }
}

export default App;
