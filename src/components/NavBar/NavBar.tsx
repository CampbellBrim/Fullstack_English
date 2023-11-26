import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <details className="dropdown mb-32 md:hidden">
        <summary className="m-1 btn">Menu</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-300 rounded-box w-52">
          <li className="">
            <Link className=" link-primary" href={"/"}>
              Home
            </Link>
          </li>
          <li className="">
            <Link className=" link-primary" href={"/courses"}>
              Courses
            </Link>
          </li>
          <li className="">
            <Link className=" link-primary" href={"/create/lessonPlan"}>
              Create Content
            </Link>
          </li>
        </ul>
      </details>
      <nav className="dropdown hidden md:inline-flex navbar border-b">
        <div className="navbar-center ">
          <ul className="menu hidden md:inline-flex md:menu-horizontal  px-1">
            <li className="">
              <Link className=" link-primary" href={"/"}>
                Home
              </Link>
            </li>
            <li className="">
              <Link className=" link-primary" href={"/courses"}>
                Courses
              </Link>
            </li>
            <li className="">
              <Link className=" link-primary" href={"/create/lessonPlan"}>
                Create Content
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
