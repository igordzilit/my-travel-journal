import React from "react";
import LocationPin from "../assets/ic_location_on_24px.png";

const TravelCard = ({
  imageUrl,
  location,
  googleMapsUrl,
  title,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="card">
      <img className="card-img" src={imageUrl} />
      <div className="card-info">
        <div className="card-location">
          <img src={LocationPin} />
          <span>{location.toUpperCase()}</span>
          <a href={googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1>{title}</h1>
        <h2>
          {startDate} - {endDate}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TravelCard;
