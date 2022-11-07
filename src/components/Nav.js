import React from "react";

function Nav() {
  return (
    <div className="nav-bar">
      <img src={process.env.PUBLIC_URL + "images/logo.png"} />
      <p>my travel journal</p>
    </div>
  );
}

export default Nav;
