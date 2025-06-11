export interface CompensationInput {
  grossIncome: number;
  sickLeaveDays: number;
  hasTuberculosis: boolean;
}

export interface CompensationResult {
  employerDays: number;
  employerAmount: number;
  insuranceDays: number;
  insuranceAmount: number;
  total: number;
  dailyAllowance: number;
}
