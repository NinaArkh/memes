import React from 'react'
import Count from './Count'
import Icon from './Icon'

const Exercise = () => {
  const [result, setResult] = React.useState('Yes')
 // console.log(result)

  const [isImportant, setIsImportant] = React.useState('Yes')
  function handleClick3() {
    setIsImportant('No')
  }

  const [count, setCount] = React.useState(0)

  function add() {
    setCount(function(prevCount) {
      return prevCount + 1
    })
  }
  function substract() {
    setCount(prevCount => prevCount - 1)
  }

  function handleHover() {
    console.log('Hover!')
  }

  const fruit = true 
  const [apple, setApple] = React.useState(true)
  function getApple() {
   setApple(apple => !apple)
   console.log(apple)
  }

  const [items, setItems] = React.useState(['word', 'word2'])
  const words = items.map(item => <p> {item} </p>)

  function addItem() {
    const newItem = `word ${items.length + 1}`
    setItems(prevState => [...prevState, newItem])
  }
//array.push() написать нельзя, т.к. ты не можешь напрямую изменять значения в переменных, только при помощи функции-сеттера prevState => [...prevState, newItem]

  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: 'Doe',
    phone: '+7-901-000-05-05',
    email: 'abcde@mail.ru',
    isFavourite: false
  })
  
  function toggleFavourite() {
    setContact(prevContact => {
      return {...prevContact, isFavourite: !contact.isFavourite}
    })
  }
 
  return (
    <>

      <button
        onClick={addItem}
        id="button2"> 
        Generate Words 
      </button>

        {words}

      <h4> {result} </h4>
      <h1 onClick={handleClick3}> {isImportant} </h1>


      <div className="counter">
        <button 
          onClick={substract}
          className="counter--minus"> - 
        </button>
        < Count number={count} />
      
        <button 
          onClick={add}
          onMouseOver={handleHover}
          className="counter--plus"> + </button>
      </div>

     
        {fruit ? 'banana' : 'tomato'}

      <button className='fruit--button' onClick={getApple}> 
         {apple ? 'true apple' : 'false strawberry'} 
      </button>

      <article>
        <h2> {contact.firstName} {contact.lastName} </h2>
        <p> {contact.phone} </p>
        <p> {contact.email} </p>

        <p> < Icon 
               isFilled={contact.isFavourite} 
               handleClick={toggleFavourite}
            /> 
        </p>
      </article>
      

    </>
  )
}

export default Exercise