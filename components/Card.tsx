import classNames from "classnames";
import styles from "./Card.module.scss";

interface ICardProps {
  title: string;
  text?: string;

  color?: string;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { text = "John", color = "default" } = props;

  const cardClasses = classNames("card1", "card2");

  return (
    <>
      <h2
        className={
          { color }
            ? styles.oCardBackgroundDefault
            : styles.oCardBackgroundGreen
        }
      >
        {props.title}
      </h2>
      <p>{text}</p>
    </>
  );
};

export default Card;
