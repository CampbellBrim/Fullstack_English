import Users from "@/components/Users/Users";
import {headers} from "next/headers";

export default async function Page() {
  const headersList = headers();
  const pathname = headersList.get("x-forwarded-host");

  const fetchData = async () => {
    let data;
    let response;
    try {
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

  if (users !== undefined && users !== null) {
    return (
      <div className="flex flex-col">
        {users.users.map((user: any, index: number) => {
          return <Users key={index} userName={user.userName} id={user.id} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <div>nothing here yet</div>
    </div>
  );
}
