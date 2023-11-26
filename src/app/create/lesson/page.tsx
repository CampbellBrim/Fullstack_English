import CreateLesson from "@/components/CreateLesson/CreateLesson";
import prisma from "../../../../prisma/db";
import NavForCreate from "@/components/NavForCreate/NavForCreate";

export default async function Page() {
  async function getData() {
    let lessonPlans;
    try {
      lessonPlans = await prisma.lessonPlan.findMany({});
    } catch (error) {
      console.error(error);
    }
    return lessonPlans;
  }
  const lessonPlans = await getData();
  return (
    <>
      <NavForCreate />
      <CreateLesson lessonPlans={lessonPlans} />
    </>
  );
}
