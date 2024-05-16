import React from 'react'
import boxes from './boxes'
import Box from './Box'

const Squares = () => {

  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
   setSquares(prevSquares => {
    return prevSquares.map((square) => {
      return square.id === id ? {...square, on: ! square.on} : square
    })
   })
  }
  // в функции toggle() id - это как e.target

  const array = squares.map(item => {
    return < Box 
    key={item.id}
    on={item.on}
    handleClick={() => toggle(item.id)}
    />
  })


  return (
    <>
    {array}
    </>
  )
}

export default Squares

/* Более длинная запись:

    return < Box 
    key={item.id}
    id={item.id}
    on={item.on}
    handleClick={toggle}
    />
  })

*/