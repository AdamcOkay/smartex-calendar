import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
  column-gap: 1rem;
  row-gap: 1rem;
  align-items: center;
`;

export const MainButton = styled.button`
  display: block;
  min-width: 10rem;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  outline: none;
  border: 2px solid rgb(var(--clr-blue-500));
  background-color: rgb(var(--clr-blue-500));
  cursor: pointer;
  font-weight: 700;
  color: rgb(var(--clr-white-400));
  transition: background-color 0.1s linear;

  @media (hover: hover) {
    &:hover,
    &:focus-visible {
      background-color: rgba(var(--clr-blue-500), 0.8);
    }
  }

  &:active {
    background-color: rgba(var(--clr-blue-500), 0.6);
  }
`;

export const CancelButton = styled(MainButton)`
  background-color: transparent;
  color: rgb(var(--clr-blue-500));

  @media (hover: hover) {
    &:hover,
    &:focus-visible {
      background-color: rgba(var(--clr-blue-300), 0.3);
    }
  }

  &:active {
    background-color: rgba(var(--clr-blue-300), 0.5);
  }
`;
