import React, { useState,useEffect } from "react";
import "./TweetBox.css";
// import TwitterButton from "./TwitterButton";
import TweetFooter from "./TweetFooter";
import ShowTweet from "./ShowTweet";
import WhatsHappeningTweets from "./WhatsHappeningTweets";
import profileImage from './Amr.jpg'
import { useRecoilState } from "recoil";
import { selectFile } from "./recoil-states";
import { totalTweets } from "./recoil-states";

function TweetBox() {
 const [tweets, setTweets] = useRecoilState(totalTweets);
 
  const [formValues, setFormValues] = useState({});
  
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    let obj = {
      name:"Nitin Mharanur",
      verified: true,
      tweetText: tweetMessage,
      tweetPic: selectedFile,
      avatar: profileImage,
      handlerName:"@IamNiitiin",
      joinedDate:" Dec 2023"
    };
    // let post = JSON.parse(localStorage.getItem("tweet"));
    // post.unshift(...tweets,obj);
    // localStorage.setItem("tweet", JSON.stringify(post));
    setTweets([obj,...tweets]);
    setTweetMessage("");
    setTweetImage("");
    setSelectedFile(null);
  };
  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
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
