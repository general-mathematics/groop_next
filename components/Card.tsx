import "./Card.module.scss";

interface ICardProps {
  title: string;
  text: string;

  backgroundColor?: string;
  //children?: React.ReactNode; // 👈️ type children
}

export const Card = ({
  title = "Card 1",
  text = "Some card text",
  backgroundColor,
  ...props
}: ICardProps) => {
  //const cardClasses = classNames("card1", "card2");
  return (
    <div className={styles.oCard}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
