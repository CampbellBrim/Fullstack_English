import Image from "next/image";

type Props = {
  content: string;
};

export default function ParagraphComp(props: Props) {
  const content = props.content;
  return (
    <Image alt="content" src={"somestring"}>
      {content}
    </Image>
  );
}
