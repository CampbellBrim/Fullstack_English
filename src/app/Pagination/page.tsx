import PaginationControls from "@/components/PaginationControls/PaginationControls";

const data = [
  "string 1",
  "string 2",
  "string 3",
  "string 4",
  "string 5",
  "string 6",
  "string 7",
  "string 8",
  "string 9",
  "string 10",
];

export default function Page({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  console.log(data);
  const page = searchParams.page ?? 1;
  const perPage = searchParams.perPage ?? 5;

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = data.slice(start, end);

  return (
    <>
      <h1>pagination</h1>
      {entries.map((entry, index) => (
        <p key={index}>{entry}</p>
      ))}
      <PaginationControls
        hasNextPage={end < data.length}
        hasPreviousPage={start > 0}></PaginationControls>
    </>
  );
}
