import React, { useState } from "react";
import "./TweetBox.css";
// import TwitterButton from "./TwitterButton";
import TweetFooter from "./TweetFooter";
import ShowTweet from "./ShowTweet";
import WhatsHappeningTweets from "./WhatsHappeningTweets";
import profileImage from './Amr.jpg'

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
      displayName: "Amar",
      username: "Sahu",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:profileImage
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
        {/* <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button> */}

        <WhatsHappeningTweets
          btnStyle="WhatsHappeningTweets"
          values={tweetMessage}
          handleChange={(e) => setTweetMessage(e.target.value)}
          tweetImage={tweetImage}
          handleTweetImage={(e) => setTweetImage(e.target.value)}
        />
        <TweetFooter  handleClick={sendTweet} />
        <ShowTweet />
      </form>
    </div>
  );
}

export default TweetBox;
