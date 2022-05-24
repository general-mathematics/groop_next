import styles from "./Grid.module.scss";

interface IGridProps {
  children: React.ReactNode; // 👈️ type children
}
export const Grid = (props: IGridProps) => {
  return (
    <>
      <div className={styles.grid}>
        {props.children}
        {/* <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div>
        <div className={styles.grid_child}>I am a child</div> */}
      </div>
    </>
  );
};

export default Grid;
