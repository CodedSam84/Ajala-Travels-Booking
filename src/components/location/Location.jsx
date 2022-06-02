import "./location.css";

const Location = ({name, properties, url, option}) => {
  return (
    <div className={`location ${option}`} style={{backgroundImage: `url(${url})`}}>
      <div className="content-container">
        <div className="location-name-container">
          <span>{name}</span>
          <div className="flag"/>
        </div>
        <span className="properties">{properties} Properties</span>
      </div>
    </div>
  );
}

export default Location;
