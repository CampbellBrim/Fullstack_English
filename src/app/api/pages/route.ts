import prisma from "../../../../prisma/db";
// import {NextApiResponse, NextApiRequest} from "next";
import {NextRequest, NextResponse} from "next/server";

// export async function POST(req: Request, res: Response) {
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
  return NextResponse.json({page});
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const {id, title} = await req.json();
  // const { id, title, content } = await req.json();
  const page = await prisma.page.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      // content: content,
    },
  });
  return NextResponse.json({page});
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const {id} = await req.json();
  const page = await prisma.page.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({page});
}
