"use client";

import {use} from "react";
// should this just be a server side component?

// import { useState } from 'react'
import style from "./CreateForm.module.css";
// import prisma from '../../../prisma/db'
import {useStore} from "@/store";

enum InputType {
  ShortString = "ShortString",
  TextBox = "TextBox",
  Image = "Image",
  Option = "Option",
  Content = "Content",
}

type Inputs = {
  [key: string]: InputType;
};

type CreateFormProps = Inputs[];

type Props = {
  inputs: CreateFormProps;
};

export default function CreateForm(props: Props) {
  const addToArray = useStore((state) => state.addToArray);
  const title = useStore((state) => state.title);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    useStore.setState({title: value});
  };

  const addContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    // const content = useStore((state) => state.content);
    const value = useStore.getState().title;
    const content = useStore.getState().content;
    // useStore.setState({ content: value });
    addToArray(value);
    console.log(content);
  };

  const ResetContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    useStore.setState({content: [""]});
  };

  // const inputs  = props.inputs
  const inputs = props.inputs;
  // const title = useStore.getState().title

  return (
    <>
      <div className="Form">
        <form>
          {inputs.map((input, index, array) => {
            let key;
            key = Object.keys(input);
            if (input[`${key}`] === "ShortString") {
              return (
                <div key={index}>
                  <label htmlFor={`${key}`}>{key}</label>
                  <br />
                  <input
                    id={index.toString()}
                    type="text"
                    // name={key}
                    onChange={handleChange}
                    placeholder={`${key}`}
                  />
                  <br />
                </div>
              );
            } else if (input[`${key}`] === "TextBox") {
              return (
                <div key={index}>
                  <label htmlFor={`${key}`}>{key}</label>
                  <br />
                  <textarea
                    id={index.toString()}
                    className={style.textBox}
                    // name={key}
                    placeholder={`${key}`}
                    cols={15}
                  />
                  <br />
                </div>
              );
            } else if (input[`${key}`] === "Content") {
              return (
                <div key={index}>
                  <label htmlFor={`${key}`}>{key}</label>
                  <br />
                  <input
                    id={index.toString()}
                    className={style.textBox}
                    // name={key}
                    onChange={handleChange}
                    placeholder={`${key}`}
                  />
                  <br />
                </div>
              );
            } else if (input[`${key}`] === "Image") {
              return (
                <div key={index}>
                  <label htmlFor={`${key}`}>{key}</label>
                  <br />
                  <input
                    id={index.toString()}
                    type="text"
                    // name={key}
                    // onChange={handleChange}
                    placeholder={`image url`}
                  />

                  <br />
                </div>
              );
            }
          })}
        </form>
        <p>title in client: {title}</p>
        <button onClick={addContent}>Add Content</button>
        <br />
        <button onClick={ResetContent}>Reset Content</button>
      </div>
    </>
  );
}
