"use client";

import HeadingOneComp from "../StringToHtmlComponents/HeadingOneComp/HeadingOneComp";
import HeadingTwoComp from "../StringToHtmlComponents/HeadingTwoComp/HeadingTwoComp";
import ParagraphComp from "../StringToHtmlComponents/ParagraphComp/ParagraphComp";
// import {type} from "os";
import style from "./Preview.module.css";
import {useStore} from "@/store";

type Props = {
  html: string;
};

export default function Preview(props: Props) {
  // const handleSave = () => {
  //     console.log('save')
  // }

  const text = useStore((state) => state.title);

  const content = useStore((state) => state.content);
  // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos error amet corrupti minima tenetur veniam asperiores nam repellat eos aut impedit sapiente placeat officia, perspiciatis animi facere accusantium necessitatibus. Autem provident repellendus ad exercitationem, delectus atque. Sit eum nisi quia cum consequatur repellat nostrum deleniti amet, nihil suscipit assumenda est!

  function returnStringHtml() {
    //   return different html tags for different types of content

    // const returnArray = content.map((item) => {
    //   return `<p>${item}</p>`;
    // });
    return content.join("");
    // return returnArray
  }
  const stringContent = returnStringHtml();

  const jsonParser = (contentArg: JSON[]) => {
    contentArg.map((input, index, array) => {
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
    });
    // return
  };

  return (
    <div className={style.container}>
      <h2>Your Page Preview Will Appear here</h2>
      <iframe
        sandbox=""
        srcDoc={`<head>
<style>
body {
  background-color: linen; 
}

h1 {
  color: blue;
  margin-left: 40px;
}
</style>
</head><body> ${stringContent}</body>`}
        seamless
        className={style.iframeStyles}
      />
    </div>
  );
}
