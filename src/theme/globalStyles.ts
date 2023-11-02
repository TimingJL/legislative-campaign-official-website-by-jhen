import { createGlobalStyle } from 'styled-components';
import MantouSans from 'src/assets/font/MantouSans-Regular.ttf';
import { device } from './breakpoints';

const GlobalStyle = createGlobalStyle`
:root {
  /* color */
  --slate-50: #F8FAFC;
  --slate-100: #F1F5F9;
  --slate-200: #E2E8F0;
  --slate-300: #CBD5E1;
  --slate-400: #94A3B8;
  --slate-500: #64748B;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1E293B;
  --slate-900: #0F172A;
  --primary-gradient: -webkit-linear-gradient(left, #E5793B 1.54%, #FF4185 97.86%);
  --primary-color: #DA7D4A;
  --text-primary: var(--slate-700);
  --text-secondary: var(--slate-400);
  --bg-primary: #FDFCFB;
  --bg-secondary: #F7ECE1;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  /* color-scheme: light dark; */
  color: var(--text-primary);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  line-height: 1;
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
}

h1 {
  font-size: 40px;
  line-height: 1.5; /* 60px */
  letter-spacing: -0.8px;
  @media ${device.mobile} {
    font-size: 32px;
  }
}

h2 {
  font-size: 32px;
  line-height: normal;
  @media ${device.mobile} {
    font-size: 24px;
  }
}

h3 {
  font-size: 28px;
  line-height: normal;
  @media ${device.mobile} {
    font-size: 24px;
  }
}

h4 {
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  line-height: 1.5; /* 36px */
  @media ${device.mobile} {
    font-size: 24px;
  }
}

h5 {
  font-size: 20px;
  line-height: normal;
  @media ${device.mobile} {
    font-size: 20px;
  }
}

h6 {
  font-size: 16px;
  line-height: normal;
  @media ${device.mobile} {
    font-size: 16px;
  }
}

body {
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  @media ${device.mobile} {
    font-size: 16px;
  }
}

ol, ul {
  padding: 0px;
  margin: 0px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

@font-face {
  font-family: "Mantou Sans";
  src: local("Mantou Sans"), url(${MantouSans}) format("truetype");
  font-weight: normal;
}
`;

export default GlobalStyle;
