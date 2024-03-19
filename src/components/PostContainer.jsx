import React, { useState, useEffect } from "react";
import axios from "axios";

function PostContainer() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [images, setImages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch posts
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        const postsData = res.data;
        setPosts(postsData);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    // Fetch comments
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => {
        const commentsData = res.data;
        setComments(commentsData);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });

    // Fetch images
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        const imagesData = res.data;
        setImages(imagesData);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });

    // Fetch users
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const usersData = res.data;
        setUsers(usersData);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const renderPosts = () => {
    return posts.map((post) => {
      const image = images.find((img) => img.id === post.id);
      const user = users.find((user) => user.id === post.userId);
      const comment = comments.find((comment) => comment.postId === post.id);

      return (
        <div key={post.id}>
          <p>{post.body}</p>
          {image && <img src={image.url} alt="Post" width="480px" />}
          {user && <p>Posted by: {user.name}</p>}
          {comment && <p>Comment: {comment.body}</p>}
          <hr />
        </div>
      );
    });
  };

  return (
    <div className="w-50 d-inline-block mt-5 border border-primary">
      {renderPosts()}
    </div>
  );
}

export default PostContainer;
