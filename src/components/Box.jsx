import React from 'react'
import boxes from './boxes'

const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? 'rgb(0, 0, 0)' : 'rgb(255, 230, 155)' 
  }

  return (
    <button 
      className='square' 
      style={styles}
      onClick={props.handleClick}>
    </button>   
  )
}

export default Box

  //почему нужно писать колбэк функцию здесь
  // onClick={() => props.handleClick(props.id)}
  // почему нельзя написать 
  // onClick={props.handleClick(props.id)} - браузер, если так написать, зависает и счетчик Uncaught крутится до бесконечноти