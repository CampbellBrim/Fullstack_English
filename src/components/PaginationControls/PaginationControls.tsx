"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import style from "./PaginationControls.module.css";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

type Props = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export default function PaginationControls(props: Props) {
  const path = usePathname();
  const router = useRouter();

  const replaceUrlEnd = (currentUrl: string, stringToAdd: string) => {
    let urlArray = currentUrl.split("/");
    let withoutLast = urlArray.slice(0, -1);
    withoutLast.push(stringToAdd);
    let newString = withoutLast.join("/");
    return newString;
  };

  const getLastArgOfUrl = () => {
    let urlArray = path.split("/");
    let lastArg = urlArray[urlArray.length - 1];
    const asInt = parseInt(lastArg);
    return asInt;
  };
  const {hasNextPage, hasPreviousPage} = props;
  const page = getLastArgOfUrl();

  return (
    <div className={style.container}>
      <button
        className={`${!hasPreviousPage ? style.disabled : style.active} ${
          style.button
        }`}
        disabled={!hasPreviousPage}
        onClick={() => {
          let previousPageUrl = replaceUrlEnd(path, `${Number(page) - 1}`);
          router.push(`${previousPageUrl}`);
        }}>
        previous
      </button>

      {/* <p className={style.pageDisplay}>index: {page}</p> */}
      <p className={style.pageDisplay}>page: {page + 1}</p>
      <button
        className={`${!hasNextPage ? style.disabled : style.active} ${
          style.button
        }`}
        disabled={!hasNextPage}
        onClick={() => {
          let NextPageUrl = replaceUrlEnd(path, `${Number(page) + 1}`);
          router.push(`${NextPageUrl}`);
        }}>
        next
      </button>
    </div>
  );
}
