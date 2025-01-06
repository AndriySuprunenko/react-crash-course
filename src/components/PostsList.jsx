import NewPost from "./NewPost";
import Post from "./Post";

import styles from "./PostList.module.css";

export default function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.list}>
        <Post author="Andrii" body="React is awesome!!!" />
        <Post author="Anna" body="Yeah! React is awesome!!!" />
      </ul>
    </>
  );
}
