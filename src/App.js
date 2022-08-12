import './App.css';
import Header from './comps/Header';
import Footer from "./comps/Footer"
import BigCourse from './comps/BigCourse';
import { Outlet } from 'react-router-dom';
import About from './comps/mainPages/About';


function App() {
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
