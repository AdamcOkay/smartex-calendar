import styled from "styled-components";

export const ModesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  color: rgba(var(--clr-blue-400));
`;

export const ModeButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  background-color: rgba(var(--clr-blue-300), 0.5);
  outline: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  color: rgb(var(--clr-blue-500));
  transition: background-color 0.1s linear, color 0.1s linear;

  @media (hover: hover) {
    &:hover,
    &:focus-visible {
      background-color: rgba(var(--clr-blue-300), 0.8);
    }
  }

  &:active {
    background-color: rgba(var(--clr-blue-300), 1);
  }
`;

export const AddMode = styled.button`
  padding: 0.5rem 0;
  background-color: rgb(var(--clr-blue-400));
  outline: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  color: rgb(var(--clr-white-400));
  transition: background-color 0.1s linear;

  @media (hover: hover) {
    &:hover,
    &:focus-visible {
      background-color: rgba(var(--clr-blue-400), 0.8);
    }
  }

  &:active {
    background-color: rgba(var(--clr-blue-400), 0.6);
  }
`;
