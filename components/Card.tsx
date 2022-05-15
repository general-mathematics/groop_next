import classNames from "classnames";
import styles from "./Card.module.scss";

interface ICardProps {
  title: string;
  text: string;

  color: string;
  status: "Waiting" | "success";
}

const Card = (props: ICardProps, { text = "paorrr", color = styles.oCard }) => {
  const cardClasses = classNames("card1", "card2");

  return (
    <>
      <div className={props.color}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <p>{props.status}</p>
      </div>
    </>
  );
};

export default Card;
