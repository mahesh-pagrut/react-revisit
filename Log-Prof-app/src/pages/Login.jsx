import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { getAllUsers } from "../services/crudApi";
import profile from "./Profile";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const users = await getAllUsers();
      const foundUser = users.find((user) => user.email === email);

      if (foundUser) {
        setUser(foundUser);
      } else {
        setErrorMsg(
          "User no found. fill the information on Profile page and continue"
        );
        setUser({ email });
      }
      navigate("/profile");
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMsg("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
          Login
        </h2>

        <label className="block mb-2 font-medium">Email Address</label>
        <input
          type="email"
          className="w-full border border-gray-300 px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {errorMsg && <p className="text-sm text-red-500 mb-4">{errorMsg}</p>}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
