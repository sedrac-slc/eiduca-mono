import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';
import './i18n';

createRoot(document.getElementById('outlet')!).render(createElement(App));