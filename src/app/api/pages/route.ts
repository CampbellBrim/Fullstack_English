import prisma from "../../../../prisma/db";
import {NextRequest, NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

export async function POST(req: NextRequest, res: NextResponse) {
  const {title, lessonId, content} = await req.json();

  const page = await prisma.page.create({
    data: {
      title: title,
      content: content,
      lesson: {
        connect: {
          id: lessonId,
        },
      },
    },
  });
  revalidatePath("/courses/[lessons]", "layout");
  return NextResponse.json({page});
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const {content, id, title} = await req.json();
  const page = await prisma.page.update({
    where: {
      id: id,
    },
    data: {
      content: {
        set: content,
      },
      title: title,
    },
    include: {
      lesson: true,
    },
  });
  revalidatePath("/courses/[lessons]", "layout");

  return NextResponse.json({page});
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const {id} = await req.json();
  const page = await prisma.page.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/courses/[lessons]", "layout");
  return NextResponse.json({page});
}
