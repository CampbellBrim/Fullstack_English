"use client";

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

// interface PaginationControlsProps {
//   hasNextPage: boolean;
//   hasPreviousPage: boolean;
// }

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

  const returnPreviousPage = (arg: string) => {
    let urlArray = arg.split("/");
    urlArray.splice(-2, 2);
    let newUrl = urlArray.join("/");
    return newUrl as string;
  };

  const getLastArgOfUrl = () => {
    let urlArray = path.split("/");
    let lastArg = urlArray[urlArray.length - 1];
    const asInt = parseInt(lastArg);
    return asInt;
  };
  const {hasNextPage, hasPreviousPage} = props;
  const page = getLastArgOfUrl();
  const previousPage = returnPreviousPage(path);

  return (
    <div className="grid xs:text-xs sm:grid-cols-2 md:grid-cols-3 grid-flow-col center fixed bottom-0 w-full h-fit bg-slate-500 min-w-fit">
      <div className=" flex flex-row justify-center flex-shrink ">
        <Link
          href={previousPage}
          className="btn border-2 border-black bg-slate-50 p-2 w-28">
          lessons
        </Link>
      </div>
      <div className=" flex flex-row justify-center center flex-shrink join">
        <button
          className={`${
            !hasPreviousPage ? "bg-warning" : "bg-slate-50"
          } btn  p-2 join-item border-2 border-black`}
          disabled={!hasPreviousPage}
          onClick={() => {
            let previousPageUrl = replaceUrlEnd(path, `${Number(page) - 1}`);
            router.push(`${previousPageUrl}`);
          }}>
          back
        </button>
        <div className="flex-shrink-0 md:flex flex-col hidden   bg-slate-50 center  w-20 text-center h-12 rounded-none">
          <p className="join-item h-fit" style={{fontFamily: "inherit"}}>
            page: {page + 1}
          </p>
        </div>
        <button
          className={`${
            !hasNextPage ? "bg-warning" : "bg-slate-50"
          } btn  p-2 join-item border-2 border-black`}
          disabled={!hasNextPage}
          onClick={() => {
            let NextPageUrl = replaceUrlEnd(path, `${Number(page) + 1}`);
            router.push(`${NextPageUrl}`);
          }}>
          next
        </button>
      </div>
    </div>
  );
}
