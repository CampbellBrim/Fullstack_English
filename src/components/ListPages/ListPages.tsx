"use client";

import {useParams, usePathname} from "next/navigation";
import {useRouter} from "next/navigation";

// import {PrismaClient} from "@prisma/client";
// import Image from "next/image";
// import {ReactNode} from "react";

type PropsSimpleDisplay = {
  page: number;
  title: string;
};

function SimpleDisplay(props: PropsSimpleDisplay) {
  const {page, title} = props;
  const path = usePathname();
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const key = e.currentTarget.getAttribute("key");
    router.push(`${path}/${page}`);
  };
  return (
    <div onClick={handleClick}>
      <p>title: {title}</p>
    </div>
  );
}

type Props = {
  lesson: {
    id: number;
    title: string;
    learningObjective: string;
    content: [];
  };
};

export default function ListPages(props: any) {
  const lesson = props.lesson;
  const path = usePathname();
  const router = useRouter();

  return (
    <>
      <p>title: {JSON.stringify(props.data.title)}</p>
      <p>learning objectve: {JSON.stringify(props.data.learningObjective)}</p>
      <p>pages: {JSON.stringify(props.data.content.length)}</p>
      {props.data.content.map((page: any, index: any) => {
        return (
          // <div key={index} onClick={handleClick}>
          //   <p>title: {JSON.stringify(page.title)}</p>
          // </div>
          <SimpleDisplay key={index} page={index} title={page.title} />
        );
      })}
    </>
  );
}
