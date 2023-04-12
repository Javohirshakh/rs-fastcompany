import React, {useState} from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
const User = (props) => {
  const user = props.user;
  const handleDelete = props.handleDelete;
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <Qualitie user={user} />
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <Bookmark bookmark={user.bookmark} />
      <td>
        <button
          onClick={() => handleDelete(user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};
export default User;
