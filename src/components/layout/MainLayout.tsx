import Calculator from "../Calculator/Calculator";
import ContentSection from "../ContentSection/ContentSection";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <main className={styles.calculatorLayout}>
      <ContentSection />
      <Calculator />
    </main>
  );
};

export default MainLayout;
