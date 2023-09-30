import { PrismaClient } from "@prisma/client"
// import { v4 as uuidv4 } from 'uuid';

// const { v4: uuidv4} = require('uuid');

export type userProps = {
    name: string,
    email: string,
}

export type lessonPlanProps = {
    title: FormDataEntryValue,
    level: FormDataEntryValue,
    description: FormDataEntryValue,
    authorId?: FormDataEntryValue,
}


export const createUser = async (props: userProps) => {
    const prisma = new PrismaClient()
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'person@email.com',
            // posts: {
            //     create: { title: 'Hello World' },
            // },
        }
    })
}

// export const createLessonPlan = async (props: FormData) => {
//     // const {title, level, authorId, description } = props
//     const prisma = new PrismaClient()
//     const lessonPlan = await prisma.lessonPlan.create({
//         data: {
//             // title,
//             // level,
//             // description: description,
//             authorId: '1',
//             // authorId: authorId,
//         }
//     })
//     console.log(lessonPlan)
// }
