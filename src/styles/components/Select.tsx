import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;

  &::before {
    content: "\\25BE";
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    color: rgb(var(--clr-blue-500));
  }
`;

export const Select = styled.select`
  position: relative;
  width: 100%;
  padding: 0.25rem;
  background: none;
  outline: 0;
  border: 1px solid rgb(var(--clr-blue-500));
  border-radius: 0.25rem;
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 2;
`;
