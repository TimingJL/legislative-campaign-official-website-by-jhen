import { createGlobalStyle } from 'styled-components';
import 'src/fonts/MantouSans-Regular.ttf';

const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

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
  --primary-gradient: linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%);
  --primary-color: #DA7D4A;
  --text-primary: var(--slate-700);
  --text-secondary: var(--slate-400);
  --bg-primary: #FDFCFB;
  --bg-secondary: #F7ECE1;

  /* breakpoint */
  --breakpoint-mobile: 375px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  line-height: 1;
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  color: #343A40;
}

h1 {
  font-size: 40px;
  line-height: 150%; /* 60px */
  letter-spacing: -0.8px;
  @media (max-width: var(--breakpoint-mobile)) {
    font-size: 32px;
  }
}

h2 {
  font-size: 32px;
  line-height: normal;
  @media (max-width: var(--breakpoint-mobile)) {
    font-size: 24px;
  }
}

h3 {
  font-size: 28px;
  line-height: normal;
  @media (max-width: var(--breakpoint-mobile)) {
    font-size: 24px;
  }
}

h4 {
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  line-height: 150%; /* 36px */
  @media (max-width: var(--breakpoint-mobile)) {
    font-size: 24px;
  }
}

h5 {
  font-size: 20px;
  line-height: normal;
  @media (max-width: var(--breakpoint-mobile)) {
    font-size: 20px;
  }
}

h6 {
  font-size: 16px;
  line-height: normal;
  @media (max-width: var(--breakpoint-mobile)) {
    font-size: 16px;
  }
}

body {
  font-size: 16px;
  color: #343A40;
  @media (max-width: var(--breakpoint-mobile)) {
    font-size: 16px;
  }
}

@font-face {
  font-family: "MantouSans";
  src: local("MantouSans"), url("src/fonts/MantouSans-Regular.ttf") format("truetype");
  font-weight: normal;
}
`;

export default GlobalStyle;
