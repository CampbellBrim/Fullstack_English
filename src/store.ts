import {create} from "zustand";
import {LessonPlan as lessonPlanType} from "@prisma/client";

// type Input = {
//   [key: string]: string;
// };

// export const usePageStore = create<{
//   title: string;
//   inputsArray: Input[];
//   contentType: string;
//   content: Input[];
//   contentInForm: string;
//   pages: string[];
//   activeLesson: string;
//   addToArray: (input: Input) => void;
// }>((set) => ({
//   content: [],
//   title: "",
//   contentInForm: "",
//   pages: [],
//   contentType: "h1",
//   inputsArray: [],
//   activeLesson: "",
//   addToArray: (input: Input) => {
//     set((state) => ({
//       content: [...state.content, input],
//     }));
//   },
// }));
// export const useLessonPlanStore = create<{
//   lessonPlanTitle: string;
//   description: string;
//   level: string;
// }>((set) => ({
//   lessonPlanTitle: "",
//   description: "",
//   level: "",
// }));

// export const useLessonStore = create<{
//   learningObjective: string;
//   title: string;
//   lessonPlanId: string;
// }>((set) => ({
//   learningObjective: "",
//   title: "",
//   lessonPlanId: "",
// }));

// export const useGeneralStore = create<{
//   planLessonPage: "LessonPlan" | "Lesson" | "Page";
// }>((set) => ({
//   planLessonPage: "LessonPlan",
// }));
// type prop = [
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
  // learningObjective: string;
  // title: string;
  // lessonPlanId: string;
  lessonPlans: lessonPlanType[];
  updateLessonPlans: (lessonPlans: lessonPlanType[]) => void;
}>((set) => ({
  // learningObjective: "",
  // title: "",
  // lessonPlanId: "",
  lessonPlans: [],
  updateLessonPlans: (lessonPlans: lessonPlanType[]) => {
    set((state) => ({
      lessonPlans: lessonPlans,
    }));
  },
}));
