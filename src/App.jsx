import { useState } from 'react';

import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
          posts={posts}
          onAddPost={addPostHandler}
        />
      </main>
    </>
  );
}

export default App;
