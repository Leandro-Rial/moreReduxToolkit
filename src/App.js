import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './redux/slices/postSlices';
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch])

  const posts = useSelector(state => state.posts);

  const { loading, postsList } = posts;



  return (
    <div className="App">
      <h1>Post List</h1>
      <hr />
      {
        loading ? <h2>Loading...</h2> : postsList?.map(post => (
          <div style={{
            margin: "2rem 10rem",
            padding: "10px"
          }} key={post.id}>
            <h3>{post.title}</h3>
            <small>{post.body}</small>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
