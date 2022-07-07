import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { theme } from '../constants/theme';

const Wrapper = ({ children }: BrowserRouterProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </BrowserRouter>
);

const renderWithContext = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: Wrapper });
};

export default renderWithContext;
