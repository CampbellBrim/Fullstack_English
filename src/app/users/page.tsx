import Users from "@/components/Users/Users";

export default async function Page() {
  const fetchData = async () => {
    let data;
    let response;
    try {
      // response = await fetch("http://localhost:3000/api/users/", {
      response = await fetch(`${process.env.BASE_URL}/api/users/`, {
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
  return (
    <div className="flex flex-col">
      {users.users.map((user: any) => {
        return <Users userName={user.userName} id={user.id} />;
      })}
    </div>
  );
}
