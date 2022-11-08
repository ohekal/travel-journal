import React from "react";
import loc from "../images/loc.png";
function Travel(props) {
  return (
    <div className="travel">
      <img src={require(`../images/${props.img}`)} alt="" />
      <div className="content">
        <div className="location">
          <img src={loc} width="10px" alt="" />
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
