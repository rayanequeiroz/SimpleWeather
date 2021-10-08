import React from "react";
import "../styles/CitiesList.css";

const CitiesList = () => {
    const cities = localStorage.getItem("cities");
    console.log(cities)
  if(cities.length > 0) {
      return (
          <div className="cities-list">
              {cities.map(city =>
                  <div className="city">{city}</div>
              )}
          </div>
      )
  } else {
      return (
          <h1 className="empty-list">
              Oops! You haven't added any city to your favorites yet!
          </h1>
          )
  }

};
export default CitiesList;
