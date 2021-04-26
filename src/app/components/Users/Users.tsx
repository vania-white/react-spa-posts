import React from "react";
import { User } from '../../../model/User'
import './users.scss'

interface UsersProps {
  users: User[],
}

export const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="users">
      <table className="users__table">
        <thead className="users__head">
          <tr className="users__row">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody className="users__body">
          {
            users.map(user => (
              <tr className="users__row" key={user.id}>
                <td className="users__td">{user.name}</td>
                <td className="users__td">{user.email}</td>
                <td className="users__td">{user.phone}</td>
                <td className="users__td">{user.address.city}</td>
                <td className="users__td">{user.company.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}