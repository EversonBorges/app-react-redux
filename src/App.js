import './App.css'
import User from './User'
import foto from './familia.png'
import { Component } from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Everson",
      email: "borges@email.com"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  changeState() {
    this.setState({
      name: "Everson Borges"
    })
  }

  resetState(){
    this.setState({
      name: "Everson"
    })
  }

  changeInput(event){
    let target = event.target
    let index  = target.name
    this.setState({
      [index]:target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <form>
            <label>Nome
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.changeInput}
              ></input>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.changeInput}
              ></input>
            </label>
          </form>
          {this.state.name} - {this.state.email}
        </div>
        <div>
          <button onClick={this.changeState}>Alterar Nome</button>
          <button onClick={this.resetState}>Resetar Nome</button>
        </div>
        <div>
          <User foto={foto}></User>
        </div>
        <List/>
      </div>
    );
  }
}
export default App;
