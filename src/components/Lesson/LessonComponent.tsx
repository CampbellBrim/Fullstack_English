"use client";

import {
  EditSvg,
  DeleteSvg,
  UpSvg,
  DownSvg,
  PlusSvg,
  ForwardSvg,
} from "../../../public/svgs";

import Link from "next/link";

import {useRouter, usePathname} from "next/navigation";
import {useState} from "react";

import "react-toastify/dist/ReactToastify.css";
import {ToastContainer, toast} from "react-toastify";
import Toast from "../Toast/Toast";
import {Prisma} from "@prisma/client";

// import { usePathname } from "next/navigation";

type PagesProps = {
  pages: {
    id: string;
    title: string;
    pageNumber: number;
    lessonId: string;
  };
};

function DisplayPages(props: PagesProps) {
  const {id, title, pageNumber, lessonId} = props.pages;
  const path = usePathname();
  const router = useRouter();

  let modal: HTMLDialogElement;
  if (typeof window !== "undefined") {
    modal = document.getElementById(id!) as HTMLDialogElement;
  }
  const openModal = () => {
    if (modal) {
      modal.showModal();
    } else {
      modal = document.getElementById(id!) as HTMLDialogElement;
      modal.showModal();
    }
  };

  const closeModal = () => {
    modal.close();
  };

  const handleEditClick = () => {
    router.push(`/edit/page/${id}`);
  };

  const handleAddClick = () => {
    router.push("/create/page/");
  };

  const confirmDelete = async () => {
    let response;
    try {
      const body = {
        id: id,
      };
      response = await fetch("/api/pages", {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    } finally {
      Toast(response!.status);
      modal.close();
      router.refresh();
    }
  };
  return (
    <div className="rounded-xl w-full my-2 p-0 bg-seconday-content border shadow-md">
      <figure className="text-left m-0 py-2 flex-initial alignItemsLeft w-full border-b">
        <Link
          className="w-full h-full flex flex-row"
          href={`${path}/${lessonId}/${pageNumber}`}>
          <p className="text-left p-0 m-0 w-full text-lg pl-2">{title}</p>
          <div className="h-full px-1">{ForwardSvg}</div>
        </Link>
      </figure>

      <div className="p-2 m-0">
        <div className="flex flex-row ">
          <div className="tooltip" data-tip="Edit This Page">
            <Link href={`/edit/page/${id}`} className="btn btn-accent">
              {EditSvg}
            </Link>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-warning mx-1" onClick={openModal}>
              {DeleteSvg}
            </button>
          </div>
          <div className="tooltip" data-tip="Create New Page">
            <Link href={"/create/page/"} className="btn btn-success">
              {PlusSvg}
            </Link>
          </div>
        </div>
      </div>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete the Page <q>{title}</q>?
          </h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-slate-100 mx-1" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn bg-error mx-1" onClick={confirmDelete}>
                Confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

type MapProps = {
  pages: {
    id: string;
    title: string;
    content: Prisma.JsonValue[];
  }[];
  lessonId: number | string;
};

function MapContent(props: MapProps) {
  const {lessonId, pages} = props;
  return (
    <>
      {pages.map((item, index: number) => {
        return (
          <div key={index}>
            <div className="flex flex-col">
              <DisplayPages
                pages={{
                  pageNumber: index,
                  title: item.title,
                  id: item.id,
                  lessonId: lessonId as string,
                }}></DisplayPages>
            </div>
          </div>
        );
      })}
    </>
  );
}

type Props = {
  lesson: {
    id: string;
    title: string;
    content: {
      id: string;
      title: string;
      content: Prisma.JsonValue[];
      order: number;
      createdAt: Date;
      updatedAt: Date;
      lessonId: string;
    }[];
    learningObjective: string;
  };
};

export default function LessonComponent(props: Props) {
  const lesson = props.lesson;
  // console.log(lesson);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const handleEditClick = () => {
    router.push(`/edit/lesson/${lesson.id}`);
  };
  const handleCreateClick = () => {
    router.push("/create/lesson/");
  };

  let modal: HTMLDialogElement;
  if (typeof window !== "undefined") {
    modal = document.getElementById(lesson.id!) as HTMLDialogElement;
  }
  const openModal = () => {
    if (modal) {
      modal.showModal();
    } else {
      modal = document.getElementById(lesson.id!) as HTMLDialogElement;
      modal.showModal();
    }
  };

  const closeModal = () => {
    modal.close();
  };

  const handleDeleteClick = () => {
    openModal();
  };

  const confirmDelete = async () => {
    let response;
    try {
      const body = {
        id: lesson.id,
      };
      response = await fetch("/api/lessons", {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    } finally {
      Toast(response!.status);
      modal.close();
      router.refresh();
    }
  };

  return (
    <div className="card p-0 text-primary-content border-2 border-primary rounded-3xl w-96 shadow-xl m-2 prose">
      <ToastContainer position="top-center" />
      <div className="card-body p-4">
        <div className="justify-start prose">
          <h2 className="card-title capitalizeFirst my-4">{lesson.title}</h2>
          <p className="card-title capitalizeFirst my-4 text-lg">
            Pages : {lesson.content.length}
          </p>
          <p className=" capitalizeFirst my-4  text-lg ">
            Learning Objective: {lesson.learningObjective}
          </p>
          <div className="flex flex-col w-fit">
            <div className="block w-full h-full p-0 m-0">
              <div className="card-actions justify-start ">
                <div className="flex flex-row justify-evenly">
                  <div className="tooltip" data-tip="Edit This Lesson">
                    <Link
                      href={`/edit/lesson/${lesson.id}`}
                      className="btn btn-accent">
                      {EditSvg}
                    </Link>
                  </div>
                  <div className="tooltip" data-tip="Delete">
                    <button
                      className="btn bg-warning"
                      onClick={handleDeleteClick}>
                      {DeleteSvg}
                    </button>
                  </div>
                  <div className="tooltip" data-tip="Create New Lesson">
                    <Link href="/create/lesson" className="btn btn-success">
                      {PlusSvg}
                    </Link>
                  </div>
                  <button
                    className="btn bg-info "
                    onClick={() => setIsActive(!isActive)}
                    disabled={lesson.content.length > 0 ? false : true}>
                    {isActive ? UpSvg : DownSvg}
                  </button>
                </div>
                <div className="block w-full">
                  {isActive ? (
                    <MapContent pages={lesson.content} lessonId={lesson.id} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start of modal */}
      <dialog id={lesson.id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete <q>{lesson.title}</q>?
          </h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-slate-100 mx-1" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn bg-error mx-1" onClick={confirmDelete}>
                Confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
