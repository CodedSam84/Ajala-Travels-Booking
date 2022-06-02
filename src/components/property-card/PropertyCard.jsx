import "./property-card.css";

const PropertyCard = ({type, numberOfProperty, url}) => {
  return (
    <div className="property">
      <div className="property-image" style={{backgroundImage: `url(${url})`}}/>
      <div className="property-info">
        <h3>{type}</h3>
        <span>{numberOfProperty} apartments</span>
      </div>
    </div>
  )
}

export default PropertyCard;
