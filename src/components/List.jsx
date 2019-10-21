import React from 'react';
import { Link } from 'react-router-dom'

function List(props) {
  console.log(props.list.results)
  return (
    <div className='list'>
      {props.list.results &&
        props.list.results.map(lists => (
          <Link to={`/${lists.index}`} key={lists.id} >
            <div className='listee'>
              <h1>{lists.name}</h1>
            </div>
          </Link>
        ))}

    </div>
  )
}

export default List;