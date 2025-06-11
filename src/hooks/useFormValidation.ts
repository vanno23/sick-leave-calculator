import { useState } from "react";

interface ValidationErrors {
  income?: string;
  days?: string;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (income: string, days: string): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    if (!income.trim()) {
      newErrors.income = "This field is required";
    } else {
      const incomeNum = parseFloat(income);
      if (isNaN(incomeNum) || incomeNum <= 0) {
        newErrors.income = "Must be a positive number";
      } else if (income.includes(".") || !Number.isInteger(incomeNum)) {
        newErrors.income = "Must be a whole number";
      }
    }

    if (!days.trim()) {
      newErrors.days = "This field is required";
    } else {
      const daysNum = parseInt(days, 10);
      if (isNaN(daysNum) || daysNum <= 0) {
        newErrors.days = "Must be a positive number";
      } else if (days.includes(".") || !Number.isInteger(daysNum)) {
        newErrors.days = "Must be a whole number";
      }
    }

    setErrors(newErrors);
    return newErrors;
  };

  const clearErrors = () => setErrors({});

  return { errors, setErrors, validateForm, clearErrors };
}
