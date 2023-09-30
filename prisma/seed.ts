// prisma/seed.ts

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // const lessons = await prisma.lesson.findMany()
  //   await prisma.LessonPlan.
  //   await prisma.
  //   await prisma.user.createMany({
  //     data: users,
  //   })
  // await prisma.Page.deleteMany({});
  // await prisma.Lesson.deleteMany({
  //   include: {
  //     Page: true,
  //   },
  // });
  // await prisma.LessonPlan.deleteMany({});
  // await prisma.LessonPlan
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// const json = [
// "  {
//     "image": "testurl"
//   },
//   {
//     "text": "testtext"
//   },
//   {
//     "video": "testvideo"
//   },
//   {
//     "audio": "testaudio"
//   },
//   {
//     "text": "testtext2"
//   }"
// ]
