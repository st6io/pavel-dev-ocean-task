import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';

import { Path } from './constants/Path';
import Redirect from './components/Redirect';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/layout/Header';
import { client } from './client/client';

import BusinessesPage from './pages/Businesses';
import BusinessPage from './pages/Business';
import NotFoundPage from './pages/NotFound';

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Global styles={GlobalStyles} />

      <Header />

      <Routes>
        <Route path={Path.Root} element={<Redirect to={Path.AllBusinesses} />} />

        <Route path={Path.AllBusinesses} element={<BusinessesPage />} />
        <Route path={Path.Business}>
          <Route path=":id" element={<BusinessPage />} />

          <Route index element={<Redirect to={Path.AllBusinesses} />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
