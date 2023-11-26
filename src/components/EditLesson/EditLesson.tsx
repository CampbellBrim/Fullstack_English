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
    learningObjective: string;
  };
};

export default function EditLesson(props: Props) {
  const router = useRouter();
  const {id} = props.options;
  const [title, setTitle] = useState(props.options.title);
  const [learningObjective, setLearningObjective] = useState(
    props.options.learningObjective
  );
  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let response;
    try {
      const body = {
        id: id,
        title: title,
        learningObjective: learningObjective,
      };
      response = await fetch("/api/lessons", {
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
      <h1 className="w-fit alignSelfCenter text-3xl py-1">Edit Lesson</h1>
      <form className="flex flex-col w-fit Form p-4">
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
        <label htmlFor="learningObjective">Learning objective</label>
        <textarea
          name="learningObjective"
          id="learningObjective"
          className="input input-bordered w-full max-w-xs mb-1"
          value={learningObjective}
          onChange={(e) => setLearningObjective(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSave}>
          submit
        </button>
      </form>
    </div>
  );
}
