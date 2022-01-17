import React from 'react';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import { Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage/PostPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import EditPage from './pages/EditPage/EditPage';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/createPost" element={<CreatePostPage />} />
      <Route path="/editPage/:id" element={<EditPage />} />
      <Route path="/postPage/:id" element={<PostPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </>
);

export default App;
