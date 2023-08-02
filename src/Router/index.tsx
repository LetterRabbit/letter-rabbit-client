import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateMailBox from 'pages/CreateMailBox/CreateMailBox';
import Home from 'pages/Home/Home';
import KakaoCallback from 'pages/Login/KakaoCallback';
import Login from 'pages/Login/Login';
import Mail from 'pages/Mail/Mail.[id]';
import MailList from 'pages/MailList/MailList';
import Post from 'pages/Post/Post';

import PrivateRoute from './PrivateRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* Mail List Page */}
        <Route
          path="/mailbox/:id"
          element={
            <PrivateRoute>
              <MailList />
            </PrivateRoute>
          }
        />
        {/* Mail Detail Page */}
        <Route
          path="/mail/:id"
          element={
            <PrivateRoute>
              <Mail />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-mailbox"
          element={
            <PrivateRoute>
              <CreateMailBox />
            </PrivateRoute>
          }
        />

        <Route path="/users/callback" element={<KakaoCallback />} />
        <Route path="/create-message/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
