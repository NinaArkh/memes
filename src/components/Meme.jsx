import React from 'react'
import Memes from '../memesData'
import { useEffect } from 'react'

const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemes, setAllMemes] = React.useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function handleChange(e) {
    const {name, value} = e.target

    setMeme(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  function getMemeImage(e) {
    e.preventDefault()
    const random = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[random].url

    setMeme(prevMeme => {
      return {...prevMeme, randomImage: url}
    }) 
  }
  //поскольку нам не нужно знать предыдущее значение в setter function, можно не писать callback внутри нее 


  return (
    <section>
      <form onSubmit={handleSubmit}> 
        <div>
          <label> Top Text 
            <input 
              type='text' 
              name='topText'
              value={meme.topText}
              onChange={handleChange}
            />
          </label>

          <label> Bottom Text 
          <input 
            type="text" 
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />
          </label>
        </div>
        <button onClick={getMemeImage}> 
          Get a new meme image 
        </button>
      </form> 

      <div className='meme'>
        <img 
          className="meme--image"
          src={meme.randomImage} 
          alt={meme.name} 
        />
        <h2 className='meme--text top'> {meme.topText} </h2>
        <h2 className='meme--text bottom'> {meme.bottomText} </h2>
      </div>     
    </section>
  )
}

export default Meme

// value нужно, чтобы компонент стал controlled component, чтобы именно React.useState() определял его содержимое, а не DOM