import { useState, useEffect } from "react";

import Post from "./Post";

import styles from "./PostList.module.css";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  let modalContent;

  // get posts
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch posts.");
      }

      setPosts(data.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  // add post
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setPosts((existingPosts) => [postData, ...existingPosts]);
    });
  }

  return (
    <>
      {modalContent}
      {!isFetching && posts.length > 0 && (
        <ul className={styles.list}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "while" }}>
          <h2>No posts yet.</h2>
          <p>Would you like to add one?</p>
        </div>
      )}
      {isFetching && <p>Loading posts...</p>}
    </>
  );
}
