import {toast} from "react-toastify";

export default function Toast(statusCode: number) {
  const getFirstNumber = (num: number) => {
    return num.toString().charAt(0);
  };
  let firstNumber = getFirstNumber(statusCode);

  if (firstNumber === "2") {
    return toast.success("Success!", {});
  } else if (firstNumber === "4") {
    return toast.error("There was an error, please try again.");
  } else if (firstNumber === "5") {
    return toast.error("There was a server error, please try again.");
  } else {
    return toast("Operation completed.");
  }
}
