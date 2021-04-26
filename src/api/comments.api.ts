import { Comment } from '../model/Comment';

export const getCommentsLocal = (): Comment[] => JSON.parse(localStorage.getItem('comment')!);

export const setCommentsLocal = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then((comment: Comment[]) => localStorage.setItem('comment', JSON.stringify(comment)));
}