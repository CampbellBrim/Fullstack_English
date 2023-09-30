// import {json} from "stream/consumers";
// import prisma from "../../../../prisma/db";
// import {NextApiResponse, NextApiRequest} from "next";

// // export async function GET(req: Request, res: NextApiResponse) {
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const {title, lessonId} = req.body;
//   // console.log(title, lessonId);

//   const page = await prisma.page.create({
//     data: {
//       title: title,
//       lessonId: lessonId,
//       // lessonId,
//       // content,
//     },
//   });

//   //   const page = {title: "test", lessonId: 1};
//   const jsonPage = JSON.stringify(page);

//   return res.status(200).json(page);
//   // return NextResponse.json(users);
//   // return NextResponse.json(LessonPLans);
//   //   return jsonPage;
// }
