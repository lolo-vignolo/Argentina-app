import css from "styled-jsx/css";
import { breackpoints, colors, fonts } from "../../styles/Theme";

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
   
   
  }

  main {
    border-radius: 5px;
    background: #E2E8F0;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
   
    height: 100%;
    width: 100%;
    position: relative;
    overflow-y: auto;
  }

  @media (min-width: ${breackpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breackpoints.mobile};
    }
  }


  
  main::-webkit-scrollbar {
                width: 12px;               /* width of the entire scrollbar */
                }

                main::-webkit-scrollbar-track {
                background: #B2F5EA;        /* color of the tracking area */
                }

                main::-webkit-scrollbar-thumb {
                background-color: #38B2AC;    /* color of the scroll thumb */
                border-radius: 20px;       /* roundness of the scroll thumb */
                border: 3px solid #B2F5EA;  /* creates padding around scroll thumb */
                }
`;

export const globalStyle = css.global`
  html body {
    background-image: url("https://images.unsplash.com/photo-1643302067557-c88dc1549591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
   
    background-size: 100% 100%;
    align-items:center;
    height: 100vh;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    overflow: hidden;
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }


  * {
    box-sizing: border-box;
  }
`;