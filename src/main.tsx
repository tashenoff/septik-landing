import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { i18nInit } from './i18n'

const init = async () => {
  // Ждем полной инициализации i18n
  await i18nInit;
  
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </React.StrictMode>,
  )
}

init();
