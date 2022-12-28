import React from "react";
import Header from "./components/Header";
import TravelCard from "./components/TravelCard";
import dataInfo from "./data";

const App = () => {
  const travelInfo = dataInfo.map((data) => {
    return (
      <TravelCard
        title={data.title}
        location={data.location}
        googleMapsUrl={data.googleMapsUrl}
        startDate={data.startDate}
        endDate={data.endDate}
        description={data.description}
        imageUrl={data.imageUrl}
      />
    );
  });
  return (
    <>
      <Header />
      <div className="container">{travelInfo}</div>
    </>
  );
};

export default App;
