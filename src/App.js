import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import List from './components/List';
import Footer from './components/Footer';
import { list } from './services/api-helper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      profiles: ''
    }
  }

  componentDidMount = async () => {
    let monsters = await list()
    this.setState({
      monsters
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.monsters &&
          <Main list={this.state.monsters} />
        }
        <Footer />
      </div>
    );

  }
}

export default App;
