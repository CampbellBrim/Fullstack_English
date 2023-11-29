import PaginationControls from "@/components/PaginationControls/PaginationControls";
import RenderContent from "@/components/RenderContent/RenderContent";
import {headers} from "next/headers";
// import {usePageStore} from "@/store";
import {usePathname} from "next/navigation";
import prisma from "../../../../../../prisma/db";

type Params = {
  params: {
    page: string;
    pages: string;
  };
};

export default async function Page({params}: Params) {
  const headersList = headers();
  const pathname = headersList.get("x-forwarded-host");
  const fetchData = async (lessonId: string) => {
    let data;
    let response;
    try {
      // response = await fetch(`http://localhost:3000/api/pages/${lessonId}/`, {
      response = await fetch(
        // `${process.env.BASE_URL}/api/pages/${lessonId}/`, {
        // https://fullstack-english.vercel.app/api/courses
        `https://${pathname}/api/pages/${lessonId}/`,
        {
          method: "GET",
          headers: {"Content-Type": "application/json"},
          cache: "force-cache",
        }
      );
      data = await response.json();
    } catch (error) {
      console.error(error);
    }
    return data.lesson;
  };
  const data = await fetchData(`${params.pages}`);
  const pages = data?.content;
  const currentPage = parseInt(params.page);

  return (
    <div className="mb-20">
      <div className="flex justify-center">
        <div className="flex flex-wrap w-fit flex-row">
          <RenderContent className="w-full" page={pages} />
        </div>
      </div>

      <PaginationControls
        hasNextPage={
          data?.content.length && currentPage < data?.content.length - 1
            ? true
            : false
        }
        hasPreviousPage={currentPage > 0}></PaginationControls>
    </div>
  );
}
