import CreateContent from "@/components/CreateContent/CreateContent";
import prisma from "../../../../prisma/db";
import NavForCreate from "@/components/NavForCreate/NavForCreate";

export default async function Page() {
  async function getData() {
    let lessons;
    try {
      lessons = await prisma.lesson.findMany();
    } catch (error) {
      console.error(error);
    }
    return lessons;
  }
  const data = await getData();
  return (
    <div className="flex flex-col h-full">
      <NavForCreate />
      <CreateContent lessonsToChooseFrom={data} />
      {/* <h1>create content</h1> */}
    </div>
  );
}
