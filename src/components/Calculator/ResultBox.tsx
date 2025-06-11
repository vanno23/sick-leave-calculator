import React from "react";
import type { CompensationResult } from "../../types/compensation";
import styles from "./Calculator.module.scss";

type ResultBoxProps = {
  result: CompensationResult;
};

const ResultBox: React.FC<ResultBoxProps> = ({ result }) => {
  const formatNumber = (value: number) =>
    new Intl.NumberFormat("de-DE", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <aside className={styles.resultBox}>
      <dl className={styles.resultBox__list}>
        <div className={styles.resultBox__group}>
          <div className={styles.resultBox__item}>
            <dt className={styles.resultBox__term}>The employer compensates</dt>
            <dd className={styles.resultBox__daysDescription}>
              {result.employerDays} days
            </dd>
            <dd className={styles.resultBox__amountDescription}>
              <span className={styles.resultBox__totalAmount}>
                {formatNumber(result.employerAmount)}€
              </span>
              <span className={styles.resultBox__dailyAmount}>
                <span className={styles.resultBox__dailyAmountLabel}>
                  Daily allowance
                </span>
                <span className={styles.resultBox__dailyAmountValue}>
                  {formatNumber(result.dailyAllowance)} €
                </span>
              </span>
            </dd>
          </div>

          <div className={styles.resultBox__item}>
            <dt className={styles.resultBox__term}>
              Health insurance compensates
            </dt>
            <dd className={styles.resultBox__daysDescription}>
              {result.insuranceDays} days
            </dd>
            <dd className={styles.resultBox__amountDescription}>
              <span className={styles.resultBox__totalAmount}>
                {formatNumber(result.insuranceAmount)}€
              </span>
              <span className={styles.resultBox__dailyAmount}>
                <span className={styles.resultBox__dailyAmountLabel}>
                  Daily allowance
                </span>
                <span className={styles.resultBox__dailyAmountValue}>
                  {formatNumber(result.dailyAllowance)} €
                </span>
              </span>
            </dd>
          </div>
        </div>

        <div
          className={`${styles.resultBox__item} ${styles["resultBox__item--total"]}`}
        >
          <dt className={styles.resultBox__term}>
            Compensation total for {result.employerDays + result.insuranceDays}{" "}
            days (net)
          </dt>
          <dd className={styles.resultBox__description}>
            {formatNumber(result.total)}€
          </dd>
        </div>
      </dl>
    </aside>
  );
};

export default ResultBox;
