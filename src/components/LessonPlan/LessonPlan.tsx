"use client";

import style from "./LessonPlan.module.css";

// https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating

// i think next/router is better
// import { useRouter } from 'next/router';
import {useRouter} from "next/navigation";

type Lesson = {
  id?: string;
  title: string;
  level: string;
  lessons?: any;
};

type LessonPlanProps = {
  // authorId: string
  lesson: Lesson;
};

export default function LessonPlan(props: LessonPlanProps) {
  const {title, level, id, lessons} = props.lesson;

  const router = useRouter();

  // console.log(props)
  const handleClick = () => {
    // takes you to a lesson
    router.push(`/LessonPlans/${id}`);
  };

  return (
    <div className={style.container} onClick={handleClick} id={id}>
      <p>title: {title}</p>
      <p>level: {level}</p>
      <p>number of lessons: {Object.keys(lessons).length}</p>
      <p>{id}</p>
    </div>
  );
}
