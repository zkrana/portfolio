import React from "react";

function Blog({ posts }) {
  return (
    <div className=" xl:max-w-6xl w-[90%] mx-auto flex flex-wrap gap-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="blog-post lg:w-[calc(33.3333%-21.3333px)] sm:w-[calc(50%-21.3333px)] w-full bg-white shadow-md rounded-sm p-5"
        >
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className=" text-lg space-y-2">{post.content}</p>
          <p className="blog-meta mt-4 text-slate-400">
            Author: {post.author} | Published on: {post.date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
