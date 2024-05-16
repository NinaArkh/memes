
const Icon = (props) => {
  let heartIcon = props.isFilled ? '♥' : '♣'
  return (
    <button
      className="little--button"
      onClick={props.handleClick}
      aria-label = {props.isFilled ? 'mark as unfavourite' : 'Mark as favourite'}
      >
      <p> {heartIcon} </p>
    </button>
  )
}
export default Icon
