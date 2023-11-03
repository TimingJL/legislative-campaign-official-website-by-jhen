import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'src/theme';
import Home from './pages/home';
import AOS from "aos";

function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
