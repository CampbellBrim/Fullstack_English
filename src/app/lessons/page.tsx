import LessonPlan from "@/components/LessonPlan/LessonPlan";
import { PrismaClient } from "@prisma/client"

// the lesson plans page
async function getData() {
    const prisma = new PrismaClient()
    let lessons;
    try {
        // lessons = await prisma.lessonPlan.findMany()
        lessons = await prisma.lessonPlan.findMany()

    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
    }
    return lessons
  }
   
export default async function Page() {
    const data = await getData()   
    return(
        <div className="container">
            <h1>lessons</h1>
            <>
            {
                data?.map((lesson) => (
                    <LessonPlan id={lesson.id} 
                    level={lesson.level}
                    title={lesson.title}
                    // content={lesson.content}
                    ></LessonPlan>
                ))
            }
            </>
        </div>
        )
  }