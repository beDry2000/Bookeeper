import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Invoice from './routes/invoice';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />}/>
        <Route path="invoices" element={<Invoices />}>
          <Route path=':invoiceId' element={<Invoice />}></Route>
          <Route index element={
            <div style={{padding: '1rem 0'}}>
              <p>Please select an invoice!</p>
            </div>
          }/>
        </Route>
        
        <Route path='*'
          element={
            <main style={{padding: '1rem 0'}}>
              <p>There is nothing to display!!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

