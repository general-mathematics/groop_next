interface CardProps {
  title: string;
  text: string;
  counter: number;
}

const Card = (props: CardProps) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <p>{props.counter}</p>
    </>
  );
};

export default Card;
