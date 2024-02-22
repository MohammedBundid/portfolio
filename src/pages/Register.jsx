import { useState } from "react";
import Main from "../components/ui/Main";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
        await createUser(email, password)
        navigate('/account')
    } catch (e) {
        setError(e.message)
        console.log(e.message)
    }
  }

  return (
    <Main>
      <div className="w-1/2 m-auto h-screen">
        <form onSubmit={handleSubmit} className="w-1/2 m-auto h-1/2 flex flex-col gap-2 rounded-md bg-sky-700/30 px-2 py-2 ">
          <label className="text-xl">email</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="px-2 py-1 rounded-md" />
          <label className="text-xl">password</label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="px-2 py-1 rounded-md" />
          <button className="px-2 py-2 w-3/4 m-auto rounded-md">
            Register
          </button>
        </form>
        <div className="text-2xl">{error}</div>
      </div>
    </Main>
  );
};

export default Register;
