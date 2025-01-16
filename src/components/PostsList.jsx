import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import styles from "./PostList.module.css";

export default function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={styles.list}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Andrii" body="What's up?" />
        <Post author="Anna" body="What's going?" />
        <Post author="Arturito" body="How do you do?" />
      </ul>
    </>
  );
}
