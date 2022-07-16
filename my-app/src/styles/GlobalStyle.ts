import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
    font-family: 'Noto Sans CJK KR', sans-serif;
    font-weight: bold;
  }
  body {    
    background-color: #ffff;    
    padding-top: 180px;
    &::-webkit-scrollbar {
       display: none;
    }
    
  }
  li {
    list-style: none;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
  }
  label {
    display: block;
  }
`;

export default GlobalStyle;
