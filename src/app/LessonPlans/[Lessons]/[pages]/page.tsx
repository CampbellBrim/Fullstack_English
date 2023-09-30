// stuff here
import ListPages from "../../../../components/ListPages/ListPages";
import prisma from "../../../../../prisma/db";
import {useStore} from "@/store";

async function getData(id: string) {
  let lesson;
  try {
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

export default async function Page({params}: {params: {pages: string}}) {
  const data = await getData(`${params.pages}`);
  return (
    <>
      <h1>pages for specific lesson</h1>
      {/* <p>content: {content}</p> */}
      <ListPages data={data}></ListPages>
    </>
  );
}
