// import LessonComponent from "@/components/Lesson/LessonComponent";
// import { PrismaClient } from "@prisma/client";
import prisma from "../../../../prisma/db";
import LessonComponent from "@/components/Lesson/LessonComponent";

async function getData(Lessons: string) {
  let lessons;
  try {
    // lessons = await prisma.lessonPlan.findMany()
    lessons = await prisma.lessonPlan.findUnique({
      where: {
        id: Lessons,
      },
      include: {
        lessons: {
          include: {
            content: true,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
    // } finally {
    //     await prisma.$disconnect()
  }
  return lessons;
}

export default async function Page({params}: {params: {Lessons: string}}) {
  // const router = useRouter()
  const lessons = await getData(`${params.Lessons}`);

  return (
    <div>
      <h1>list lessons from lesson plan</h1>
      {lessons?.lessons.map((lesson) => (
        <LessonComponent key={lesson.id} lesson={lesson}></LessonComponent>
      ))}
    </div>
  );
}
