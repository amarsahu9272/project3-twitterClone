import React from "react";
import profileImge from "./Amr.jpg";
import { Avatar } from "@mui/material";
import "./WhatsHappeningTweets.css";
import { useRecoilState } from "recoil";
import {selectFile} from "./recoil-states";
function WhatsHappeningTweets({
  values,
  handleChange,
  tweetImage,
  handleTweetImage,
}) {
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
  return (
    <>
      <div className="WhatsHappeningTweets">
        <Avatar src={profileImge} />
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
