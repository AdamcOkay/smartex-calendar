import { createGlobalStyle } from "styled-components";
import { ResetStyles } from "./base/ResetStyles";
import { StyledCalendar } from "./vendors/StyledCalendar";

export const GlobalStyles = createGlobalStyle`
    ${ResetStyles}
    ${StyledCalendar}

    :root{
        --clr-white-400: 249, 247, 247;

        --clr-blue-300: 219, 226, 239;
        --clr-blue-400: 63, 114, 175;
        --clr-blue-500: 17, 45, 78;
    }

    body{
        font-family: 'Ubuntu', sans-serif;
        background-color: #F9F7F7;
        padding-top: 5rem;
    }

    h1{
        font-size: 1.8rem;
    }

    h2{
        font-size: 1.25rem;
    }
`;
