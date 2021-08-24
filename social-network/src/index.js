import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "date-fns";
//import Moment from "react-moment";
ReactDOM.render(
  <BrowserRouter>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <App></App>
    </MuiPickersUtilsProvider>
  </BrowserRouter>,

  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
