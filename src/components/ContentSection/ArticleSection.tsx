import styles from "./ContentSection.module.scss";
import articleImage from "../../assets/images/Image.jpg";

const ArticleSection = () => {
  return (
    <article className={styles.articleSection}>
      <div className={styles.articleContentWrapper}>
        <h2 className={styles.articleTitle}>
          Fringilla Euismod Adipiscing Ipsum
        </h2>
        <p className={styles.articleParagraph}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Maecenas faucibus mollis interdum. Aenean lacinia
          bibendum nulla sed.
        </p>
      </div>
      <figure className={styles.articleFigure}>
        <img
          src={articleImage}
          alt="Books and plant on a desk"
          className={styles.articleImage}
        />
      </figure>
    </article>
  );
};

export default ArticleSection;
