type Props = {
  content: string;
};

export default function HeadingTwoComp(props: Props) {
  const content = props.content;
  return <h2>h2 component: {content}</h2>;
}
