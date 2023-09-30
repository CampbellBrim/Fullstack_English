import prisma from "../../../../prisma/db";
// import {NextApiResponse, NextApiRequest} from "next";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const {title, authorId} = await req.json();

  const page = await prisma.lesson.create({
    data: {
      title: title,
      author: {
        connect: {
          id: authorId,
        },
      },
    },
  });
  return NextResponse.json({page});
}

// update list of lessons
// export async function PUT(req: NextRequest, res: NextResponse) {
//   const {id, title} = await req.json();
//   // const { id, title, content } = await req.json();
//   const page = await prisma.page.update({
//     where: {
//       id: id,
//     },
//     data: {
//       title: title,
//       // content: content,
//     },
//   });
//   return NextResponse.json({page});
// }

export async function DELETE(req: NextRequest, res: NextResponse) {
  const {id} = await req.json();
  const page = await prisma.lesson.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({page});
}
