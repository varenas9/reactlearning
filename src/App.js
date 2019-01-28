import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';

class App extends Component {
  state = {
    input:'',
    todo: []
  }

  onInputChange = (evt) => {
    this.setState({
      input: evt.target.value
    });
  }
  onButtonClick = () => {
    const myList = this.state.todo;
    myList.push(this.state.input)
    this.setState({
      todo: myList,
      input: ''
    });
  }
  render() {
    return (
      <>
        <Input value = {this.state.input} onChange={this.onInputChange} />
        <Button clickMe={this.onButtonClick}>Add</Button>
        <List items={this.state.todo} />
      </>
    );
  }
}

export default App;


