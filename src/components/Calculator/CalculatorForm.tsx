import React, { useState } from "react";
import InputField from "../UI/InputField/InputField";
import { calculateCompensation } from "../../utils/calculateCompensation";
import styles from "./Calculator.module.scss";
import { useFormValidation } from "../../hooks/useFormValidation";

interface CalculatorFormProps {
  setResult: (result: ReturnType<typeof calculateCompensation>) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ setResult }) => {
  const [income, setIncome] = useState("");
  const [days, setDays] = useState("");
  const [hasTuberculosis, setHasTuberculosis] = useState(false);
  const { validateForm, clearErrors } = useFormValidation();

  const [errorMessages, setErrorMessages] = useState<{
    income?: string;
    days?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(income, days);

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    const incomeNum = parseFloat(income);
    const daysNum = parseInt(days, 10);

    const calc = calculateCompensation({
      grossIncome: incomeNum,
      sickLeaveDays: daysNum,
      hasTuberculosis,
    });

    clearErrors();
    setErrorMessages({});
    setResult(calc);
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
