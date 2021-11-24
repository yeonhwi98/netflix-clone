import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColor = {
  fontColor: "white",
  bgColor: "#1d1d1d",
};

export const mainWeight = {
  titleWeight: 600,
};

export const moSize = {
  paddng: "0 15px",
  titleSize: "45px",
  descSize: "16px",
  movieTitle: "14px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing:border-box;
    }

    a{
        text-decoration: none;
        color: ${mainColor.fontColor};
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainColor.bgColor};
        color: ${mainColor.fontColor};
        letter-spacing: -1px;
        word-break:keep-all
    }
`;
