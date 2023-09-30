
// 'use server'
// import Create from '@/components/Create/Create'
import CreateForm from '@/components/Create/CreateForm'
import { PrismaClient } from '@prisma/client'
import prisma from '../../../prisma/db'
// import prisma from '@/'

// import create function here
// import { createLessonPlan, lessonPlanProps } from '@/utils/createFunctions'

export default async function CreateLessonPlan() {
    
    // const handleSubmit = async (formData: FormData) => {
        async function createLessonPlan(formData: FormData) {
            'use server'
            // const title = formData.get('title')
            // const level = formData.get('level')
            // if (title && level) {
                
            //     const Data = {
            //         title: title.toString(),
            //         level: level.toString(),
            //         authorId: '153f3bed-f64a-4e44-a932-10461307aaa1',
            //     }
                 
                
            //     // description: formData.get('description'),
            //     // const prisma = new PrismaClient()
            //     const lessonPlan = await prisma.lessonPlan.create({
            //         data: Data,
            //     })
            //         console.log(lessonPlan)
            //     }
            console.log(formData)
        }
            

    return (
        <div className='Form'>

        <form action={createLessonPlan} className='createForm Form'>
            <label htmlFor="title">title</label>
            <input id='title' type="text" name="title" placeholder="Title" />
            <br />
            <label htmlFor="level">level</label>
            <input type="text" id='level' name="level" placeholder="Level"  />
            <br />
            <label htmlFor="description">description</label>
            <input type="text" id='description' name="description" placeholder="Description" />
            <br />
            <input type="submit" value="Submit" />
        </form>
        {/* <p>title: </p> */}
        </div>
    )
}

