import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="iris" grayColor="gray" panelBackground="solid" radius="small" scaling="95%">
      <App />
    </Theme>
  </React.StrictMode>,
)
