import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className='header'>
      {/* <Link to="/"><input type="image" src="http://cdn.onlinewebfonts.com/svg/img_79140.png" alt="home" width="48" height="48" /></Link> */}
      <Link to="/"><button>Home</button></Link>
      <h1>Choose your enemies</h1>
    </header>
  )
}

export default Header;