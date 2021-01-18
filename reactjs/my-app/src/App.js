import React from 'react';


export default class App extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  decrement = () => {
    this.setState({count: this.state.count - 1})
  }

  delete = () => {
    this.setState({count: 0})
  }
  
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.delete}>Delete</button>
      </div>
    );
  }
}
