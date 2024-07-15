import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import './i18n/i18n'
import App from './app/index.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
