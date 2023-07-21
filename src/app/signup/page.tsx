"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const SignupPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>SignUp</h1>
      <br />
      <label htmlFor="username">Username</label>
      <input
        className="rounded-md p-2 BORDER border-gray-300 MB-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />

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
        onClick={onSignup}
        className="mt-4 border text-lg rounded-md p-2 mb-4 hover:bg-white hover:text-black transition-all duration-200"
      >
        SignUp here
      </button>
      <Link
        href="/login"
        className=" border p-2 rounded-md text-lg mb-4 hover:bg-white hover:text-black transition-all duration-200"
      >
        Visit LogIn Page
      </Link>
    </div>
  );
};

export default SignupPage;
