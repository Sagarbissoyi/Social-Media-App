import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';  // Ensure this path is correct
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div className="home">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
          <div className="post-content">
            <h3>{post.title.length > 20 ? `${post.title.slice(0, 20)}...` : post.title}</h3>
            <p>{post.body.length > 50 ? `${post.body.slice(0, 50)}...` : post.body}</p>
            <Link to={`/item/${post.id}`}>Read More...</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
