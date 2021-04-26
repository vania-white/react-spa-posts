import React from "react";
import Post from '../../../model/Post'
import './posts.scss'

interface PostsProps {
  posts: Post[],
  filterComments(postId: number): void;
}

export const Posts:React.FC<PostsProps> = ({ posts, filterComments }) => {
  return (
    <div className="posts">
      {
        posts.map(post => (
          <div className="posts__container" key={post.id}>
            <h2 className="posts__title">{post.title}</h2>
            <p className="posts__body">{post.body}</p>
            <button
              className="posts__button"
              onClick={() => filterComments(post.id)}
            >
              Comments
            </button>
          </div>
        ))
      }
    </div>
  );
}
