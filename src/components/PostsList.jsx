import PropTypes from 'prop-types';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';

import styles from './PostList.module.css';

export default function PostsList({
  isPosting,
  onStopPosting,
  posts,
  onAddPost,
}) {
  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={onAddPost} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={styles.list}>
        {posts.map((post) => (
          <Post key={post.id} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

PostsList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func,
  posts: PropTypes.array,
  onAddPost: PropTypes.func,
};
