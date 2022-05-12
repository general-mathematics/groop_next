import classNames from "classnames";
import styles from "./Card.module.scss";

interface ICardProps {
  title: string;
  text?: string;

  color?: string;
  status: "Waiting" | "success";
}

const Card = (
  props: ICardProps,
  { text = "paorrr", color = styles.oCardBackgroundDefault },
) => {
  const cardClasses = classNames("card1", "card2");

  return (
    <>
      <h2 className={props.color}>{props.title}</h2>
      <p>{text}</p>
      <p>{props.status}</p>
    </>
  );
};

export default Card;
