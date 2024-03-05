import React from "react";
import Image from "next/image";

function Blog({ posts }) {
  return (
    <div className=" xl:max-w-6xl w-[90%] mx-auto flex flex-wrap gap-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="blog-post lg:w-[calc(33.3333%-21.3333px)] sm:w-[calc(50%-21.3333px)] w-full bg-white shadow-md rounded-sm relative"
        >
          <div className="w-full h-50 rounded-sm overflow-hidden">
            <Image
              className=" w-full h-full object-cover"
              src={post.img}
              width={400}
              height={400}
              alt={post.title}
            />
          </div>
          <p className="blog-meta text-sm text-slate-400 p-5 pt-3">
            Author: {post.author} | Published on: {post.date}
          </p>
          <div className="blog-body relative h-[200px] flex flex-col p-5 pt-0">
            <h2 className="text-2xl font-semibold pb-4">{post.title}</h2>
            <p className=" font-normal text-gray-700 space-y-2">
              {post.content}
            </p>
            <button
              type="button"
              class="absolute bottom-3 py-2.5 mt-4 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
