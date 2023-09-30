"use client";

import HeadingOneComp from "@/components/StringToHtmlComponents/HeadingOneComp/HeadingOneComp";
import HeadingTwoComp from "@/components/StringToHtmlComponents/HeadingTwoComp/HeadingTwoComp";
import ParagraphComp from "@/components/StringToHtmlComponents/ParagraphComp/ParagraphComp";
import style from "./page.module.css";

type Props = {
  content: JSON[];
};

export default function Page(props: Props) {
  const {content} = props;
  // const contentToJs = JSON.parse(content);
  // const {content} = props;
  // const content = [
  //   {
  //     h1: "things",
  //   },
  //   {
  //     h2: "stuff",
  //   },
  //   {
  //     p: "another",
  //   },
  //   {
  //     p: "last thing",
  //   },
  // ];

  // const stringContent = JSON.stringify(content);
  // const backToJs = JSON.parse(stringContent);
  // console.log(backToJs);

  return (
    <div className={style.parent}>
      <h1>trying to render string</h1>
      {content.map((input, index, array) => {
        {
          /* {stringContent.map((input, index, array) => { */
        }
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
