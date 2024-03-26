import React from 'react';
import './App.css';
import Footer from './layouts/footer/Footer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
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
import Problem from './layouts/problem/Problem';
import Dashboard from './layouts/dashboard/Dashboard';
import PageList from './layouts/page/PageList';
import PostCat from './layouts/post/PostCat';
import UserList from './layouts/user/UserList';
import UserForm from './layouts/user/UserForm';
import Permission from './layouts/role/Permission';
import RoleList from './layouts/role/RoleList';
import RoleForm from './layouts/role/RoleForm';
import ActiveAccount from './layouts/user/ActiveAccount';
import ResetPassword from './layouts/user/ResetPassword';
import ResetPassForm from './layouts/user/ResetPassForm';
import Page401 from './layouts/page/Page401';
import Page404 from './layouts/page/Page404';
import Page500 from './layouts/page/Page500';
import PostList from './layouts/post/PostList';
import PostForm from './layouts/post/PostForm';
import Page403 from './layouts/page/Page403';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* //////////////////////////////// DASHBOARD ///////////////////////////////// */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* //////////////////////////////// USER ///////////////////////////////// */}
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/active/:email/:activeCode' element={<ActiveAccount />} />
          <Route path='/password-recovery' element={<ResetPassForm />} />
          <Route path='/reset-pass/:email/:activeCode' element={<ResetPassword />} />
          <Route path='/admin/user/list' element={<UserList />} />
          <Route path='/admin/user/add' element={<UserForm />} />
          <Route path='/admin/role/permission' element={<Permission />} />
          <Route path='/admin/role/list' element={<RoleList />} />
          <Route path='/admin/role/add' element={<RoleForm />} />

          {/* //////////////////////////////// PAGE ///////////////////////////////// */}
          <Route path='/page/about' element={<About />} />
          <Route path='/page/contact' element={<Contact />} />
          <Route path="/page/401" element={<Page401 />} />
          <Route path="/page/403" element={<Page403 />} />
          <Route path="/page/404" element={<Page404 />} />
          <Route path="/page/500" element={<Page500 />} />
          <Route path='admin/page/list' element={<PageList />} />


          {/* //////////////////////////////// POST ///////////////////////////////// */}
          <Route path='/post' element={<Post />} />
          <Route path='/post-detail' element={<PostDetail />} />
          <Route path='admin/post/list' element={<PostList />} />
          <Route path='admin/post/add' element={<PostForm />} />
          <Route path='admin/post/cat/list' element={<PostCat />} />

          {/* //////////////////////////////// FORUM ///////////////////////////////// */}
          <Route path='/forum' element={<Forum />} />

          {/* //////////////////////////////// THEORY ///////////////////////////////// */}
          <Route path='/theory' element={<Theory />} />

          {/* //////////////////////////////// PROBLEM ///////////////////////////////// */}
          <Route path='/problem' element={<Problem />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
