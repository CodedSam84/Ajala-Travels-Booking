import Review from "../review/Review";
import "./guest-card.css";

const GuestCard = ({type, description, url, price, rating, comment, totalReview}) => {
  return (
    <div className="guest-property">
      <div className="guest-property-image" style={{backgroundImage: `url(${url})`}}/>

      <div className="guest-property-info">
        <h3>{type}</h3>
        <span>{description}</span>
      </div>

      <Review price={price} rating={rating} comment={comment} totalReview={totalReview}/>
    </div>
  )
}

export default GuestCard;