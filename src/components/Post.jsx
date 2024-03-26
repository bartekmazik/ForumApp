import React from "react";

function Post({ id, title, body, author, photoUrl, comments }) {
  return (
    <div className="border border-primary m-2 rounded p-4">
      <div className="d-flex justify-content-start align-items-center">
        <img src="src/assets/avatar.svg" width={"32px"} height={"32px"} />
        <p className="m-2">{author}</p>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      {photoUrl && (
        <img src={photoUrl} alt="Post" className="w-100 rounded-4 my-2" />
      )}
      <h4>Comments:</h4>
      <ul className="list-unstyled">
        {comments.map((comment) => (
          <li className="border border-primary my-2 p-2" key={comment.id}>
            <div className="fw-bold">{comment.email}</div>
            <div>{comment.body}</div>
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
}

export default Post;
