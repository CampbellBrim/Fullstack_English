"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-center w-full">
      <p>
        <Link className="link-primary underline" href={"/create/lessonPlan"}>
          Create a Course
        </Link>{" "}
        and view it in the{" "}
        <Link className="link-primary underline" href={"/courses"}>
          Courses
        </Link>{" "}
        page
      </p>
    </div>
  );
}
