"use client";

// import {useGeneralStore} from "@/store";
import {useRouter, usePathname} from "next/navigation";

export default function CreateAll() {
  // const planLessonPage = useGeneralStore((state) => state.planLessonPage);
  const router = useRouter();
  const url = usePathname();

  const getLastSegmentUrl = () => {
    const lastSegment = url.split("/").pop();
    return lastSegment;
  };

  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let eventValue = e.target.value;
    if (eventValue === "lessonPlan") {
      router.push("/create/lessonPlan");
    } else if (eventValue === "lesson") {
      router.push("/create/lesson");
    } else if (eventValue === "page") {
      router.push("/create/page");
    }
  };

  return (
    <>
      <div className="flex justify-center flex-col w-full py-1">
        <label htmlFor="type" className="w-fit alignSelfCenter text-3xl py-1">
          Create Course, Lesson or Page
        </label>
        <select
          id="type"
          className="select select-bordered w-fit alignSelfCenter "
          defaultValue={getLastSegmentUrl()}
          onChange={handleType}>
          <option value={"lessonPlan"}>Lesson Plan</option>
          <option value={"lesson"}>Lesson</option>
          <option value={"page"}>Page</option>
        </select>
      </div>
    </>
  );
}
