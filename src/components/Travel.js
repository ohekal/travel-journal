import React from "react";

function Travel(props) {
  return (
    <div className="travel">
      <img src={process.env.PUBLIC_URL + "images/" + `${props.img}`} />
      <div className="content">
        <div className="location">
          <img src={process.env.PUBLIC_URL + "images/loc.png"} width="10px" />
          <p>{props.location}</p>
          <a href="#">View on Google Maps</a>
        </div>
        <h1> {props.travelName}</h1>
        <h3>
          {props.startDate.day} {props.startDate.month}
          {", "}
          {props.startDate.year} - {props.endDate.day} {props.endDate.month}
          {", "}
          {props.endDate.year}
        </h3>
        <p>{props.travelInfo}</p>
      </div>
    </div>
  );
}

export default Travel;
