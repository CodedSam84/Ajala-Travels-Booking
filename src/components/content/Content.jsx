import Location from "../location/Location";
import "./content.css";
import firstUrl from "../../assets/photo.jpg";
import secondUrl from "../../assets/leicester2.jpg";
import thirdUrl from "../../assets/everton.jpg";
import fourthUrl from "../../assets/newcastle.jpg";
import fifthUrl from "../../assets/cambridge.jpg";
import PropertyType from "../property-type/PropertyType";
import GuestReviews from "../guest-reviews/GuestReviews";

const Content = () => {
  return (
    <div className="content">
      <Location name="Leeds" properties="300" price="800,000" option ="first" url={firstUrl}/>
      <Location name="Reading" properties="420" price="800,000" option="second" url={secondUrl}/>
      <Location name="Birmingham" properties="1200" price="800,000" url={thirdUrl}/>
      <Location name="Newcastle" properties="800" price="800,000" url={fourthUrl}/>
      <Location name="Huddersfield" properties="250" price="800,000" url={fifthUrl}/>
      <PropertyType/>
      <GuestReviews/>
    </div>
  );
};

export default Content;