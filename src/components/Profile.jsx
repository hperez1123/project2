import React from 'react'
import { monsterProfile } from '../services/api-helper';
import ImagesProfile from './ImagesProfile';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: null
    }
  }

  async componentDidMount() {
    const response = await monsterProfile(this.props.name) //this is the props that i've passed from the handleSubmit and handleClick function that I created in app.js
    const monster = response.results[0]
    console.log(monster)
    this.setState({
      monster: monster
    })
  }

  render() {
    if (this.state.monster) {
      const monster = this.state.monster
      return (
        <div className="monster">
          <ImagesProfile monsterProfile={this.state.monster.type} />
          <div className="texty">
            <h1 className="name">{monster.name}</h1>
            <h2>Size: {monster.size}</h2>
            <h3>Type: {monster.type}</h3>
            <p>Alignment: {monster.alignment}</p>
            <p>Armor class: {monster.armor_class}</p>
            <p>Hit Points: {monster.hit_points}</p>
            <p>Walk Speed: {monster.speed.walk}</p>
            <p>Swim Speed: {monster.speed.swim}</p>
            <p>Strength: {monster.strength}</p>
            <p>Dexterity: {monster.dexterity}</p>
            <p>Constitution: {monster.constitution}</p>
            <p>Intelligence: {monster.intelligence}</p>
            <p>Wisdom: {monster.wisdom}</p>
            <p>Charisma: {monster.charisma}</p>
            <p>Languages: {monster.languages}</p>
            <p>Challenge Rating: {monster.challenge_rating}</p>

          </div>
        </div>
      )
    } else {
      return (
        <div className="gifdiv">
          <img src="https://thumbs.gfycat.com/AdventurousVainDassie-size_restricted.gif" alt="Gif Pic" 
           className="GIF" />
        </div>
      )
    }
  }
}

export default Profile;