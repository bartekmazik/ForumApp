import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post.jsx";

function PostContainer(props) {
  const { searchWord, posts, setPosts, sortOption, filterValues } = props;

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
      .filter((post) => {
        if (!searchWord) return true;
        return (
          post.title.toLowerCase().includes(searchWord.toLowerCase()) ||
          post.body.toLowerCase().includes(searchWord.toLowerCase())
        );
      })
      .filter(
        (post) =>
          post.body.length < filterValues.max &&
          post.body.length > filterValues.min
      )
      .sort((a, b) => {
        if (sortOption === "min") {
          return a.body.length - b.body.length;
        } else if (sortOption === "max") {
          return b.body.length - a.body.length;
        }
      })
      .map((post) => {
        const { title, body } = post;
        const titleParts = highlightSearchWord(title, searchWord);
        const bodyParts = highlightSearchWord(body, searchWord);

        return (
          <Post
            key={post.id}
            id={post.id}
            title={titleParts}
            body={bodyParts}
            author={post.user ? post.user.name : "Unknown"}
            photoUrl={post.photo ? post.photo.url : ""}
            comments={post.comments}
          />
        );
      });
  };

  // Function to highlight search word within text
  const highlightSearchWord = (text, searchWord) => {
    // whitespace exception
    if (searchWord.trim() === "") {
      return [text];
    }

    const parts = text.split(new RegExp(`(${searchWord})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchWord.toLowerCase() ? (
        <span key={index} className="text-white bg-dark">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-50 container mt-5  border-secondary">{renderPosts()}</div>
  );
}

export default PostContainer;
