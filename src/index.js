import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Main from './comps/mainPages/Main';
import Blog from './comps/mainPages/Blog';
import BigArticle from './comps/mainPages/BigArticle';
import Courses from './comps/mainPages/Courses';
import BigCourse from './comps/BigCourse';
import About from "./comps/mainPages/About"
import Donation from "./comps/mainPages/Donation"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article" element={<BigArticle />} />
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/bigCourse" element={<BigCourse/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/donation" element={<Donation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
