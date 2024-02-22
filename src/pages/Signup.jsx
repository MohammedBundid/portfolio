import React from "react";
import Main from "../components/ui/Main";

const Signup = () => {
  return (
    <Main>
      <h3 className="text-center text-3xl font-medium underline capitalize">
        signup for newsletter
      </h3>

      <div className="w-1/2 m-auto h-20 px-2 py-2 bg-sky-900 mt-4 rounded-md">
        <form className="flex gap-3 items-center justify-center text-white">
          <label htmlFor="email" className="text-2xl capitalize ">
            email
          </label>
          <input type="text" className="px-2 py-2 rounded-md w-1/2" />
          <button
            className="px-4 py-2 rounded-md bg-slate-300 text-xl"
            type="button"
          >
            submit
          </button>
        </form>
      </div>
    </Main>
  );
};

export default Signup;
