import { User } from '../model/User';

export const getUsersLocal = (): User[] => JSON.parse(localStorage.getItem('users')!);

export const setUsersLocal = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users: User[]) => localStorage.setItem('users', JSON.stringify(users)));
}
