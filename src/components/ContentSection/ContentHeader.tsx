import styles from "./ContentSection.module.scss";

const ContentHeader = () => {
  return (
    <header className={styles.contentHeader}>
      <h1 className={styles.headerTitle}>Quam Tristique Condimentum</h1>
      <p className={styles.headerParagraph}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
        <span className={styles.highlightText}> Curabitur blandit</span> tempus
        porttitor. Integer posuere erat a ante venenatis dapibus posuere velit
        aliquet. Vestibulum id ligula porta felis euismod semper.
      </p>
    </header>
  );
};

export default ContentHeader;
