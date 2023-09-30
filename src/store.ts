import {type} from "os";
import {create} from "zustand";

type Input = {
  [key: string]: string;
};

// enum ContentType {

export const useStore = create<{
  title: string;
  inputsArray: Input[];
  contentType: string;
  content: Input[];
  pages: string[];
  activeLesson: string;
  addToArray: (input: Input) => void;
}>((set) => ({
  content: [],
  title: "",
  pages: [],
  contentType: "Title",
  inputsArray: [],
  activeLesson: "",
  addToArray: (input: Input) => {
    set((state) => ({
      content: [...state.content, input],
    }));
  },
}));
