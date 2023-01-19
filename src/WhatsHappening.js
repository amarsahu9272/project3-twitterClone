import React from "react";
import "./WhatsHappening.css";
// import TwitterEmbedd from './TwitterEmbedded'

const whatHappData = [
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
  },
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
  },
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
  },
];
export default function WhatsHappening() {
  return (
    <div className="whatsHappeningContainer">
      <h2>What's happening</h2>
      {/* <TwitterEmbedded/> */}
      <div className="trends-p">
        {whatHappData.map((wData, i) => (
          <div className="trending">
            <div className="trends">
              <span>{wData.trends}</span>
              <h3>#{wData.trending}</h3>
              <span>{wData.noTweet} Tweets</span>
            </div>
            <p>...</p>
          </div>
        ))}
      </div>
      <a href="#">Show more</a>
    </div>
  );
}
