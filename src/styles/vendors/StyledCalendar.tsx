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
    color: rgb(var(--clr-blue-500));
    text-transform: capitalize;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: rgb(var(--clr-blue-400));
  }
`;
