"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../Toast/Toast";

import {
  DeleteSvg,
  EditSvg,
  BackSvg,
  ForwardSvg,
  DraggableSvg,
} from "../../../public/svgs.js";

type Props = {
  titleProp: string;
  content: any;
  id: string;
  lesson: any;
  lessonId: string;
};
export default function EditPage(props: Props) {
  const router = useRouter();

  const {content, id} = props;

  const [widgets, setWidgets] = useState<{}[]>(content);
  const [title, setTitle] = useState(props.titleProp);
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const addWidget = (type: string) => {
    const newWidgets: {}[] = [...widgets];
    newWidgets.push({[`${type}`]: "Press pink button to edit text"});
    setWidgets(newWidgets);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
    e.dataTransfer.setData("type", e.currentTarget.innerText);
  };

  const changeSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleOnPageDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const sourceIndex = Number(e.dataTransfer.getData("text/plain"));
    const targetIndex = Number(e.currentTarget.id);
    const newWidgets = [...widgets];
    const [removedWidget] = newWidgets.splice(sourceIndex, 1);
    newWidgets.splice(targetIndex, 0, removedWidget);
    setWidgets(newWidgets);
  };

  const newDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const sourceIndex = e.dataTransfer.getData("text/plain");
    if (sourceIndex === "new") {
      const type = e.dataTransfer.getData("type");
      addWidget(type);
    }
    return;
  };

  const removeWidget = (index: number) => {
    const newWidgets = [...widgets];
    newWidgets.splice(index, 1);
    setWidgets(newWidgets);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string,
    index: number
  ) => {
    const value = e.target.value;
    const newWidgets = [...widgets];
    newWidgets[index] = {[`${key}`]: value};
    setWidgets(newWidgets);
  };

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let response;
    try {
      const body = {
        id: id,
        title: title,
        content: widgets,
      };
      response = await fetch("/api/pages", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    } finally {
      Toast(response!.status);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-row">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="flex flex-col w-fit rounded-md">
        <div className="flex flex-col w-fit bg-slate-300  px-1 rounded-md height440 mt-4">
          <button
            className={`${sideBarOpen ? "" : "w-fit"} btn btn-accent  mt-1`}
            onClick={changeSidebar}>
            {sideBarOpen ? BackSvg : ForwardSvg}
          </button>
          <div
            className={`${sideBarOpen ? "flex flex-col" : " invisible w-0"}`}>
            <br />
            <label className="font-bold" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="input input-bordered w-40"
              placeholder="Enter title"
              value={title}
              minLength={1}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label className="font-bold first-letter:capitalize" htmlFor="new">
              Drag content onto page
            </label>
            <div
              id="new"
              className={
                "py-1 my-1 cursor-grab rounded-md flex flex-row bg-slate-50"
              }
              draggable
              onDragStart={handleDragStart}>
              <p className="py-2 px-4 w-full text-center">h1</p>
              <div className=" flex flex-row justify-end rounded-md p-1">
                <div className="w-fit pr-1">{DraggableSvg}</div>
              </div>
            </div>
            <div
              id="new"
              className={
                "py-1 my-1 cursor-grab rounded-md flex flex-row bg-slate-50"
              }
              draggable
              onDragStart={handleDragStart}>
              <p className="py-2 px-4 w-full text-center">h2</p>
              <div className=" flex flex-row justify-end rounded-md p-1">
                <div className="w-fit pr-1">{DraggableSvg}</div>
              </div>
            </div>
            <div
              id="new"
              className={
                "py-1 my-1 cursor-grab rounded-md flex flex-row bg-slate-50"
              }
              draggable
              onDragStart={handleDragStart}>
              <p className="py-2 px-4 w-full text-center">p</p>
              <div className="flex flex-row justify-end rounded-md p-1">
                <div className="w-fit pr-1">{DraggableSvg}</div>
              </div>
            </div>
            <button className="btn btn-primary mb-1" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full minHeight-90vh"
        onDrop={newDropHandler}
        onDragOver={handleDragOver}
        //
      >
        <div className="flex flex-col w-full alignItemsCenter">
          <div className="prose">
            {widgets.map((widget, index) => {
              const key = Object.keys(widget);
              const value: string[] = Object.values(widget);
              //
              if (key[0] === "h1") {
                return (
                  <div
                    className="flex flex-col dropdown dropdown-bottom cursor-grab"
                    key={index}
                    id={index.toString()}
                    draggable
                    onDragStart={handleDragStart}
                    onDrop={handleOnPageDrop}
                    onDragOver={handleDragOver}>
                    <div
                      className="flex flex-col sm:flex-row hoverBorder mt-2 alignItemsCenter p-2"
                      key={index}>
                      <div className="w-full">
                        <h1 className="pr-2 alignItemsCenter mb-0">
                          {value[0]}
                        </h1>
                      </div>
                      <div className="flex flex-row ">
                        <label tabIndex={index} className="btn btn-secondary">
                          {EditSvg}
                        </label>
                        <button
                          className="btn btn-warning"
                          onClick={() => removeWidget(index)}>
                          {DeleteSvg}
                        </button>
                        <div className="btn bg-transparent cursor-grab">
                          {DraggableSvg}
                        </div>
                      </div>
                    </div>
                    <input
                      tabIndex={index}
                      className="input input-bordered dropdown-content z-[1]"
                      type="text"
                      defaultValue={value[0]}
                      onChange={(e) => handleChange(e, key[0], index)}
                    />
                  </div>
                );
              } else if (key[0] === "h2") {
                return (
                  <div
                    className="flex flex-col dropdown dropdown-bottom cursor-grab"
                    id={index.toString()}
                    key={index}
                    draggable
                    onDragStart={handleDragStart}
                    onDrop={handleOnPageDrop}
                    onDragOver={handleDragOver}>
                    <div
                      className="flex flex-col sm:flex-row hoverBorder mt-2 alignItemsCenter p-2"
                      key={index}>
                      <div className="w-full">
                        <h2 className="pr-2 alignItemsCenter mb-0 mt-0">
                          {value[0]}
                        </h2>
                      </div>
                      <div className="flex flex-row">
                        <label tabIndex={index} className="btn btn-secondary">
                          {EditSvg}
                        </label>
                        <button
                          className="btn btn-warning"
                          onClick={() => removeWidget(index)}>
                          {DeleteSvg}
                        </button>
                        <div className="btn bg-transparent cursor-grab">
                          {DraggableSvg}
                        </div>
                      </div>
                    </div>
                    <input
                      tabIndex={index}
                      className="input input-bordered dropdown-content z-[1]"
                      type="text"
                      defaultValue={value[0]}
                      onChange={(e) => handleChange(e, key[0], index)}
                    />
                  </div>
                );
                //
              } else if (key[0] === "p") {
                return (
                  <div
                    className="flex flex-col dropdown dropdown-bottom cursor-grab"
                    id={index.toString()}
                    key={index}
                    draggable
                    onDragStart={handleDragStart}
                    onDrop={handleOnPageDrop}
                    onDragOver={handleDragOver}>
                    <div
                      className="flex flex-col sm:flex-row hoverBorder mt-2 alignItemsCenter p-2"
                      key={index}>
                      <div className="w-full">
                        <p className="pr-2">{value[0]}</p>
                      </div>

                      <div className="flex flex-row">
                        <label tabIndex={index} className="btn btn-secondary">
                          {EditSvg}
                        </label>
                        <button
                          className="btn btn-warning"
                          onClick={() => removeWidget(index)}>
                          {DeleteSvg}
                        </button>
                        <div className="btn bg-transparent cursor-grab w-fit h-fit">
                          {DraggableSvg}
                        </div>
                      </div>
                    </div>
                    <textarea
                      tabIndex={index}
                      className="w-full textarea textarea-bordered dropdown-content z-[1]"
                      defaultValue={value[0]}
                      onChange={(e) =>
                        handleChange(e, key[0], index)
                      }></textarea>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
