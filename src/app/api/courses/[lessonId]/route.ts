import prisma from "../../../../../prisma/db";
import {NextRequest, NextResponse} from "next/server";

export async function GET(
  req: NextRequest,
  {params}: {params: {lessonId: string}}
) {
  const lessonId = params.lessonId;
  let response;
  try {
    response = await prisma.lessonPlan.findUnique({
      where: {
        id: lessonId,
      },
      include: {
        lessons: {
          include: {
            content: {
              orderBy: {
                order: "asc",
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json({response});
}
