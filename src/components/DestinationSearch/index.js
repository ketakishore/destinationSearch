// Write your code here
import '../DestinationItem/index.css'

const DestinationSearch = props => {
  const {DestinationDetails} = props
  const {name, imgUrl} = DestinationDetails

  return (
    <li>
      <div className="destination-container">
        <img src={imgUrl} alt={name} className="destination-img" />
        <p className="destination-description">{name}</p>
      </div>
    </li>
  )
}

export default DestinationSearch
