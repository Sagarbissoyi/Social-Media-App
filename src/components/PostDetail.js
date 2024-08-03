import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="post-detail">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>User ID: {post.userId}</p>
      </div>
    </div>
  );
};

export default PostDetail;
