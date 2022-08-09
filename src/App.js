import './App.css';
import Header from './comps/Header';
import Main from './comps/Main';
import Footer from "./comps/Footer"
import BigCourse from './comps/BigCourse';
import { Outlet } from 'react-router-dom';

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
