"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>LogIn</h1>
      <br />

      <label htmlFor="email">E-mail</label>
      <input
        className="rounded-md p-2 BORDER border-gray-300 MB-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="rounded-md p-2 BORDER border-gray-300 MB-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        onClick={onLogin}
        className="mt-4 border text-lg rounded-md p-2 mb-4 hover:bg-white hover:text-black transition-all duration-200"
      >
        LogIn here
      </button>
      <Link
        href="/signup"
        className=" border p-2 rounded-md text-lg mb-4 hover:bg-white hover:text-black transition-all duration-200"
      >
        Visit SignUp Page
      </Link>
    </div>
  );
};

export default LoginPage;
