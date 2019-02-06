import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';
import TopBar from './components/TopBar';
import AddButton from './components/AddButton';
import Lists from './components/Lists';


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
        <TopBar/>
        <Input value = {this.state.input} onChange={this.onInputChange} />
        <Button clickMe={this.onButtonClick}>Add</Button>
        <List items={this.state.todo} />
        <Lists/>
        <AddButton/>

      </>
    );
  }
}

export default App;


