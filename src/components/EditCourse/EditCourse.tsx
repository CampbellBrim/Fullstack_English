"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

import Toast from "../Toast/Toast";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  options: {
    id: string;
    title: string;
    description: string;
    level: string;
  };
};

export default function EditCourse(props: Props) {
  const router = useRouter();
  const {id} = props.options;
  const [title, setTitle] = useState(props.options.title);
  const [description, setDescription] = useState(props.options.description);
  const [levelState, setLevelState] = useState(props.options.level);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let response;
    try {
      const body = {
        id: id,
        title: title,
        description: description,
        level: levelState,
      };
      response = await fetch("/api/courses", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    } finally {
      Toast(response!.status);
      router.refresh();
    }
  };
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  return (
    <div className="flex flex-col w-full alignItemsCenter">
      <ToastContainer position="top-center" />
      <h1 className="w-fit alignSelfCenter text-3xl py-1">Edit Course</h1>
      <form className="flex flex-col w-fit Form p-4" onSubmit={handleSave}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="input input-bordered w-full max-w-xs"
          value={title}
          onChange={handleTitle}
          minLength={1}
          required
        />
        <label htmlFor="level">Level</label>
        <select
          id="level"
          className="select marginBottom-7 select-bordered w-full max-w-xs"
          onChange={(e) => setLevelState(e.target.value)}
          value={levelState}>
          <option value="A0">A0</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="input input-bordered w-full max-w-xs mb-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}
