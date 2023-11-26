import EditCourse from "@/components/EditCourse/EditCourse";
import prisma from "../../../../../prisma/db";

export default async function Page({params}: {params: {id: string}}) {
  const id = params.id;

  const getLessonPlan = async (id: string) => {
    let lessonPlan;
    try {
      lessonPlan = await prisma.lessonPlan.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error(error);
    }
    return lessonPlan;
  };

  const Course: any = await getLessonPlan(id);
  return (
    <div>
      <EditCourse
        options={{
          id: Course.id,
          description: Course.description,
          level: Course.level,
          title: Course.title,
        }}></EditCourse>
    </div>
  );
}
