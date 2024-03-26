import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post.jsx";

function PostContainer(prop) {
  const [posts, setPosts] = useState([]);
  const searchWord = prop.searchWord;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, commentsResponse, photosResponse, usersResponse] =
          await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/comments"),
            axios.get("https://jsonplaceholder.typicode.com/photos"),
            axios.get("https://jsonplaceholder.typicode.com/users"),
          ]);

        const postsData = postsResponse.data;
        const commentsData = commentsResponse.data;
        const photosData = photosResponse.data;
        const usersData = usersResponse.data;

        const postsWithDetails = postsData.map((post) => ({
          ...post,
          user: usersData.find((user) => user.id === post.userId),
          comments: commentsData.filter(
            (comment) => comment.postId === post.id
          ),
          photo: photosData.find((photo) => photo.id === post.id),
        }));

        setPosts(postsWithDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderPosts = () => {
    return posts
      .filter((post) =>
        post.title.toLowerCase().includes(searchWord.toLowerCase())
      )
      .map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          author={post.user ? post.user.name : "Unknown"}
          photoUrl={post.photo ? post.photo.url : ""}
          comments={post.comments}
        />
      ));
  };

  return <div className="w-50 container mt-5">{renderPosts()}</div>;
}

export default PostContainer;
