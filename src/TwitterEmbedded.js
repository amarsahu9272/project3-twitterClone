import React from "react";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";

function TwitterEmbedded() {
  return (
    <div>
      <TwitterTweetEmbed tweetId={"1615790081616535553"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="AnilSingh1998"
        options={{ height: 400 }}
      />

      <TwitterShareButton
        url={"https://facebook.com/cleverprogrammer"}
        options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
      />
    </div>
  );
}

export default TwitterEmbedded;
