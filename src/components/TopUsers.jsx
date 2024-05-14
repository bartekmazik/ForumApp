import React from "react";

function TopUsers(props) {
  const { posts } = props;

  const userPostCounts = {};

  posts.forEach((post) => {
    const userName = post.user ? post.user.name : "Unknown";
    userPostCounts[userName] = (userPostCounts[userName] || 0) + 1;
  });

  const sortedUsers = Object.keys(userPostCounts).sort(
    (a, b) => userPostCounts[b] - userPostCounts[a]
  );

  return (
    <div className="d-inline-block w-25 p-2 h-50 mt-5 border border-secondary rounded mx-1 bg-light d-none d-md-block">
      Top contributors
      <ul className="list-unstyled m-1">
        {sortedUsers.map((userName) => (
          <li key={userName}>
            <strong>{userName}</strong>: {userPostCounts[userName]} posts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;
