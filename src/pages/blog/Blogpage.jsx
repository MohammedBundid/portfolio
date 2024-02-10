import React, { useEffect, useState } from "react";
import Main from "../../components/ui/Main";
import BlogPost from "../../components/BlogPost";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Blogpage = () => {
  const url = 'https://blog-api-7i4w.onrender.com/api/blog/all'
  const { data, isPending, error } = useFetch(url)
  

  return (
    <Main>
      <div className="w-full h-full">
        <div className=" w-full md:w-1/2 m-auto h-full flex flex-col justify-center gap-4">
          <input
            type="search"
            className="w-1/2 m-auto px-2 py-1 rounded-md shadow-lightmode"
            placeholder="search for blog topics"
          />

          <div className="w-full h-full flex flex-col gap-2">
            { error && <div>{ error }</div>}
            { isPending && <div>loading ...</div>}
            {data && data.map((blog, index) => {
              return (
                  <Link to={`/blog/${blog._id}`} key={blog._id}>
                    <BlogPost
                    key={blog._id ? blog._id : index}
                    blog_title={blog.title}
                    blog_body={blog.body}
                    />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Blogpage;
