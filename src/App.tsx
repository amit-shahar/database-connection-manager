import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from  '@mui/material/CssBaseline';
import theme from './theme';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
);
export default App;

