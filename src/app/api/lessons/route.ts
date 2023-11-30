import prisma from "../../../../prisma/db";
import {NextRequest, NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

export async function POST(req: NextRequest, res: NextResponse) {
  const {title, learningObjective, lessonPlan} = await req.json();

  const page = await prisma.lesson.create({
    data: {
      title: title,
      learningObjective: learningObjective,
      author: {
        connect: {
          id: process.env.AUTHOR_ID,
        },
      },
      LessonPlan: {
        connect: {
          id: lessonPlan,
        },
      },
    },
  });
  revalidatePath("/courses/", "layout");
  return NextResponse.json({page});
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const {id, title, learningObjective} = await req.json();
  const page = await prisma.lesson.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      learningObjective: learningObjective,
    },
  });
  revalidatePath(`/courses/${id}, layout`);
  return NextResponse.json({page});
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const {id} = await req.json();
  const page = await prisma.lesson.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/courses/[lessons]", "layout");
  return NextResponse.json({page});
}
