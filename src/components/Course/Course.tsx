"use client";

import {useRouter} from "next/navigation";
import {EditSvg, DeleteSvg, PlusSvg} from "../../../public/svgs";
import {ToastContainer} from "react-toastify";
import Toast from "../Toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

// import {useLessonPlanStore} from "@/store";
// import StoreInitializer from "../StoreInitializer";

// type Lesson = {
//   id: string;
//   title: string;
//   level: string;
//   lessons?: any;
//   description: string;
//   // createdAt: Date;
//   // updatedAt: Date;
//   // authorId: string;
// };

type LessonPlanProps = {
  lesson: {
    id: string;
    title: string;
    level: string;
    lessons?: any;
    description: string;
  };
};

export default function Course(props: LessonPlanProps) {
  const {title, level, id, lessons, description} = props.lesson;
  // props.lesson.createdAt = "" as unknown as Date;
  // props.lesson.updatedAt = "" as unknown as Date;
  // props.lesson.authorId = "string";

  // const lessonPlans = useLessonPlanStore((state) => state.lessonPlans);
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
  const confirmDelete = async (id: string) => {
    let response;
    try {
      const body = {
        id: id,
      };
      response = await fetch("/api/courses", {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    } finally {
      modal.close();
      Toast(response!.status);
      router.refresh();
    }
  };

  return (
    <div className="card p-0 text-primary-content rounded-3xl w-96 shadow-xl m-2 prose border-2 border-primary">
      <ToastContainer position="top-center" />
      {/* <StoreInitializer
        // lessons={props.lesson}
        // lessons={{
        //   title: title,
        //   id: id,
        //   level: level,
        //   description: description,
        //   createdAt: "" as unknown as Date,
        //   updatedAt: "" as unknown as Date,
        //   authorId: "",
        // }}
      /> */}
      {/* <p>{JSON.stringify(lessonPlans)}</p> */}
      <div className="card-body w-96 p-5 justify-start prose ">
        <h2 className="card-title capitalizeFirst mb-0">{title}</h2>
        <p className="my-0 text-lg">Level: {level}</p>
        <p className="my-0 text-lg">Lessons: {Object.keys(lessons).length}</p>
        <p className="my-0 text-lg">Description: {description}</p>
        <div className="block w-full h-full p-0 m-0">
          <div className="card-actions justify-start ">
            <div className="flex flex-col">
              <Link className="btn btn-secondary" href={`/courses/${id}`}>
                view lessons
              </Link>
              <div className="flex flex-row justify-evenly">
                <div className="tooltip" data-tip="Edit Course">
                  <Link
                    href={`/edit/lessonPlan/${id}`}
                    className="btn h-fit w-fit bg-accent ">
                    {EditSvg}
                  </Link>
                </div>
                <div className="tooltip" data-tip="Delete">
                  <button
                    className="btn h-fit w-fit bg-warning"
                    onClick={openModal}>
                    {DeleteSvg}
                  </button>
                </div>
                <div className="tooltip" data-tip="Create New Course">
                  <Link
                    href={`/create/lessonPlan/`}
                    className="btn h-fit w-fit bg-success">
                    {PlusSvg}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete the Course <q>{title}</q>?
          </h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-slate-100 mx-1" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="btn bg-error mx-1"
                onClick={(e) => confirmDelete(id!)}>
                Confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
