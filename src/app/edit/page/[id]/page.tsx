import prisma from "../../../../../prisma/db";
import NewEditPage from "@/components/EditPage/EditPage";

// type Input = {
//   [key: string]: string;
// };

export default async function Page({params}: {params: {id: string}}) {
  const id = params.id;
  async function getData() {
    let lessons;
    try {
      lessons = await prisma.page.findUnique({
        where: {
          id: id,
        },
        include: {
          lesson: {
            include: {
              content: true,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      return lessons;
    }
  }

  const data = await getData();
  const title = data!.title;
  const content = data!.content;
  const pagesArray = data!.lesson.content;
  let lessonId = data!.lesson.id;

  return (
    <>
      <header className="w-full h-10 flex flex-row justify-center">
        <h1 className="w-fit alignSelfCenter text-3xl py-1">Edit Page</h1>
      </header>
      <NewEditPage
        titleProp={title}
        content={content}
        lesson={pagesArray}
        id={id}
        lessonId={lessonId}
      />
    </>
  );
}
