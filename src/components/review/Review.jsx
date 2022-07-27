import "./review.css";

const Review = ({price, rating, comment, totalReview}) => {
  return (
    <div className="review">
      <span>Starting from NGN {price}</span>
      <div className="review-details">
        <span className="rating">{rating}</span>
        <span className="comment">{comment}</span>
        <span className="total-reviews">{totalReview} reviews</span>
      </div>
    </div>
  );
};

export default Review;
