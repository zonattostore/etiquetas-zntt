import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'simple-display/dist/style.css';
import App from './App.tsx';
import './assets/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
