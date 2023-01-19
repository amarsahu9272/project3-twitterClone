import React from "react";
import { Avatar } from "@mui/material";
import "./ProfileButton.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profileImge from "./Amr.jpg";

function ProfileButton() {
  return (
    <div className="profile">
      <div className="profile-btn">
        <Avatar
          src={profileImge}
          // "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        />
        <h3>
          Amar Sahu
          <p className="post__headerSpecial"> @amar123</p>
        </h3>
        <span>
          <MoreHorizIcon />
        </span>
      </div>
    </div>
  );
}

export default ProfileButton;
