import { useState } from "react";
import type { calculateCompensation } from "../../utils/calculateCompensation";
import CalculatorForm from "./CalculatorForm";
import ResultBox from "./ResultBox";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [result, setResult] = useState<ReturnType<
    typeof calculateCompensation
  > | null>(null);

  return (
    <section className={styles.calculatorContainer}>
      <h2 className={styles.calculatorTitle}>Compensation Calculator</h2>
      <CalculatorForm setResult={setResult} />
      {result && <ResultBox result={result} />}
    </section>
  );
};

export default Calculator;
