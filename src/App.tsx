import { ThemeProvider } from 'styled-components';

import { theme } from 'src/theme';
import Home from './pages/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
