import Card from "../components/Card";
import Grid from "../components/Grid";
import styles from "../components/Card.module.scss";

const Testing = () => {
  return (
    <>
      <Grid>
        <Card
          title={"CARD 1"}
          text={"I am card 1"}
          color={styles.oCard}
          status={"Waiting"}
        ></Card>
        <Card
          title={"CARD"}
          text={"I am a card"}
          color={styles.oCard}
          status={"Waiting"}
        ></Card>
        <Card
          title={"CARD"}
          text={"I am a card"}
          color={styles.oCard}
          status={"Waiting"}
        ></Card>
        <Card
          title={"CARD"}
          text={"I am a card"}
          color={styles.oCard}
          status={"Waiting"}
        ></Card>
        <Card
          title={"CARD"}
          text={"I am a card"}
          color={styles.oCard}
          status={"Waiting"}
        ></Card>
        <Card
          title={"CARD"}
          text={"I am a card"}
          color={styles.oCard}
          status={"Waiting"}
        ></Card>
        <Card
          title={"CARD"}
          text={"I am a card"}
          color={styles.oCard}
          status={"Waiting"}
        ></Card>
      </Grid>
    </>
  );
};

export default Testing;
