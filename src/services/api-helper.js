import axios from 'axios';

export const list = async () => {
  const response = await axios.get('http://www.dnd5eapi.co/api/monsters/')
  const monsterList = response.data
  // debugger;
  return monsterList

  // return Object.keys(monsterList)
}

export const monster = async (index) => {
  const response = await axios.get(`http://www.dnd5eapi.co/api/monsters/${index}/`)
  const profile = response.data
  return profile
}