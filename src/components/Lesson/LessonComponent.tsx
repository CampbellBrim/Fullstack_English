"use client";

import Image from "next/image";

import {useRouter, usePathname} from "next/navigation";

type Props = {
  lesson: {
    id: number;
    title: string;
    learningObjective: string;
    content: [];
  };
};

export default function LessonComponent(props: any) {
  const lesson = props.lesson;
  const path = usePathname();

  const router = useRouter();
  const handleClick = () => {
    router.push(`${path}/${lesson.id}`);
  };
  //
  // List lessons
  //

  return (
    <div onClick={handleClick}>
      <h1>{lesson.title}</h1>
      <h2>lesson id: {JSON.stringify(lesson.id)}</h2>
      <p>Learning Objective: {JSON.stringify(lesson.learningObjective)}</p>
      <p>number of pages: {JSON.stringify(lesson.content.length)}</p>
    </div>
  );
}
