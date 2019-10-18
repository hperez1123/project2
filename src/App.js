import React from 'react';
import './App.css';
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      nextPage: ""
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://api.open5e.com/monsters/')
    let monsters = response.data.results
    let nextPage = response.data.next
    console.log(monsters)
    this.setState({
      monsters,
      nextPage
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <>
            {monster.img_main && (
              <>
              <h3>{monster.name}</h3>
                <img src={monster.img_main} />
                </>
            )}
          </>
        ))}
      </div>
    );
  }
}

export default App;
