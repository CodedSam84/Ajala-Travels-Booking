import "./guest-reviews.css";

import firstUrl from "../../assets/booking2.jpg";
import secondUrl from "../../assets/booking3.jpg";
import thirdUrl from "../../assets/booking4.jpg";
import fourthUrl from "../../assets/booking5.jpg";
import GuestCard from "../guest-card/GuestCard";

const GuestReviews = () => {
  return (
    <div className="guest-reviews">
      <h2>Homes guests love</h2>
      <div className="review-cards-container">
        <GuestCard 
          type="Split" 
          description="Luxury Apartment" 
          url={firstUrl} 
          price="55,000" 
          rating={9.6} 
          comment="Exceptional" 
          totalReview={60}
        />
        <GuestCard 
          type="Lund" 
          description="Beautiful apartment by the sea front"
          url={secondUrl} 
          price="55,000" 
          rating={9.6} 
          comment="Wonderful" 
          totalReview={60}
        />
        <GuestCard 
          type="Amsterdam" 
          description="Lake View apartment Amsterdam" 
          url={thirdUrl} 
          price="55,000" 
          rating={9.6} 
          comment="Awesome" 
          totalReview={60}
        />
        <GuestCard 
          type="Villas" 
          description="5 star luxury" 
          url={fourthUrl} 
          price="55,000" 
          rating={9.6} 
          comment="Fantastic" 
          totalReview={60}
        />
      </div>
    </div>
  );
};

export default GuestReviews;