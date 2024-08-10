"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <img
            src={session.user?.image as string}
            alt="Profile Picture"
            className="rounded-full h-20 w-20"
          />
          <h1 className="text-3xl text-green-500 font-bold">
            Welcome Back {session.user?.name}
          </h1>
          <p className="text-2xl font-semibold">{session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="border border-black rounded-lg px-5 py-1 bg-red-700"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-red-500 font-bold">
            You are not Logged In
          </h1>
          <div className="flex space-x-5">
            <button
              onClick={() => signIn("google")}
              className="border border-black rounded-lg px-5 py-1"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="border border-black rounded-lg bg-green-600 px-5 py-1"
            >
              Sign in with GitHub
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
