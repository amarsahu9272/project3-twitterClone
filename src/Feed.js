import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
// import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  //   const [post, setPosts] = useState([]);
  let posts = JSON.parse(localStorage.getItem("tweet")) || [];

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

      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}

      {/* <FlipMove>
       
      </FlipMove> */}
    </div>
  );
}

export default Feed;
