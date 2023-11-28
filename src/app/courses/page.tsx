import Course from "@/components/Course/Course";
// import prisma from "../../../prisma/db";
// import {Prisma} from "@prisma/client";
import {LessonPlan as CourseType} from "@prisma/client";
// import {GET} from "../api/courses/route";
import {useLessonPlanStore} from "@/store";

export default async function Page() {
  type ReturnType = {
    course: [
      {
        id: string;
        title: string;
        level: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        lessons: [
          {
            id: string;
            title: string;
            learningObjective: string;
            lessonPlanId: string;
            authorId: string;
            createdAt: Date;
            updatedAt: Date;
          }
        ];
      }
    ];
  };
  const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
  const fetchData = async () => {
    let data;
    let response;
    try {
      // response = await fetch("http://localhost:3000/api/courses", {
      response = await fetch(`${BASE_URL}/api/courses/`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      });
      data = await response.json();
      useLessonPlanStore.setState({lessonPlans: [data]});
    } catch (error) {
      console.error(error);
    }
    return data;
  };

  const {course}: ReturnType = await fetchData();
  return (
    <div className="">
      <h1 className="text-3xl capitalizeFirst w-full text-center block">
        Courses
      </h1>
      <div className="flex justify-start">
        <div className="flex flex-wrap w-fit flex-col">
          {course!.map((course: CourseType) => (
            <Course key={course.id} lesson={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
