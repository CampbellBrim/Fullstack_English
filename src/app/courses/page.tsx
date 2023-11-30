import Course from "@/components/Course/Course";
import {LessonPlan as CourseType} from "@prisma/client";
import {headers} from "next/headers";

export default async function Page() {
  type FetchType = {
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

  const headersList = headers();
  const pathname = headersList.get("x-forwarded-host");

  const fetchData = async () => {
    let data;
    try {
      const response = await fetch(`https://${pathname}/api/courses`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Received data is not JSON: ", text);
      }
    } catch (error) {
      console.error(error);
    }
    return data;
  };

  const course: FetchType = await fetchData();
  if (course !== undefined && course !== null) {
    return (
      <div className="">
        <h1 className="text-3xl capitalizeFirst w-full text-center block">
          Courses
        </h1>
        <div className="flex justify-start">
          <div className="flex flex-wrap w-fit flex-col">
            {course.course.map((course: CourseType) => (
              <Course key={course.id} lesson={course} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <div>nothing here yet</div>;
}
