import PropTypes from "prop-types";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import styles from "./PostList.module.css";

export default function PostsList({ isPosting, onStopPosting }) {
  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={styles.list}>
        <Post author="Andrii" body="What's up?" />
        <Post author="Anna" body="What's going?" />
        <Post author="Arturito" body="How do you do?" />
      </ul>
    </>
  );
}

PostsList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func,
};
