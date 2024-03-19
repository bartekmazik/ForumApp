import React from "react";
import Family from "../assets/family.jpeg";

function PostContainer() {
  const Post = {
    opis: "lalalal",
    url: "https://via.placeholder.com/600/771796",
    comment: "lorem ipsum",
  };
  const imgURL = `${Post.url}`;
  return (
    <div className="w-50 d-inline-block mt-5 border border-primary">
      <div>{Post.opis}</div>
      <div>
        <img className="img-fluid" src={imgURL} alt="Post" />
      </div>
      <div className="d-flex justify-content-around">
        <img
          src={Family}
          height="30px"
          width="30px"
          className="image-fluid rounded"
        />
        {Post.comment}
      </div>
    </div>
  );
}

export default PostContainer;
