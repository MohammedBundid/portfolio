import React, { useEffect, useState } from "react";
import Main from "../../components/ui/Main";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const [blog, setBlog] = useState("");
  const { id } = useParams();
  const url = `http://localhost:4000/api/blog/${id}`;

  useEffect(() => {
    const fetchSingleBlog = async () => {
      const response = await fetch(url);
      const result = await response.json();

      setBlog(result);
    };

    fetchSingleBlog();
  }, [url]);
  return (
    <Main>
      <div className="w-full h-full">
        <div className="w-full md:w-3/4 h-3/4 m-auto">
          <div className="w-full h-auto px-2 rounded-md py-2 flex flex-col gap-px">
            <h1 className="text-2xl capitalize text-center font-medium">
              {blog.title}
            </h1>
            <div className="w-full min-h-fit h-20 shadow-lightmode px-2 py-2 text-white bg-slate-600 rounded-md text-xl">
              {blog.body}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SingleBlog;
