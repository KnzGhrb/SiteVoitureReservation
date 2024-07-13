// app/GlobalStyle.tsx
"use client";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f9f4ef; /* Light beige */
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
    background: #fffaf3; /* White beige for better contrast */
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 4px 4px 8px #f2e7da, -4px -4px 8px #fffcf9;
  }

  @media (max-width: 768px) {
    .content-section {
      padding: 15px;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 480px) {
    .content-section {
      padding: 10px;
      margin-bottom: 10px;
    }
  }
`;

export default GlobalStyle;
