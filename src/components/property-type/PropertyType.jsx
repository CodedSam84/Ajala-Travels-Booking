import PropertyCard from "../property-card/PropertyCard";
import "./property-type.css";

import firstUrl from "../../assets/booking2.jpg";
import secondUrl from "../../assets/booking3.jpg";
import thirdUrl from "../../assets/booking2.jpg";
import fourthUrl from "../../assets/booking5.jpg";
import fifthUrl from "../../assets/booking6.jpg";
import sixthUrl from "../../assets/booking7.jpg";

const PropertyType = () => {
  return (
    <div className="property-type">
      <h2>Browse by property type</h2>
      <div className="cards-container">
        <PropertyCard type="Hotels" numberOfProperty="800,000" url={firstUrl}/>
        <PropertyCard type="Apartments" numberOfProperty="118,000" url={secondUrl}/>
        <PropertyCard type="Resorts" numberOfProperty="65,000" url={thirdUrl}/>
        <PropertyCard type="Villas" numberOfProperty="800,000" url={fourthUrl}/>
        <PropertyCard type="Cabins" numberOfProperty="800,000" url={fifthUrl}/>
        <PropertyCard type="Cottages" numberOfProperty="800,000" url={sixthUrl}/>
      </div>
    </div>
  );
};

export default PropertyType;