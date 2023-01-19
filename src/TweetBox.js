import { Avatar} from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import profileImge from "./Amr.jpg";
import TwitterButton from "./TwitterButton";

function TweetBox() {
  const [formValues, setFormValues] = useState({
    displayName: "",
    username: "",
    verified: "",
    text: "",
    image: "",
    avatar: "",
  });
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      displayName: "Rafeh Qazi",
      username: "cleverqazi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    });
    let post = JSON.parse(localStorage.getItem("tweet")) || [];
    post.push(formValues);
    localStorage.setItem("tweet", JSON.stringify(post));
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar
            src={profileImge}
            // "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
       
        {/* <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button> */}
        <TwitterButton onClickAction={sendTweet}  variant='outlined' btnStyle='tweetBox__tweetButton'  />
      </form>
    </div>
  );
}

export default TweetBox;
