import React from "react";

function Post({ id, title, body, author, photoUrl, comments }) {
  return (
    <div className="border border-secondary mb-4 rounded p-4 bg-light">
      <div className="d-flex justify-content-start align-items-center">
        <img
          src="src/assets/avatar.svg"
          width={"32px"}
          height={"32px"}
          alt="Avatar"
        />
        <p className="m-2 fs-5 text-wrap">{author}</p>
      </div>
      <h3 className="fs-4">{title}</h3>
      <p className="fs-6">{body}</p>
      {photoUrl && (
        <img src={photoUrl} alt="Post" className="w-100 rounded-4 my-2" />
      )}
      <h4 className="fs-5">Comments:</h4>
      <ul className="list-unstyled ">
        {comments.map((comment) => (
          <li className="border border-secondary my-2 p-2 " key={comment.id}>
            <div className="fw-bold fs-6">{comment.email}</div>
            <div className="fs-6">{comment.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
