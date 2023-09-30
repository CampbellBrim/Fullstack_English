"use client";

import {useRef} from "react";
import {useStore} from "@/store";

type Input = {
  [key: string]: string;
};

export default function StoreInitializer({
  title,
}: // inputsArray,
// content,
{
  title: string;
  // inputsArray: Input[];
  // content: string[];
}) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({
      title,
      // inputsArray,
      content: [],
      pages: [],
      //   content: ["stuff"],
    });
    initialized.current = true;
  }

  return null;
}
