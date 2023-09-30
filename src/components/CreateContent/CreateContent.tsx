"use client";

// import {use} from "react";
// should this just be a server side component?

import style from "./CreateContent.module.css";
// import prisma from '../../../prisma/db'
import {useStore} from "@/store";
import DOMPurify from "dompurify";
// import image from "../../public/Imagem do WhatsApp de 2023-09-04 à(s) 01.47.16.jpg";

enum InputType {
  h1 = "h1",
  h2 = "h2",
  Paragraph = "Paragraph",
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
  lessonsToChooseFrom: any;
};

export default function CreateContent(props: Props) {
  // add new pece of state to  control the content in the input field
  // also add another for image descriptions
  const title = useStore((state) => state.title);
  const addToArray = useStore((state) => state.addToArray);
  const contentType = useStore((state) => state.contentType);
  const content = useStore((state) => state.content);
  const activeLesson = useStore((state) => state.activeLesson);

  const lessonsToChooseFrom = props.lessonsToChooseFrom;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    useStore.setState({title: value});
  };

  const addContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    // const content = useStore((state) => state.content);
    const value = useStore.getState().title;
    // const content = useStore.getState().content;
    const purifiedValue = DOMPurify.sanitize(value);
    // `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;
    `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;
    // const JsonContent = JSON.stringify({[contentType]: title});
    // const JsonContent = JSON.stringify({[contentType]: purifiedValue});
    const contentToSend = {[contentType]: purifiedValue};
    addToArray(contentToSend);
  };

  const ResetContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    useStore.setState({content: []});
  };

  const handleContentType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    useStore.setState({contentType: value});
  };

  const handleLesson = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
    useStore.setState({activeLesson: value});
    // console.log(value);
    // const stateValue = useStore.getState().activeLesson;
    // console.log(stateValue);
    // useStore.setState({ lesson: value });
  };

  const submitData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const JsonContent = JSON.stringify({contentType: content});
    // console.log(JsonContent);
    try {
      const body = {
        title: title,
        content: content,
        lessonId: activeLesson,
      };
      await fetch("/api/pages", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };
  const inputs = props.inputs;

  if (activeLesson.length === 0) {
    useStore.setState({activeLesson: lessonsToChooseFrom[0].id});
  }

  return (
    <>
      <div className="Form">
        <div className={style.selectLessonContainer}>
          <label>choose lesson to add page to</label>
          <br />
          <select onChange={handleLesson}>
            {lessonsToChooseFrom.map((input: any, index: any, array: any) => {
              return (
                <option key={input.id} value={input.id}>
                  Title: {input.title}
                </option>
              );
            })}
          </select>
        </div>
        <label>Choose Type of Content For Page</label>
        <br />
        <select onChange={handleContentType} value={contentType}>
          <option value="h1">h1</option>
          <option value="h2">h2</option>
          <option value="Paragraph">Paragraph</option>
          <option value="Image">Image</option>
        </select>
        <br />
        <form>
          {inputs.map((input, index, array) => {
            let key;
            key = Object.keys(input);
            if (input[`${key}`] === "h1") {
              return (
                <div key={index}>
                  <label htmlFor={`${key}`}>Enter Content Here</label>
                  <br />
                  <input
                    id={key.toString()}
                    // id={index.toString()}
                    type="text"
                    // name={key}
                    onChange={handleChange}
                    placeholder={"Text"}
                  />
                  <br />
                </div>
              );
            }
          })}
        </form>
        <button className="button primary" onClick={addContent}>
          Add Content
        </button>
        <br />
        <button className="button warning" onClick={ResetContent}>
          Reset Content
        </button>
        <br />
        <button className="button primary" onClick={submitData}>
          Submit Data
        </button>

        <div>
          <p>title: {title}</p>
          <p>content: {JSON.stringify(content)}</p>
          <p>active lesson id: {activeLesson}</p>
        </div>
      </div>
    </>
  );
}
