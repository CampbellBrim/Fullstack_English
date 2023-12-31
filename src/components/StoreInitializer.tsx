"use client";

import {useRef} from "react";
import {useLessonPlanStore} from "@/store";

type lessonPlans = {
  id: string;
  title: string;
  level: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
};
export default function StoreInitializer(lessons: {lessons: lessonPlans}) {
  const initialized = useRef(false);
  const lessonPlans = lessons.lessons;
  if (!initialized.current) {
    useLessonPlanStore.setState({lessonPlans: [lessonPlans]});
    initialized.current = true;
  }
  return null;
}
