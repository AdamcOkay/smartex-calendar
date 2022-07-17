import styled from "styled-components";

export const Tabs = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 2rem 0 2.5rem 0;
  list-style: none;
`;

export const Tab = styled.li<{ isTabActive: boolean }>`
  & + & {
    margin-left: 1rem;
  }

  a {
    display: block;
    padding: 0.75em 1em;
    background-color: ${(props) =>
      props.isTabActive ? `rgba(var(--clr-blue-500), 1)` : `transparent`};
    border-radius: 0.5em;
    font-size: 1em;
    line-height: 100%;
    color: ${(props) =>
      props.isTabActive ? `#ffffff` : `rgb(var(--clr-blue-500))`};
    text-decoration: none;
    transition: background-color 0.1s linear, color 0.1s linear;

    @media (hover: hover) {
      &:hover,
      &:focus-visible {
        background-color: ${(props) =>
          props.isTabActive
            ? `rgba(var(--clr-blue-500), 0.8)`
            : `rgba(var(--clr-blue-400), 0.1)`};
      }
    }

    &:active {
      background-color: ${(props) =>
        props.isTabActive
          ? `rgba(var(--clr-blue-500), 0.6)`
          : `rgba(var(--clr-blue-400), 0.3)`};
    }
  }
`;
