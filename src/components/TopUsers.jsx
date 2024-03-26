import React from "react";

function TopUsers(props) {
  const { posts } = props;

  // Counting posts for each user
  const userPostCounts = {};

  posts.forEach((post) => {
    const userName = post.user ? post.user.name : "Unknown";
    userPostCounts[userName] = (userPostCounts[userName] || 0) + 1;
  });

  // Sorting users by post count in descending order
  const sortedUsers = Object.keys(userPostCounts).sort(
    (a, b) => userPostCounts[b] - userPostCounts[a]
  );

  return (
    <div className="d-inline-block w-25 p-2 h-50 mt-5 border border-primary rounded mx-1">
      Top contributors
      <ul className="list-unstyled m-3">
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
