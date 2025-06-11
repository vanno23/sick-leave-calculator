import React from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  label: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: string;
  name: string;
  error?: string | null;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  unit,
  name,
  error,
}) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={name} className={styles.inputField__label}>
        {label}
      </label>
      {error && <p className={styles.errorText}>{error}</p>}
      <div className={styles.inputField__wrapper}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={styles.inputField__input}
        />
        {unit && <span className={styles.inputField__unit}>{unit}</span>}
      </div>
    </div>
  );
};

export default InputField;
