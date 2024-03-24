import React from 'react';
import './App.css';
import Footer from './layouts/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './layouts/user/LoginForm';
import NavBar from './layouts/header/NavBar';
import HomePage from './layouts/homepage/HomePage';
import RegisterForm from './layouts/user/RegisterForm';
import Post from './layouts/post/Post';
import PostDetail from './layouts/post/components/PostDetail';
import About from './layouts/page/About';
import Contact from './layouts/page/Contact';
import Forum from './layouts/forum/Forum';
import Theory from './layouts/theory/Theory';
import Problem from './layouts/Problem/Problem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/post' element={<Post />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/theory' element={<Theory />} />
          <Route path='/problem' element={<Problem />} />
          <Route path='/post-detail' element={<PostDetail />} />
          <Route path='/page/about' element={<About />} />
          <Route path='/page/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
