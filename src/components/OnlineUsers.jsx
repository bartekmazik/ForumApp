import React from "react";

function OnlineUsers(props) {
  const posts = props.posts;
  const setIsChatActive = props.setIsChatActive;
  const uniqueUserNames = [
    ...new Set(posts.map((post) => (post.user ? post.user.name : "Unknown"))),
  ];

  const topOnlineUsers = uniqueUserNames.slice(2, 5);
  const handleClick = () => {
    setIsChatActive(false);
  };
  return (
    <div className="d-inline-block w-25 p-2 h-50 mt-5 border border-secondary rounded mx-1 bg-light">
      Online users
      <ul className="w-100 list-unstyled m-3 start-0">
        {topOnlineUsers.map((userName) => (
          <li
            key={userName}
            className="d-flex w-100 justify-content-start align-items-center"
          >
            <div
              className="rounded-circle "
              style={{ width: "0.5vw", height: "0.5vw", background: "#008000" }}
            ></div>
            <strong className="mx-1">{userName}</strong>
            <a role="button" onClick={handleClick}>
              <img
                src="src/assets/chat.svg"
                className="img-fluid"
                style={{ width: "1vw" }}
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OnlineUsers;
