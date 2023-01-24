import { Avatar } from "@mui/material";
import React from "react";
import profilePic from "./Amr.jpg";
import "./ProfileSection1.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function ProfileSection1() {
  return (
    <div>
      <div className="profileSection1"></div>
      <div className="profileSection1-Sub">
        <div>
          <img src={profilePic} alt="profilePhoto" />
        </div>
      </div>
      <div className="profileDetails">
        <div className="profile-h">
          <h2>Amar Sahu</h2>
          <p>@AmarSahu</p>
        </div>
        <div className="profile-d">
        <p><CalendarMonthIcon className="CalendarIcon"/>Joined August 2017</p>
        <p><span>12 Following</span><span>2 Followers</span></p>
        </div>
      </div>
      <div className="profile-f"><h4>Tweets</h4><h4>Tweets & replies</h4><h4>Media</h4><h4>Links</h4></div>
    </div>
  );
}

export default ProfileSection1;
