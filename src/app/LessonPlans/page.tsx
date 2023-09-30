// import { PrismaClient } from "@prisma/client"
import LessonPlan from "@/components/LessonPlan/LessonPlan";
import prisma from "../../../prisma/db";
// import {GET} from "../api/users/route";

// the lesson plans page
async function getData() {
  // const prisma = new PrismaClient()
  let lessons;
  try {
    // lessons = await prisma.lessonPlan.findMany()
    lessons = await prisma.lessonPlan.findMany({
      include: {
        lessons: true,
      },
    });
  } catch (error) {
    console.error(error);
    // } finally {
    //     await prisma.$disconnect()
  }
  return lessons;
}

export default async function Page() {
  const data = await getData();
  // const data = await GET();
  // console.log(data);
  // const lessons = data.lessons
  return (
    <div className="container">
      <h1>listing lesson plans</h1>
      <>
        {data?.map((lesson) => (
          <LessonPlan key={lesson.id} lesson={lesson} />
        ))}
        {/* <p>{JSON.stringify(data)}</p> */}
      </>
    </div>
  );
}
