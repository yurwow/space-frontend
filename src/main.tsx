import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider.tsx';
import App from '@/app/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
);
