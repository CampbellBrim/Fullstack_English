import Users from "@/components/Users/Users";
import {usePathname} from "next/navigation";
import {headers} from "next/headers";

export default async function Page() {
  const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
  console.log("BASE_URL: ", BASE_URL);

  const headersList = headers();
  const pathname = headersList.get("x-invoke-path");
  console.log("pathname: ", pathname);

  const fetchData = async () => {
    let data;
    let response;
    try {
      // response = await fetch("http://localhost:3000/api/users/", {
      // response = await fetch(`/api/users/`, {
      // response = await fetch("api/users/", {
      response = await fetch(`${pathname}/api/users`, {
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
  return <div>pathname: {pathname}</div>;
}
