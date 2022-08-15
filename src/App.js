import './App.css';
import Header from './comps/Header';
import Footer from "./comps/Footer"
import BigCourse from './comps/BigCourse';
import { Outlet } from 'react-router-dom';
import About from './comps/mainPages/About';


function App() {
  function loadPages () {
    let dots = Array.from(document.querySelectorAll("#blogMain .swiper-pagination-bullet"))
    dots.map((el,num) => {
      el.innerHTML = String(num + 1)
      return el
    })
  }
  loadPages()
  window.onload = function () {
    setInterval (loadPages, 200)
  }
  return (
    <>
      <Header/>
      <main>
          <Outlet/>
      </main>
      <Footer/>
    </>
      
  );
}

export default App;
