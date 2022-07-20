import { css } from "styled-components";

export const StyledCalendar = css`
  .react-datepicker__header {
    background-color: rgb(var(--clr-blue-300));
  }

  .react-datepicker__navigation-icon {
    line-height: 15px;

    &::before {
      border-color: rgb(var(--clr-blue-500));
    }
  }

  .react-datepicker__current-month {
    display: none;
  }

  .react-datepicker__month-dropdown-container {
    display: block;
  }

  .react-datepicker__month-select,
  .react-datepicker__year-select {
    display: block;
    width: 100%;
    -webkit-appearance: none;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 700;
    line-height: 100%;
    color: rgb(var(--clr-blue-500));
    text-align: center;
    text-transform: capitalize;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: rgb(var(--clr-blue-400));
  }
`;
