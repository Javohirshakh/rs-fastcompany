import React, {useState} from "react";

const Qualitie = (props) => {
  const user = props.user;
  // const handleDelete = props.handleDelete;
  return (
    <td>
      {user.qualities.map((item) => (
        <span className={"badge m-1 bg-" + item.color} key={item._id}>
          {item.name}
        </span>
      ))}
    </td>
  );
};
export default Qualitie;
