import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import NineCards from './components/nineCards/NineCards';
import GroceryList from './components/groceryList/GroceryList';
import Video from './components/video/Video';
import Form from './components/form/Form';
import Suggestions from './components/suggestions/Suggestions';
import Footer from './components/footer/Footer';
import './index.css';


function App() {
  const [list, setList] = useState([])
  return (
    <div id="fullContainer">

      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
                  
        </Routes>
      </Router>


      <NineCards list={list} setList={setList} />
      <GroceryList list={list} setList={setList}/>
      <Video />
      <Form />
      <Suggestions />
      <Footer />

    </div>
  );
}

export default App;
