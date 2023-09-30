// import CreateForm, { CreateFormProps, InputType } from "@/components/Create/CreateForm";
import FormInputs from "@/components/Create/CreateForm";
import CreateForm from "@/components/Create/CreateForm";
import Preview from "@/components/Preview/Preview";
// import dynamic from "next/dynamic";

export enum InputType {
    ShortString = 'ShortString',
    TextBox = 'TextBox'
}

type Inputs = {
    [key: string]: InputType
}

export type CreateFormProps = Inputs[]

const createLesson = async (formData: FormData) => {
    'use server'
    const title = formData.get('title')
    const level = formData.get('level')
    if (title && level) {
        
        const Data = {
            title: title.toString(),
            level: level.toString(),
            authorId: '153f3bed-f64a-4e44-a932-10461307aaa1',
        }
        const createdLesson = await prisma.lessonPlan.create({
            data: Data,
        })
        console.log(createdLesson)
    }
}

export default function Page() {

    const arg: CreateFormProps =  [
            {'title': InputType.ShortString},
            {'description': InputType.TextBox},
            {'reason?': InputType.ShortString},
        ]
    

    

    return (
    <>
    <form action={createLesson}>

    {/* <CreateForm inputs={arg} key={1} /> */}
    <FormInputs inputs={arg} key={1} />
    </form>
    {/* <Preview /> */}

    
    </>
    )
}