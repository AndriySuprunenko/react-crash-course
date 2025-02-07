import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import styles from "./PostList.module.css";

export default function PostsList() {
  const posts = useLoaderData();
  let modalContent;

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
      {posts.length > 0 && (
        <ul className={styles.list}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "while" }}>
          <h2>No posts yet.</h2>
          <p>Would you like to add one?</p>
        </div>
      )}
    </>
  );
}
