"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { link } from "fs";

const ProfilePage = () => {
  const router = useRouter();

  const [data, setData] = React.useState("Nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="p-3 mt-3 rounded bg-green-500">
        {data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>
        }
      </h2>
      <hr />

      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded transition-all duration-200"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="bg-green-500 hover:bg-green-800 mt-4 text-white font-bold py-2 px-4 rounded transition-all duration-200"
      >
        GetUser Details
      </button>
    </div>
  );
};

export default ProfilePage;
