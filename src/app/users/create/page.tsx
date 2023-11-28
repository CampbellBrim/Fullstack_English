"use client";

import Toast from "@/components/Toast/Toast";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useState} from "react";

export default function Page() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let response;
    try {
      const body = {
        userName: userName,
        email: email,
      };
      response = await fetch("/api/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    } finally {
      Toast(response!.status);
    }
  };
  return (
    <div className="flex flex-row justify-center">
      <ToastContainer position="top-center" />
      <form onSubmit={handleSubmit} className="form flex flex-col">
        <label htmlFor="userName">username</label>
        <input
          className="input input-bordered"
          id="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}></input>
        <label htmlFor="email">email</label>
        <input
          className="input input-bordered"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
