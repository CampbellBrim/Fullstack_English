"use client";

type Props = {
  userName: string;
  id: string;
};

export default function Users(props: Props) {
  const {userName, id} = props;

  return (
    <div className="flex flex-row justify-evenly">
      <p className="text-xl">Username: {userName}</p>
      <p className="text-xl">Id: {id}</p>
    </div>
  );
}
