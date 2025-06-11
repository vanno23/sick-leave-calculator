import type {
  CompensationInput,
  CompensationResult,
} from "../types/compensation";

import {
  EMPLOYER_COVER_START,
  EMPLOYER_COVER_END,
  INSURANCE_COVER_START,
  MAX_DURATION_NORMAL,
  MAX_DURATION_TUBERCULOSIS,
  COMPENSATION_RATE,
  GROSS_TO_NET_RATE,
  DAYS_IN_MONTH,
} from "../constants/compensationRules";

export function calculateCompensation(
  input: CompensationInput
): CompensationResult & { errors?: { income?: string; days?: string } } {
  const { grossIncome, sickLeaveDays, hasTuberculosis } = input;

  const errors: { income?: string; days?: string } = {};

  if (Object.keys(errors).length > 0) {
    return {
      employerDays: 0,
      employerAmount: 0,
      insuranceDays: 0,
      insuranceAmount: 0,
      total: 0,
      dailyAllowance: 0,
      errors,
    };
  }

  const netIncome = grossIncome * GROSS_TO_NET_RATE;
  const dailyAllowance = (netIncome * COMPENSATION_RATE) / DAYS_IN_MONTH;

  const maxDuration = hasTuberculosis
    ? MAX_DURATION_TUBERCULOSIS
    : MAX_DURATION_NORMAL;

  const daysConsidered = Math.min(sickLeaveDays, maxDuration);

  const employerDays = Math.max(
    0,
    Math.min(daysConsidered, EMPLOYER_COVER_END) - EMPLOYER_COVER_START + 1
  );

  const insuranceDays = Math.max(0, daysConsidered - INSURANCE_COVER_START + 1);

  const employerAmount = employerDays * dailyAllowance;
  const insuranceAmount = insuranceDays * dailyAllowance;

  return {
    employerDays,
    employerAmount,
    insuranceDays,
    insuranceAmount,
    total: employerAmount + insuranceAmount,
    dailyAllowance,
  };
}
