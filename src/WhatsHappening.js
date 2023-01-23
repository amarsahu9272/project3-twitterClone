import React from "react";
import "./WhatsHappening.css";
// import TwitterEmbedd from './TwitterEmbedded'

const whatHappData = [
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotInterested:true
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotInterested:false
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotInterested:false
  },
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotInterested:false
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotInterested:false
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotInterested:false
  },
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotInterested:false
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotInterested:false
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotInterested:false
  },
];
export default function WhatsHappening() {
  return (
    <div className="whatsHappeningContainer">
      <h2>What's happening</h2>
      {/* <TwitterEmbedded/> */}
      <div className="trends-p">
        {whatHappData.map((wData, i) => (
          !wData.isNotInterested && <div className="trending">
            <div className="trends">
              <span>{wData.trends}</span>
              <h3>#{wData.trending}</h3>
              <span>{wData.noTweet} Tweets</span>
            </div>
            <p>...</p>
          </div>
        ))}
      </div>
      <a href="https://twitter.com/nanapatekar9272">Show more</a>
    </div>
  );
}
