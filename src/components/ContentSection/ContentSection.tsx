import ArticleSection from "./ArticleSection";
import ContentHeader from "./ContentHeader";
import styles from "./ContentSection.module.scss";
import ListSection from "./ListSection";

const ContentSection = () => {
  return (
    <section className={styles.contentSectionContainer}>
      <ContentHeader />
      <ArticleSection />
      <ListSection />
    </section>
  );
};

export default ContentSection;
