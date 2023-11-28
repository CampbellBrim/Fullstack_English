import Users from "@/components/Users/Users";
import {usePathname} from "next/navigation";
import {headers} from "next/headers";

export default async function Page() {
  // const BASE_URL = process.env.BASE_URL
  //   ? process.env.BASE_URL
  //   : "http://localhost:3000";
  // console.log("BASE_URL: ", BASE_URL);
  let BASE_URL: string;
  if (process.env.BASE_URL !== null && process.env.BASE_URL !== undefined) {
    BASE_URL = process.env.BASE_URL;
  } else {
    BASE_URL = "http://localhost:3000";
  }
  // console.log("BASE_URL: ", BASE_URL);
  const headersList = headers();
  const pathname = headersList.get("x-forwarded-host");
  // console.log("headersList: ", headersList.keys());
  // console.log("pathname: ", pathname);
  // console.log(typeof pathname);

  const fetchData = async () => {
    let data;
    let response;
    try {
      // response = await fetch("http://localhost:3000/api/users/", {
      // response = await fetch(`/api/users/`, {
      // response = await fetch("api/users/", {
      // https://fullstack-english-jtf7aw0x6-campbellbrim.vercel.app
      response = await fetch(`https://${pathname}/api/users`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      });
      data = await response.json();
    } catch (error) {
      console.error(error);
    }
    return data;
  };
  const users = await fetchData();
  //   userName: string;
  //   id: string;
  if (users) {
    return (
      <div className="flex flex-col">
        {users.users.map((user: any, index: number) => {
          return <Users key={index} userName={user.userName} id={user.id} />;
        })}
      </div>
    );
  }
  return (
    // <div>
    //   <div>
    //     <p>BASE_URL: {JSON.stringify(BASE_URL)}</p>
    //     <p>BASE_URL: {JSON.stringify(typeof BASE_URL)}</p>
    //     <p>BASE_URL: {JSON.stringify(headersList.keys())}</p>
    //   </div>
    // </div>
    <div>
      <div>pathname: {JSON.stringify(pathname)}</div>

      <div>nothing here yet</div>
    </div>
  );
}
