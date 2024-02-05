import React, { useEffect, useState } from "react";
import Main from "../../components/ui/Main";
import BlogPost from "../../components/BlogPost";
import { Link } from "react-router-dom";

const Blogpage = () => {
  const [data, setData] = useState([])
  const url = 'http://localhost:4000/api/blog/all'

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("error fetching data from api", error)
      }
    }

    fetchBlogs()
  }, [url])

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
