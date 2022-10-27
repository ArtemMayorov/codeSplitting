import React, {Suspense} from 'react';
import './App.css';
import {Routes, Route} from 'react-router'
// import MainPage from './Pages/MainPage';
// import AboutPage from './Pages/AboutPage';
import Links from './Links';

const MainPage = React.lazy(()=> import('./Pages/MainPage'))
const AboutPage = React.lazy(()=> import('./Pages/AboutPage'))

function App(){
  return (
    <div className="App">
      <header className="App-header">
      <Links/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='about-page' element={<AboutPage/>}/>
      </Routes>
      </Suspense>
      </header>
    </div>
  );
}

export default App;
