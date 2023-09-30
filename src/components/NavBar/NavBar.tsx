// type Props = {
//     children: React.ReactNode
// }

import Link from "next/link";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={style.navStyle}>
      {/* <h1>placeholder nav</h1> */}
      <ul className={style.ulStyle}>
        <li className={style.liSpacing}>
          <Link className={style.linkStyle} href={"/"}>
            home
          </Link>
        </li>
        <li className={style.liSpacing}>
          <Link className={style.linkStyle} href={"/LessonPlans"}>
            lesson plans
          </Link>
        </li>
        {/* <li className={style.liSpacing}>
          <Link className={style.linkStyle} href={"/createLessonPlan"}>
            createLessonPlan
          </Link>
        </li> */}
        {/* <li className={style.liSpacing}>
          <Link className={style.linkStyle} href={"/Pagination"}>
            Pagination
          </Link>
        </li> */}
        {/* <li className={style.liSpacing}>
          <Link className={style.linkStyle} href={"/createLessons"}>
            Create Lessons
          </Link>
        </li> */}
        <li className={style.liSpacing}>
          <Link className={style.linkStyle} href={"/createContent"}>
            Create Content
          </Link>
        </li>
        <li className={style.liSpacing}>
          <Link className={style.linkStyle} href={"/manageContent"}>
            manageContent
          </Link>
        </li>
      </ul>
    </nav>
  );
}
