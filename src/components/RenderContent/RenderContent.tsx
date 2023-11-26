"use client";

import {usePathname} from "next/navigation";
import HeadingOneComp from "../StringToHtmlComponents/HeadingOneComp/HeadingOneComp";
import HeadingTwoComp from "../StringToHtmlComponents/HeadingTwoComp/HeadingTwoComp";
import ParagraphComp from "../StringToHtmlComponents/ParagraphComp/ParagraphComp";

export default function RenderContent(props: any) {
  const path = usePathname();
  const getPageIndex = (arg: string) => {
    let urlArray = arg.split("/");
    let page = urlArray[urlArray.length - 1];
    let asInt = parseInt(page);
    return asInt;
  };

  // const returnPreviousPage = (arg: string) => {
  //   let urlArray = arg.split("/");
  //   urlArray.splice(-1, 1);
  //   let newUrl = urlArray.join("/");
  //   return newUrl;
  // };

  const pages = props.page;
  const currentPage = getPageIndex(path);
  const page = pages[currentPage];
  const content: JSON[] = page.content;

  return (
    <div className="prose max-w-lg py-0 mx-auto mt-5 ">
      <div className="w-full m-0 text-left">
        {content.map((input, index, array) => {
          let key;
          key = Object.keys(input);
          let content;
          content = Object.values(input);
          const stringContent = content.toString();
          if (key[0] === "h1") {
            return (
              <div key={index} className="w-full">
                <HeadingOneComp content={stringContent} />
              </div>
            );
          } else if (key[0] === "h2") {
            return (
              <div key={index} className="w-full">
                <HeadingTwoComp content={stringContent} />
              </div>
            );
          } else if (key[0] === "p") {
            return (
              <div key={index} className="w-full">
                <ParagraphComp content={stringContent} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
