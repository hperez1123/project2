import React from 'react'
import { Route } from 'react-router-dom'
import List from './List'
import Profile from './Profile'

function Main(props) {
  return (
    <div>
      <Route exact path='/' render={() => <List list={props.list} />} />
      <p>main</p>
      <Route path='/:index' render={(props) => <Profile profile={props.match.params.index} />} />
    </div>
  )
}

export default Main;