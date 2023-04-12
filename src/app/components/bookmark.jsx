import React, {useState} from "react";

const Bookmark = (props) => {
  const [bookmark, setBookmark] = useState(props.bookmark);
  function bookmarkHandle() {
    setBookmark(!bookmark);
  }
  return (
    <td>
      <button>
        <i
          className={bookmark ? "bi bi-bookmark-fill" : "bi bi-bookmark"}
          onClick={bookmarkHandle}
        ></i>
      </button>
    </td>
  );
};
export default Bookmark;
