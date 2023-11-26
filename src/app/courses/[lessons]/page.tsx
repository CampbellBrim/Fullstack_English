import {Prisma} from "@prisma/client";
import prisma from "../../../../prisma/db";
import LessonComponent from "@/components/Lesson/LessonComponent";
import {Lesson as LessonType} from "@prisma/client";
// import { usePathname } from "next/navigation";

export default async function Page({params}: {params: {lessons: string}}) {
  const fetchData = async (lessonId: string) => {
    let data;
    let response;
    try {
      // response = await fetch(`http://localhost:3000/api/courses/${lessonId}/`, {
      response = await fetch(
        `${process.env.BASE_URL}/api/courses/${lessonId}/`,
        {
          method: "GET",
          headers: {"Content-Type": "application/json"},
        }
      );
      data = await response.json();
    } catch (error) {
      console.error(error);
    }
    return data.response;
  };
  const lessons: {lessons: LessonType[]} = await fetchData(params.lessons);

  if (lessons.lessons.length === 0) {
    return (
      <div className="flex w-full justify-center">
        <h1 className="w-fit alignSelfCenter text-3xl py-1">No Lessons</h1>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex w-full justify-center">
        <h1 className="w-fit alignSelfCenter text-3xl py-1">Lessons</h1>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-wrap w-fit flex-col">
          {lessons?.lessons.map((lesson: any) => (
            <LessonComponent key={lesson.id} lesson={lesson}></LessonComponent>
          ))}
        </div>
      </div>
    </div>
    // <div>{JSON.stringify(lessons)}</div>
  );
}
