import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import styles from "./PostList.module.css";

export default function PostsList() {
  const posts = useLoaderData();
  let modalContent;

  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={styles.list}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
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
