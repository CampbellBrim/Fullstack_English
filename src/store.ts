import {create} from "zustand";
import {LessonPlan as lessonPlanType} from "@prisma/client";

type lessonPlans = [
  lessons: {
    id: string;
    title: string;
    learningObjective: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
    lessonPlanId: string | null;
  }[] &
    lessonPlanType
];

export const useLessonPlanStore = create<{
  lessonPlans: lessonPlanType[];
  updateLessonPlans: (lessonPlans: lessonPlanType[]) => void;
}>((set) => ({
  lessonPlans: [],
  updateLessonPlans: (lessonPlans: lessonPlanType[]) => {
    set((state) => ({
      lessonPlans: lessonPlans,
    }));
  },
}));
