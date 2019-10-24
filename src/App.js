import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import Profile from './components/Profile';
import { list, monsterProfile } from './services/api-helper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // initializing state
      monsters: [],
      profiles: '',
      profileID: '',
      stats: ''
    }
  }

  componentDidMount = async () => {
    let monsters = await list()
    this.setState({ // setting state
      monsters
    })
  }

  // function that takes an event, and sets that event in state, and those functions are handleSubmit and handleCLick
  handleChange = async (event) => {
    const profileID = event.target
    this.setState({
      profileID
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const stats = await monsterProfile(this.state.profileID)
    this.setState({
      stats
    })
    console.log('sdgsgf')
  }

  render() {

      return (
        <div className="App">
          <Header />
          {
            this.state.monsters &&
            <Main list={this.state.monsters} />
          }
          <Footer />
        </div>
      );
  

    }
  }


export default App;
