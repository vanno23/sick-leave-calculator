import React, { useState } from "react";
import InputField from "../UI/InputField/InputField";
import { calculateCompensation } from "../../utils/calculateCompensation";
import styles from "./Calculator.module.scss";

interface CalculatorFormProps {
  setResult: (result: ReturnType<typeof calculateCompensation>) => void;
  setSubmittedDays: (days: number) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  setResult,
  setSubmittedDays,
}) => {
  const [income, setIncome] = useState("");
  const [days, setDays] = useState("");
  const [hasTuberculosis, setHasTuberculosis] = useState(false);

  const [errorMessages, setErrorMessages] = useState<{
    income?: string;
    days?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const incomeNum = parseFloat(income);
    const daysNum = parseInt(days, 10);

    const calc = calculateCompensation({
      grossIncome: incomeNum,
      sickLeaveDays: daysNum,
      hasTuberculosis,
    });

    if (calc.errors) {
      setErrorMessages(calc.errors);
      return;
    }

    setErrorMessages({});
    setResult(calc);
    setSubmittedDays(daysNum);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.calculatorForm}>
      <InputField
        label="Average income"
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        unit="€"
        name="income"
        error={errorMessages.income}
      />
      <InputField
        label="Days on sick-leave"
        type="number"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        unit="days"
        name="days"
        error={errorMessages.days}
      />
      <div className={styles.calculatorForm__checkboxGroup}>
        <input
          type="checkbox"
          id="tuberculosis"
          checked={hasTuberculosis}
          onChange={(e) => setHasTuberculosis(e.target.checked)}
          className={styles.calculatorForm__checkbox}
        />
        <label
          htmlFor="tuberculosis"
          className={styles.calculatorForm__checkboxLabel}
        >
          I have tuberculosis
        </label>
      </div>
      <button type="submit" className={styles.calculatorForm__submitButton}>
        Calculate
      </button>
    </form>
  );
};

export default CalculatorForm;
