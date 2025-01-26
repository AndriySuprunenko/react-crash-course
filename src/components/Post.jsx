import PropTypes from 'prop-types';

import classes from './Post.module.css';

function Post({ author, body }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
