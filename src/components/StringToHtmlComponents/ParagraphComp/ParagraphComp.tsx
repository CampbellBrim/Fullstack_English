type Props = {
  content: string;
};

export default function ParagraphComp(props: Props) {
  const content = props.content;
  return <p>paragraph component: {content}</p>;
}
