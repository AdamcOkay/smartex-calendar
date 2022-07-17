import styled from "styled-components";

export const CheckSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
`;

export const CheckInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: rgb(var(--clr-blue-400));
  }

  &:focus + span {
    box-shadow: 0 0 1px rgb(var(--clr-blue-500));
  }

  &:checked + span::before {
    transform: translateX(1.5rem);
  }
`;

export const CheckToggle = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(var(--clr-blue-300));
  border-radius: 1rem;
  transition: 0.1s;

  &::before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 4px;
    bottom: 4px;
    background-color: rgb(var(--clr-white-400));
    border-radius: 50%;
    transition: 0.1s;
  }
`;
