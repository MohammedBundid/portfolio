const BlogPost = ({ blog_title, blog_body }) => {
  return (
    <div className="w-full px-2 py-1 h-24 hover:shadow-lg transition-shadow duration-500 shadow-lightmode rounded-md max-h-fit bg-gradient-to-r from-sky-950 to-cyan-900 flex flex-col gap-2 text-gray-300">
      <h1 className="text-xl capitalize">{blog_title}</h1>
      <p className="border-l-4 px-2 border-teal-400">{blog_body}</p>
    </div>
  );
};

export default BlogPost;
