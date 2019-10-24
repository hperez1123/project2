import React from 'react';
import { Link } from 'react-router-dom'
import Images from './Images'

function List(props) {
  return (
    <div className='list'>
      {props.list.results ?
        props.list.results.map(lists => (
          <Link to={lists.name} key={lists.index} >
            <div className='listee' key="monster">
              <Images list={lists.type} />
              <h1>{lists.name}</h1>
            </div>
          </Link>
        ))
        : ( <div className="gifdiv2">
          <img src="https://media2.giphy.com/media/8L0y24IfVIegmd8y39/giphy.gif" className="GIF2" alt="gif pic"/>
      </div>
        )
      }
        </div>
        
  )
}

export default List;