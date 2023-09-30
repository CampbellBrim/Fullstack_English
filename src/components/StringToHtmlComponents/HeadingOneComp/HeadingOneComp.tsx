// import style from "./HeadingOneComp.module.css";

type Props = {
  content: string;
};

export default function HeadingOneComp(props: Props) {
  const content = props.content;
  return <h1>h1 component: {content}</h1>;
}
