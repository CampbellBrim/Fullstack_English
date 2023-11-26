type Props = {
  content: string;
};

export default function HeadingOneComp(props: Props) {
  const content = props.content;
  return <h1 className="w-full">{content}</h1>;
}
