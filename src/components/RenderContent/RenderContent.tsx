"use client";

import {useStore} from "@/store";
import {usePathname} from "next/navigation";
import JsonToHtml from "../JsonToHtml/JsonToHtml";
import HeadingOneComp from "../StringToHtmlComponents/HeadingOneComp/HeadingOneComp";
import HeadingTwoComp from "../StringToHtmlComponents/HeadingTwoComp/HeadingTwoComp";
import ParagraphComp from "../StringToHtmlComponents/ParagraphComp/ParagraphComp";
import style from "./RenderContent.module.css";

type Props = {
  page: any;
};

export default function RenderContent(props: any) {
  const pagesString = useStore((state) => state.pages);
  //   console.log(pagesString);

  const path = usePathname();
  const getPageIndex = (arg: string) => {
    // const page = arg.split("/").pop();
    let urlArray = arg.split("/");
    let page = urlArray[urlArray.length - 1];
    let asInt = parseInt(page);
    return asInt;
  };

  const pages = props.page;
  //   console.log(pages);

  const currentPage = getPageIndex(path);
  const page = pages[currentPage];
  const content: JSON[] = page.content;

  //   console.log(pagesString);

  return (
    <div className={style.parent}>
      {content.map((input, index, array) => {
        let key;
        key = Object.keys(input);
        // console.log(key[0]);
        let content;
        content = Object.values(input);
        const stringContent = content.toString();
        if (key[0] === "h1") {
          return (
            <div key={index}>
              <HeadingOneComp content={stringContent} />
              <br />
            </div>
          );
        } else if (key[0] === "h2") {
          return (
            <div key={index}>
              <HeadingTwoComp content={stringContent} />
              <br />
            </div>
          );
        } else if (key[0] === "p") {
          return (
            <div key={index}>
              <ParagraphComp content={stringContent} />
              <br />
            </div>
          );
        }
      })}
    </div>
  );
}
