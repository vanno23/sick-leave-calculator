import styles from "./ContentSection.module.scss";

const ListSection = () => {
  return (
    <section className={styles.listSection}>
      <ul className={styles.bulletList}>
        <li className={styles.listItem}>Tellus Ullamcorper Inceptos</li>
        <li className={styles.listItem}>
          Magna Condimentum
          <ul className={styles.nestedBulletList}>
            <li className={styles.nestedListItem}>Mattis Tristique</li>
            <li className={styles.nestedListItem}>
              Pharetra Pellentesque Dapibus
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>Aenean Inceptos</li>
        <li className={styles.listItem}>Parturient Bibendum</li>
      </ul>
    </section>
  );
};

export default ListSection;
