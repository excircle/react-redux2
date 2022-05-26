import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();

root.render(
  <ReduxProvider store={store}>
    <Router>
      <App tab="home" />
    </Router>
  </ReduxProvider>
);