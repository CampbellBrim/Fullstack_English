import Link from "next/link";

export default async function Page() {
  return (
    <div className="prose">
      <h1>Update Or Delete Lesson Plans, Lessons or Pages</h1>
      <div>
        <ul>
          <li>
            <Link href={"/manageContent"}>Manage Lesson Plans</Link>
          </li>
          <li>
            <Link href={"/manageContent"}>Manage Lessons</Link>
          </li>
          <li>
            <Link href={"/manageContent"}>Manage Pages</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
