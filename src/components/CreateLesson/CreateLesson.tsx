"use client";

import Toast from "../Toast/Toast";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ChangeEvent, useState} from "react";
import {useRouter} from "next/navigation";

type Props = {
  lessonPlans:
    | {
        id: string;
        title: string;
        level: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
      }[]
    | undefined;
};

export default function CreateLesson(props: Props) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [learningObjective, setLearningObjective] = useState("");
  const {lessonPlans} = props;
  const [chosenLessonId, setChosenLessonId] = useState(lessonPlans![0].id);

  const handleLessonTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleLearningObjective = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setLearningObjective(value);
  };

  const submitData = async (e: React.FormEvent) => {
    e.preventDefault();
    let response;
    try {
      const body = {
        learningObjective: learningObjective,
        title: title,
        lessonPlan: chosenLessonId,
      };
      response = await fetch("/api/lessons", {
        method: "POST",
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

  const handleLessonPlan = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setChosenLessonId(value);
  };

  return (
    <div className=" flex justify-center w-full">
      <ToastContainer position="top-center" />
      <form
        className="prose flex flex-col  justify-center Form p-4"
        onSubmit={submitData}>
        <label>Choose Course To Add Lesson To</label>
        <select
          id="lesson"
          className="select select-bordered w-full max-w-xs"
          onChange={handleLessonPlan}>
          {" "}
          {lessonPlans!.map((lessonPlan: any) => {
            return (
              <option key={lessonPlan.id} value={lessonPlan.id}>
                {lessonPlan.title}
              </option>
            );
          })}
        </select>
        <label htmlFor="title">Title</label>
        <input
          minLength={1}
          required
          id="title"
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={title}
          placeholder="Lesson Title"
          onChange={handleLessonTitle}></input>
        <label htmlFor="description">Description</label>
        <textarea
          minLength={1}
          required
          id="description"
          className="textarea textarea-bordered mb-1"
          value={learningObjective}
          placeholder="Learning Objective"
          onChange={handleLearningObjective}></textarea>
        <button type="submit" className="btn btn-primary">
          Create Lesson
        </button>
      </form>
    </div>
  );
}
