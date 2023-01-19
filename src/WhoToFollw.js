import { Avatar } from "@mui/material";
import React from "react";
import TwitterButton from "./TwitterButton";
import "./WhoToFollw.css";
import profileImge from "./Amr.jpg";
const follow = [
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "Indian govenment official",
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "",
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "",
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "",
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "",
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "indian govenment official",
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "indian govenment official",
  },
];
function WhoToFollw() {
  return (
    <div className="whoToFollwContainer">
      <h2>Who to follow</h2>
      {/* <TwitterEmbedded/> */}
      <div className="follow-p">
        {follow.map((fData, i) => (
          <div className="following">
            <Avatar src={profileImge} />
            <div className="follows">
              <h3>{fData.followName}</h3>
              <p>{fData.followUserName}</p>
              <span>{fData.folloDesignation}</span>
            </div>
            <TwitterButton
              onClickAction=""
              btnText="Follow"
              variant="outlined"
              btnStyle="followButton"
            />
          </div>
        ))}
      </div>
      <a href="#">Show more</a>
    </div>
  );
}

export default WhoToFollw;
