import Post from "../model/Post";

export const getPostsLocal = (): Post[] => JSON.parse(localStorage.getItem('posts')!);

export const setPostsLocal = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((posts: Post[]) => localStorage.setItem('posts', JSON.stringify(posts)));
}
