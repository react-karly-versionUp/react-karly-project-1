import React from 'react';
import style from '../Register/BirthdayInput.module.css';

export function BirthdayInput() {
  return (
    <li>
      <p className={style['register-label']}>생년월일</p>
      <div className={style['register-birth-wrapper']}>
        <label htmlFor="birth-year" className={style['a11y-hidden']}>
          연도 입력(4글자)
        </label>
        <input
          type="text"
          maxlength="4"
          minlength="4"
          id="birth-year"
          name="birth-year"
          placeholder="YYYY"
          aria-hidden="true"
        />
        <span aria-hidden="true" className={style['birth-between']}>
          /
        </span>
        <label htmlFor="birth-month" className={style['a11y-hidden']}>
          월 입력(2글자)
        </label>
        <input
          type="text"
          maxlength="2"
          minlength="2"
          id="birth-month"
          name="birth-month"
          placeholder="MM"
          aria-hidden="true"
        />
        <span aria-hidden="true" className={style['birth-between']}>
          /
        </span>
        <label htmlFor="birth-day" className={style['a11y-hidden']}>
          일 입력(2글자)
        </label>
        <input
          type="text"
          maxlength="2"
          minlength="2"
          id="birth-day"
          name="birth-day"
          placeholder="DD"
          aria-hidden="true"
        />
      </div>
    </li>
  );
}
