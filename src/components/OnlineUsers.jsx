import React from "react";

function OnlineUsers(props) {
  const posts = props.posts;
  const setIsChatActive = props.setIsChatActive;
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const uniqueUserNames = [
    ...new Set(
      posts
        .filter(onlyUnique)
        .map((post) => (post.user ? post.user.name : "Unknown"))
    ),
  ];

  const topOnlineUsers = uniqueUserNames.slice(1, 6);
  const handleClick = () => {
    setIsChatActive(false);
  };

  return (
    <div className="d-none d-md-inline-block w-25 h-25 p-2 mt-5 border border-secondary rounded mx-1 bg-light">
      <h5 className="mb-3 fs-6">Online users</h5>
      <ul className="list-unstyled">
        {topOnlineUsers.map((userName) => (
          <li key={userName} className="d-flex align-items-center mb-2">
            <div
              className="rounded-circle me-2"
              style={{ width: "10px", height: "10px", background: "#008000" }}
            ></div>
            <strong className="me-2 fs-6">{userName}</strong>
            <a
              href="#"
              className="ms-auto"
              onClick={handleClick}
              style={{ textDecoration: "none" }}
            >
              <img
                src="src/assets/chat.svg"
                className="img-fluid"
                style={{ width: "20px" }}
                alt="Chat"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OnlineUsers;
