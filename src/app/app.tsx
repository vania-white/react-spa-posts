import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './app.scss';
import { setPostsLocal, getPostsLocal } from '../api/posts.api';
import { setUsersLocal, getUsersLocal } from '../api/users.api';
import { setCommentsLocal, getCommentsLocal } from '../api/comments.api';
import { Posts } from '../app/components/Posts/Posts'
import { PostsHeader } from '../app/components/PostsHeader/PostsHeader'
import { Users } from '../app/components/Users/Users'
import { Comments } from './components/Comments/Comments';

setPostsLocal();
setUsersLocal();
setCommentsLocal();

export const App = () => {
  const [mainPost, setmainPost] = useState(getPostsLocal())
  const [mainComments, setMainComments] = useState(getCommentsLocal())

  const [posts] = useState(mainPost);
  const [comments, setComments] = useState([]);
  const [users] = useState(getUsersLocal());

  const filterPosts = (selectValue: string) => {
    setmainPost(
      posts.filter(
        post => post.userId === users.find(user => (user.name === selectValue)).id
      ));
  }

  const filterPostsInput = (inputValue: string) => {
    setmainPost(posts.filter(post => post.body.includes(inputValue) || post.title.includes(inputValue)));
  }

  const filterComments = (postId: number) => {
    setComments(mainComments.filter(mainComment => mainComment.postId === postId))
  }

  return (
    <Router>
      <div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">Users</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/users">Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <PostsHeader
              users={users}
              filterPosts={filterPosts}
              filterPostsInput={filterPostsInput}
            />
            <div className="container-posts">
              <Posts
                posts={mainPost}
                filterComments={filterComments}
              />
              <Comments
                comments={comments}
              />
            </div>
          </Route>
          <Route path="/">
            <Users users={users} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
