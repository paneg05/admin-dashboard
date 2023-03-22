import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import Dashboard from "./views/Dashboard";
import Team from './views/Team'
import Bar from './views/Bar'
import Contacts from "./views/Contacts";
import Faq from "./views/Faq";
import Form from "./views/Form";
import Invoices from "./views/Invoices";
import Line from "./views/Line";
import Pie from "./views/Pie";
import Calendar from "./views/Calendar";
import Geography from "./views/Geography";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProSidebarProvider style={{border:'none'}}>
        <App/>
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

