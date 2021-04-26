import React from "react";
import { Comment } from '../../../model/Comment'
import './comments.scss'

interface CommentsProps {
  comments: Comment[],
}

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="comments">
      {
        comments.map(comment => (
          <div
            className="comments__container"
            key={comment.id}
          >
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </div>
        ))
      }
    </div>
  );
}