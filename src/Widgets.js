import React from "react";
import "./Widgets.css";
import WhatsHappening from "./WhatsHappening";
import SearchTwitter from "./SearchTwitter";
import WhoToFollw from "./WhoToFollw";

function Widgets() {
  return (
    <div className="widgets">
      <div className="feed_header">
        <SearchTwitter />
      </div>

      <WhatsHappening />
      <WhoToFollw />
    </div>
  );
}

export default Widgets;
