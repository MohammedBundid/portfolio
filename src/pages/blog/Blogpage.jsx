import React from "react";
import Main from "../../components/ui/Main";
import BlogPost from "../../components/BlogPost";

const Blogpage = () => {

  return (
    <Main>
      <div className="w-full h-full">
        <div className="w-1/2 m-auto h-full flex flex-col justify-center gap-4">
          <input
            type="search"
            className="w-1/2 m-auto px-2 py-1 rounded-md shadow-lightmode"
            placeholder="search for blog topics"
          />

          <div className="w-full h-full flex flex-col gap-2">
            <BlogPost
              blog_title={"hello world"}
              blog_body={"how are you guys doing"}
            />
            <BlogPost
              blog_title={"hello world"}
              blog_body={"how are you guys doing"}
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Blogpage;
