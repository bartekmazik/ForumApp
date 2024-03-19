import React from "react";

function Post(props) {
  const author = props.author;
  const body = props.body;
  const image = props.image;
  const commentAuthor = props.commentAuthor;
  const commentBody = props.commentBody;
  const post = {
    author: author,
  };
  const [posts, setPosts] = useState([]);
  return <div>Post</div>;
}

export default Post;
