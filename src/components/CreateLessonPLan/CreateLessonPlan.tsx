"use client";

// import {useLessonPlanStore} from "../../store";

import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import Toast from "../Toast/Toast";

// import React from "react";
import {useState} from "react";

import {useRouter} from "next/navigation";

export default function CreateLessonPlan() {
  const router = useRouter();

  const [lessonPlanTitle, setLessonPlanTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("A0");

  const handleLessonPlanLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLevel(value);
  };
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLessonPlanTitle(value);
  };
  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setDescription(value);
  };

  const ResetContent = () => {
    setLessonPlanTitle("");
    setDescription("");
    setLevel("");
  };

  const submitData = async (e: React.FormEvent) => {
    e.preventDefault();
    let response;
    try {
      const body = {
        title: lessonPlanTitle,
        level: level,
        description: description,
      };
      response = await fetch("/api/courses/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    } finally {
      Toast(response!.status);
      ResetContent();
      router.refresh();
    }
    return response;
  };

  return (
    <div className="flex justify-center flex-col w-full alignItemsCenter">
      <ToastContainer position="top-center" autoClose={5000} />
      <div className="Form p-4">
        <form className="alignSelfCenter flex flex-col" onSubmit={submitData}>
          <label htmlFor="level">Level</label>
          <select
            id="level"
            className="select select-bordered w-full max-w-xs"
            onChange={handleLessonPlanLevel}
            value={level}>
            {/* <option value="Any Level">Any Level</option> */}
            <option value="A0">A0</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
          </select>
          <label>Course Title</label>
          <input
            minLength={1}
            required={true}
            id="lessonPlanTitle"
            className="input input-bordered w-full max-w-xs"
            type="text"
            onChange={handleChangeTitle}
            placeholder={"Course Title"}
            value={lessonPlanTitle}
          />
          <label htmlFor="description">Description</label>
          <textarea
            minLength={1}
            required={true}
            id="description"
            className="textarea textarea-bordered w-full max-w-xs mb-1"
            onChange={handleChangeDescription}
            placeholder={"Lesson Plan Description"}
            value={description}
          />
          <button type="submit" className="btn btn-primary">
            Create Course
          </button>
        </form>
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}
