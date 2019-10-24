import React from 'react'
import { Route } from 'react-router-dom'
import List from './List'
import Profile from './Profile'

function Main(props) {
  return (
    <div className="main">
      <Route exact path='/' render={() => <List list={props.list} />} />
      <Route path='/:name' render={(props) => <Profile name={props.match.params.name} />} />
    </div>
  )
}

export default Main;