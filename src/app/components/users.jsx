import React, {useState} from "react";
import api from "../api";
import SearchStatus from "../components/searchStatus";
import User from "../components/user";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <>
      <SearchStatus users={users} />
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User user={user} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
