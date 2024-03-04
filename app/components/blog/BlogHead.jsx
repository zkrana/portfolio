import React from "react";
import Content from "../Content";
import Blog from "./BlogItem";

function BlogHead() {
  const posts = [
    {
      id: 1,
      title: "Introduction to React",
      content: "React is a JavaScript library for building user interfaces.",
      author: "John Doe",
      date: "2022-03-04",
    },
    {
      id: 2,
      title: "State and Props in React",
      content:
        "Understanding state and props is crucial for React development.",
      author: "Jane Smith",
      date: "2022-03-05",
    },
    {
      id: 3,
      title: "State and Props in React",
      content:
        "Understanding state and props is crucial for React development.",
      author: "Jane Smith",
      date: "2022-03-05",
    },
  ];

  return (
    <>
      <div>
        <Content
          title="Blog"
          description="From crafting stunning websites and intuitive user experiences to developing powerful apps, boosting online visibility, and ensuring reliable hosting and targeted advertising, we're your all-in-one solution."
        />
      </div>
      <div className="mt-16">
        <Blog posts={posts} />
      </div>
    </>
  );
}

export default BlogHead;
