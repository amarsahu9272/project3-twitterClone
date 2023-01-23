import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import { tweetPosts } from "./const";

function Feed() {
  // let posts = JSON.parse(localStorage.getItem("tweet")) || [];

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <div>
          <p>For you</p>
          <p>Following</p>
        </div>
      </div>

      <TweetBox />

      {/* {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))} */}

      {tweetPosts.map((post) => (
        <Post
          // profilePic={post.profilePic}
          // key={post.name}
          // name={post.name}
          // verified={post.verified}
          // handlerName={post.handlerName}
          // joinedDate={post.joinedDate}
          // organization={post.organization}
          // tweetText={post.tweetText}
          // tweetPic={post.tweetPic}
          profiledata={post}
        />
      ))}
    </div>
  );
}

export default Feed;
