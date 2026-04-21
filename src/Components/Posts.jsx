import React from "react";
import { Link, useLoaderData } from "react-router";

const Posts = () => {
  const posts = useLoaderData(); //array of objects

  return (
    <div>
      <h2 className="text-5xl text-green-500 font-bold text-center">
        The Posts Page
      </h2>
      <div className="grid grid-cols-3">
        {posts.map((eachObject) => (
          <div className="border-2 border-red-500 rounded-2xl p-10 m-2" key={eachObject.id}>
            <p>Post - {eachObject.id} </p>
            <p>Title : {eachObject.title}</p>
            <button className="btn btn-secondary">
              <Link to={`/posts/${eachObject.id}`}>See More</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
