import React, {useState} from "react";
const renderPhrase = (number) => {
  const lastOne = Number(number.toString().slice(-1));
  if (number > 4 && number < 15) return "человек тусанет";
  if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
  if (lastOne === 1) return "человек тусанет";
  return "человек тусанет";
};

const SearchStatus = (props) => {
  const users = props.users;
  console.log(users.length + " users");
  return (
    <h2>
      <span
        className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
      >
        {users.length > 0
          ? `${users.length + " " + renderPhrase(users.length)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};
export default SearchStatus;
