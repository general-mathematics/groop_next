import styles from "./Card.module.scss";

interface ICardProps {
  /**
   * Add a title (required)
   */

  title: string;

  /** Add some text (required)
   */
  text: string;
  backgroundColor?: string;
}

/**
 * This is a **card**.
 */
export const Card = ({
  title = "Card 1",
  text = "Some card text",
  backgroundColor = "red",
}: ICardProps) => {
  //const cardClasses = classNames("card1", "card2");
  return (
    <div style={{ backgroundColor }} className={styles.oCard}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
