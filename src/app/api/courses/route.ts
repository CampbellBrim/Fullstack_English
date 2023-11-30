import prisma from "../../../../prisma/db";
import {NextRequest, NextResponse} from "next/server";
import {revalidatePath} from "next/cache";
// import {useLessonPlanStore} from "@/store";
// import { updateLessonPlan } from "@/store/lessonPlan";
import {useLessonPlanStore as lessonPlanStoreType} from "@/store";

export async function GET() {
  const course = await prisma.lessonPlan.findMany({
    include: {
      lessons: true,
    },
  });

  return NextResponse.json({course});
}

export async function POST(req: NextRequest, res: NextResponse) {
  const {title, level, description} = await req.json();

  const page = await prisma.lessonPlan.create({
    data: {
      title: title,
      level: level,
      description: description,
      author: {
        connect: {
          id: process.env.AUTHOR_ID,
        },
      },
    },
  });
  revalidatePath("/courses/", "layout");
  return NextResponse.json({page});
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const {id, title, description, level} = await req.json();
  const page = await prisma.lessonPlan.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      description: description,
      level: level,
    },
  });
  revalidatePath("/courses/", "layout");
  return NextResponse.json({page});
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const {id} = await req.json();
  const page = await prisma.lessonPlan.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/courses/", "layout");
  return NextResponse.json({page});
}
