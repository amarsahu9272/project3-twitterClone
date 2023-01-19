import React from "react";
import "./Widgets.css";
import WhatsHappening from "./WhatsHappening";
import SearchTwitter from "./SearchTwitter";

function Widgets() {
  return (
    <div className="widgets">
      <SearchTwitter />
      <WhatsHappening />
    </div>
  );
}

export default Widgets;
