import React from "react";
import profileImge from "./Amr.jpg";
import { Avatar } from "@mui/material";
import "./WhatsHappeningTweets.css";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isProfileClickedAtom } from "./recoil-states";
function WhatsHappeningTweets({
  values,
  handleChange,
  tweetImage,
  handleTweetImage,
}) {
  const setProfileRecoil = useSetRecoilState(isProfileClickedAtom)
  const navigate = useNavigate();
  const handleProfileClick = () => {
    setProfileRecoil(false)
    navigate('/')
  };
  return (
    <>
      <div className="WhatsHappeningTweets">
        <Avatar src={profileImge} onClick={handleProfileClick} />
        <input
          onChange={handleChange}
          value={values}
          placeholder="What's happening?"
          type="text"
        />
      </div>
      <input
        value={tweetImage}
        onChange={handleTweetImage}
        className="WhatsHappeningTweetsimg"
        placeholder="Optional: Enter image URL"
        type="text"
      />
    </>
  );
}

export default WhatsHappeningTweets;
