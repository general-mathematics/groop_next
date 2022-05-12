import Card from "../components/Card";
import styles from "../components/Card.module.scss";

const Testing = () => {
  return (
    <>
      <Card
        title={"My Card Title from prop"}
        color={styles.oCardBackgroundDefault}
      ></Card>
    </>
  );
};

export default Testing;
