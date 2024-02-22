import Main from "../components/ui/Main";

const Login = () => {
  return (
    <Main>
      <div className="w-1/2 m-auto h-screen">
        <form className="w-1/2 m-auto h-1/2 flex flex-col gap-2 rounded-md bg-sky-700/30 px-2 py-2 ">
          <label className="text-xl">email</label>
          <input type="email" className="px-2 py-1 rounded-md"/>
          <label className="text-xl">password</label>
          <input type="password" className="px-2 py-1 rounded-md"/>
          <button className="px-2 py-2 w-3/4 m-auto rounded-md">login</button>
        </form>
      </div>
    </Main>
  );
};

export default Login;
