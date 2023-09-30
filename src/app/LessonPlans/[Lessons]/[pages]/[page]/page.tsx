import PaginationControls from "@/components/PaginationControls/PaginationControls";
import RenderContent from "@/components/RenderContent/RenderContent";
import {useStore} from "@/store";
import {usePathname} from "next/navigation";
import prisma from "../../../../../../prisma/db";

async function getData(id: string) {
  let lesson;
  try {
    // lessons = await prisma.lessonPlan.findMany()
    // lesson = await prisma.Lesson.findUnique({
    lesson = await prisma.lesson.findUnique({
      where: {
        id: id,
      },
      include: {
        content: true,
      },
    });
  } catch (error) {
    //   console.error(error);
    // } finally {
    //     await prisma.$disconnect()
  }
  return lesson;
}

type Params = {
  params: {
    page: string;
    pages: string;
  };
};

export default async function Page({params}: Params) {
  const data = await getData(`${params.pages}`);
  const pages = data?.content;
  const currentPage = parseInt(params.page);
  console.log(pages);

  return (
    <>
      <RenderContent page={pages} />
      <PaginationControls
        // hasNextPage={end < data.length}
        hasNextPage={
          data?.content.length && currentPage < data?.content.length - 1
            ? true
            : false
        }
        hasPreviousPage={currentPage > 0}></PaginationControls>
    </>
  );
}
