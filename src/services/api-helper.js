import axios from 'axios';

export const list = async () => {
  const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.open5e.com/monsters/?limit=1100")
  const monsterList = response.data
  return monsterList
}

export const monsterProfile = async (name) => {
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.open5e.com/monsters/?name=${name}`)
  const profile = response.data
  return profile
}