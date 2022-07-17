import styled from "styled-components";

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  align-items: center;
  column-gap: 2rem;
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  display: block;
  font-weight: 700;
  color: rgba(var(--clr-blue-500), 0.5);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  background: none;
  outline: none;
  border: 1px solid rgb(var(--clr-blue-300));
  border-radius: 0.5rem;

  &:focus {
    border: 1px solid rgb(var(--clr-blue-500));
  }
`;
