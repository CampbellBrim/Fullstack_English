"use server";

import Preview from "@/components/Preview/Preview";
import style from "./page.module.css";
import {useStore} from "@/store";
import CreateForm from "@/components/Create/CreateForm";
import ServerButton from "@/components/ServerButton/ServerButton";
import CreateContent from "@/components/CreateContent/CreateContent";
import prisma from "../../../prisma/db";

export default async function Page() {
  // enum InputType {
  //   ShortString = "ShortString",
  //   TextBox = "TextBox",
  //   Image = "Image",
  //   Option = "Option",
  // }
  enum InputType {
    h1 = "h1",
    h2 = "h2",
    Paragraph = "Paragraph",
    Image = "Image",
    Option = "Option",
    Content = "Content",
  }

  async function getData() {
    // const prisma = new PrismaClient()
    let lessons;
    try {
      // lessons = await prisma.lessonPlan.findMany()
      lessons = await prisma.lesson.findMany();
    } catch (error) {
      console.error(error);
      // } finally {
      //     await prisma.$disconnect()
    }
    return lessons;
  }
  const data = await getData();
  // const lessons = !data ? [] : data;
  // console.log(data);

  return (
    <div className={style.row}>
      <div className={style.form}>
        <h2>Create Lesson Page</h2>
        {/* <CreateForm inputs={[{ Content: InputType.ShortString }]} /> */}
        <CreateContent
          inputs={[{h1: InputType.h1}]}
          // inputs={[{Content: InputType]}
          // inputs={[{Content: {"h1": "text here"}}]}
          // pass list of lessons to choose from
          // lessonsToChooseFrom={data ? data }
          lessonsToChooseFrom={data}
        />
      </div>

      <div className={style.column}>
        <Preview
          html={"stringContent"}
          // html={stringContent}
        />
      </div>
    </div>
  );
}
