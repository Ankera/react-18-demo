import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// 初始化css样式表
import "reset-css";
import "@/assets/styles/global.scss";
// import 'antd/dist/antd.css';
import App from "./App.tsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


/**
 * https://www.bilibili.com/video/BV1FV4y157Zx?p=18&spm_id_from=pageDriver&vd_source=0b9abcde1e0c06aa453d51487fc56291
 */