import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化css样式表
import 'reset-css';
import '@/assets/styles/global.scss'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
