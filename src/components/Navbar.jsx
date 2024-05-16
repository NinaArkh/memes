import React from 'react'
import Smiley from './smile_c2.png'

const Navbar = () => {
  
  return (
    <nav>
      <img src={Smiley} alt="smile emoji" />
      <h1 className="title"> Meme Generator </h1>
      <p className='sidenote'> &#169; Powered by React </p>
    </nav>
  )
}
export default Navbar