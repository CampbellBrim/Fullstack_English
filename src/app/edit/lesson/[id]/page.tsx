import EditLesson from "@/components/EditLesson/EditLesson";
import prisma from "../../../../../prisma/db";

export default async function Page({params}: {params: {id: string}}) {
  const id = params.id;

  const getLessonPlan = async (id: string) => {
    let lessonPlan;
    try {
      lessonPlan = await prisma.lesson.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error(error);
    }
    return lessonPlan;
  };

  const Lesson: any = await getLessonPlan(id);
  return (
    <div className="flex w-full flex-col alignItemsCenter">
      <div className="w-fit rounded-md">
        <EditLesson
          options={{
            id: Lesson.id,
            title: Lesson.title,
            learningObjective: Lesson.learningObjective,
          }}
        />
      </div>
    </div>
  );
}
