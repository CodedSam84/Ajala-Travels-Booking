import "./result-card.css";
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import { Link } from "react-router-dom";
import url from "../../assets/marriott3.jpeg";

const ResultCard = () => {
  return (
    <div className="result-card">
      <div className="result-card-info">
        <div className="result-card-description">
          <div className="result-card-container">
            <div className="result-card-image" style={{backgroundImage: `url(${url})`}}/>
            <div className="property-details">
              <div className="result-card-rating">
                <Link className="property-link" to="">Four Points by Sheraton Lagos</Link>
                <div className="stars">
                  <StarBorderTwoToneIcon className="small"/>
                  <StarBorderTwoToneIcon className="small"/>
                  <StarBorderTwoToneIcon className="small"/>
                  <StarBorderTwoToneIcon className="small"/>
                </div>
              </div>
              <span>20km from center.</span>
              <h4 className="apartment">Studio Apartment with Air conditioning</h4>
              <span>1 double-bed . 1 bedroom . 3 bathrooms</span>
              <h4 className="cancellation">FREE cancellation</h4>
            </div>
          </div>  
          <div className="result-card-price">
            <div className="result-card-review">
              <div className="card-review-content">
                <h3>Good</h3>
                <span>492 reviews</span>
              </div>
              <button>8.8</button>
            </div>
            <span className="price">NGN 50,000/night</span>
            <span className="total">NGN 100,000 total</span>
            <button>See Availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
