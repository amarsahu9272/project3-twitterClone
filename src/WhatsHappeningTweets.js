import React from "react";
import profileImge from "./Amr.jpg";
import { Avatar } from "@mui/material";
import "./WhatsHappeningTweets.css";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isProfileClickedAtom } from "./recoil-states";
=======
import { useRecoilState } from "recoil";
import {selectFile} from "./recoil-states";
>>>>>>> 3bdb81c48d786a89afbcaf830983655cb5e7e3ed
function WhatsHappeningTweets({
  values,
  handleChange,
  tweetImage,
  handleTweetImage,
}) {
<<<<<<< HEAD
  const setProfileRecoil = useSetRecoilState(isProfileClickedAtom)
  const navigate = useNavigate();
  const handleProfileClick = () => {
    setProfileRecoil(false)
    navigate('/')
  };
=======
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
>>>>>>> 3bdb81c48d786a89afbcaf830983655cb5e7e3ed
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
      {/* <input
        value={tweetImage}
        onChange={handleTweetImage}
        className="WhatsHappeningTweetsimg"
        placeholder="Optional: Enter image URL"
        type="text"
      /> */}
      {selectedFile && (
        <div className="selectImage">
          <div onClick={() => setSelectedFile(null)}>
            <div className="cancelSelectImg">X</div>
          </div>
          <img src={selectedFile} />
        </div>
      )}
    </>
  );
}

export default WhatsHappeningTweets;
