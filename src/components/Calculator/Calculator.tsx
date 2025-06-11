import { useState } from "react";
import type { calculateCompensation } from "../../utils/calculateCompensation";
import CalculatorForm from "./CalculatorForm";
import ResultBox from "./ResultBox";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [result, setResult] = useState<ReturnType<
    typeof calculateCompensation
  > | null>(null);
  const [submittedDays, setSubmittedDays] = useState<number | null>(null);

  return (
    <section className={styles.calculatorContainer}>
      <h2 className={styles.calculatorTitle}>Compensation Calculator</h2>
      <CalculatorForm
        setResult={setResult}
        setSubmittedDays={setSubmittedDays}
      />
      {result && submittedDays !== null && (
        <ResultBox result={result} days={submittedDays} />
      )}
    </section>
  );
};

export default Calculator;
