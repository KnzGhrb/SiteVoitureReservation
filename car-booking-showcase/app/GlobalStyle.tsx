// app/GlobalStyle.tsx
"use client";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f7f1e6; /* Lightest beige */
    color: #5a5a5a; /* Darker grey for text */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  button {
    font-family: inherit;
  }

  .content-section {
    background: #f0e6d6; /* Light beige */
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 4px 4px 8px #e8dccc, -4px -4px 8px #fffbf5;
  }
`;

export default GlobalStyle;
