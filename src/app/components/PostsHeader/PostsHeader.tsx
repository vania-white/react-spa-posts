import React, { useEffect, useState } from 'react';
import { User } from '../../../model/User';
import './PostsHeader.scss';

interface PostsHeaderProps {
  users: User[];
  filterPosts(selectValue: string): void;
  filterPostsInput(inputValue: string): void;
}

export const PostsHeader:React.FC<PostsHeaderProps> = ({
  users,
  filterPosts,
  filterPostsInput
}) => {
  const [selectValue, setSelectValue] = useState('Change User');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (selectValue !== "Change User") {
      filterPosts(selectValue);
    } else {
      return;
    }
  }, [selectValue]);

  useEffect(() => {
    filterPostsInput(inputValue);
  }, [inputValue])

  return (
    <div className="postsHeader">
      <select
        className="postsHeader__select"
        value={selectValue}
        onChange={(event) => {
          setSelectValue(event.target.value)
          
        }}
      >
        <option
          value="Change User"
          disabled
        >
          Change User
        </option>
        {
          users.map(user => (
            <option
              value={user.name}
              key={user.id}
            >
                {user.name}
            </option>
          ))
        }
      </select>
      <input
        className="postsHeader__input"
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Search post"
      />
    </div>
  )
}
