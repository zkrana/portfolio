import React from "react";
import Content from "../Content";
import Blog from "./BlogItem";
import react from "../../../public/react.jpg";
import technology from "../../../public/technology.jpg";
import reactProps from "../../../public/react-props.jpg";

function BlogHead() {
  const posts = [
    {
      id: 1,
      img: react,
      title: "Introduction to React",
      content: "React is a JavaScript library for building user interfaces.",
      author: "John Doe",
      date: "2022-03-04",
    },
    {
      id: 2,
      img: technology,
      title: "Noteworthy technology acquisitions 2021",
      content:
        "Understanding state and props is crucial for React development.",
      author: "Jane Smith",
      date: "2022-03-05",
    },
    {
      id: 3,
      img: reactProps,
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
          description="Whether you're a seasoned developer, a budding entrepreneur, or a curious enthusiast, our blog is your go-to resource for all things related to crafting compelling online experiences and maximizing your digital presence"
        />
      </div>
      <div className="mt-16">
        <Blog posts={posts} />
      </div>
    </>
  );
}

export default BlogHead;
