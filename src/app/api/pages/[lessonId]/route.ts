import {NextRequest, NextResponse} from "next/server";
import prisma from "../../../../../prisma/db";

export async function GET(
  req: NextRequest,
  {params}: {params: {lessonId: string}}
) {
  const lessonId = params.lessonId;
  let lesson;
  try {
    lesson = await prisma.lesson.findUnique({
      where: {
        id: lessonId,
      },
      include: {
        content: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
  //   return lesson;
  return NextResponse.json({lesson});
}
