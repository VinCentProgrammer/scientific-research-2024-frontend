import React, { useState } from 'react';
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
import UserList from './layouts/user/UserList';
import UserForm from './layouts/user/UserForm';
import RoleList from './layouts/role/RoleList';
import RoleForm from './layouts/role/RoleForm';
import ActiveAccount from './layouts/user/ActiveAccount';
import ResetPassword from './layouts/user/ResetPassword';
import ResetPassForm from './layouts/user/ResetPassForm';
import Page401 from './layouts/page/Page401';
import Page404 from './layouts/page/Page404';
import Page500 from './layouts/page/Page500';
import PostList from './layouts/post/PostListAdmin';
import PostForm from './layouts/post/PostFormAdmin';
import Page403 from './layouts/page/Page403';
import UserFormUpdate from './layouts/user/UserFormUpdate';
import PermissionForm from './layouts/role/PermissionForm';
import PermissionList from './layouts/role/PermissionList';
import PermissionFormUpdate from './layouts/role/PermissionFormUpdate';
import RoleFormUpdate from './layouts/role/RoleFormUpdate';
import RoleDetail from './layouts/role/RoleDetail';
import PageForm from './layouts/page/PageForm';
import PostCatForm from './layouts/post/PostCatFormAdmin';
import PostCatList from './layouts/post/PostCatListAdmin';
import PostCatFormUpdateAdmin from './layouts/post/PostCatFormUpdateAdmin';
import PostFormUpdateAdmin from './layouts/post/PostFormUpdateAdmin';
import ScrollToTopButton from './utils/ScrollToTopButton';
import TheoryFormAdmin from './layouts/theory/TheoryFormAdmin';
import TheoryListAdmin from './layouts/theory/TheoryListAdmin';
import TheoryFormUpdateAdmin from './layouts/theory/TheoryFormUpdateAdmin';
import TheoryCatFormAdmin from './layouts/theory/TheoryCatFormAdmin';
import TheoryCatListAdmin from './layouts/theory/TheoryCatListAdmin';
import TheoryCatFormUpdateAdmin from './layouts/theory/TheoryCatFormUpdateAdmin';
import TheoryExampleFormAdmin from './layouts/theory/TheoryExampleFormAdmin';
import TheoryExampleListAdmin from './layouts/theory/TheoryExampleListAdmin';
import TheoryExampleFormUpdateAdmin from './layouts/theory/TheoryExampleFormUpdateAdmin';
import TheoryKeywordFormAdmin from './layouts/theory/TheoryKeywordFormAdmin';
import TheoryKeywordListAdmin from './layouts/theory/TheoryKeywordListAdmin';
import TheoryKeywordFormUpdateAdmin from './layouts/theory/TheoryKeywordFormUpdateAdmin';
import SidebarMenu from './layouts/theory/SidebarMenu';

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
          <Route path='/admin/user/edit/:userIdParam' element={<UserFormUpdate />} />
          <Route path='/admin/role/permission/add' element={<PermissionForm />} />
          <Route path='/admin/role/permission/list' element={<PermissionList />} />
          <Route path='/admin/role/permission/edit/:permissionIdParam' element={<PermissionFormUpdate />} />
          <Route path='/admin/role/list' element={<RoleList />} />
          <Route path='/admin/role/add' element={<RoleForm />} />
          <Route path='/admin/role/edit/:roleIdParam' element={<RoleFormUpdate />} />
          <Route path='/admin/role/list/:roleIdParam' element={<RoleDetail />} />

          {/* //////////////////////////////// PAGE ///////////////////////////////// */}
          <Route path='/admin/page/add' element={<PageForm />} />
          <Route path='/admin/page/list' element={<PageList />} />
          <Route path='/page/about' element={<About />} />
          <Route path='/page/contact' element={<Contact />} />
          <Route path="/page/401" element={<Page401 />} />
          <Route path="/page/403" element={<Page403 />} />
          <Route path="/page/404" element={<Page404 />} />
          <Route path="/page/500" element={<Page500 />} />


          {/* //////////////////////////////// POST ///////////////////////////////// */}
          <Route path='/post' element={<Post />} />
          <Route path='/post-detail' element={<PostDetail />} />
          <Route path='admin/post/list' element={<PostList />} />
          <Route path='admin/post/add' element={<PostForm />} />
          <Route path='admin/post/edit/:postIdParam' element={<PostFormUpdateAdmin />} />
          <Route path='admin/post/cat/add' element={<PostCatForm />} />
          <Route path='admin/post/cat/list' element={<PostCatList />} />
          <Route path='admin/post/cat/edit/:postCatIdParam' element={<PostCatFormUpdateAdmin />} />

          {/* //////////////////////////////// FORUM ///////////////////////////////// */}
          <Route path='/forum' element={<Forum />} />

          {/* //////////////////////////////// THEORY ///////////////////////////////// */}
          <Route path='/theory' element={<Theory />} />
          <Route path='/theory/:theoryCatIdParam' element={<Theory />} />
          <Route path='/admin/theory/add' element={<TheoryFormAdmin />} />
          <Route path='/admin/theory/list' element={<TheoryListAdmin />} />
          <Route path='admin/theory/edit/:theoryIdParam' element={<TheoryFormUpdateAdmin />} />
          <Route path='/admin/theory/topic/add' element={<TheoryCatFormAdmin />} />
          <Route path='/admin/theory/topic/list' element={<TheoryCatListAdmin />} />
          <Route path='admin/theory/topic/edit/:theoryCatIdParam' element={<TheoryCatFormUpdateAdmin />} />
          <Route path='/admin/theory/example/add' element={<TheoryExampleFormAdmin />} />
          <Route path='/admin/theory/example/list' element={<TheoryExampleListAdmin />} />
          <Route path='admin/theory/example/edit/:theoryExampleIdParam' element={<TheoryExampleFormUpdateAdmin />} />
          <Route path='/admin/theory/keyword/add' element={<TheoryKeywordFormAdmin />} />
          <Route path='/admin/theory/keyword/list' element={<TheoryKeywordListAdmin />} />
          <Route path='admin/theory/keyword/edit/:theoryKeywordIdParam' element={<TheoryKeywordFormUpdateAdmin />} />

          {/* //////////////////////////////// PROBLEM ///////////////////////////////// */}
          <Route path='/problem' element={<Problem />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
