import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateMailBox from 'pages/CreateMailBox/CreateMailBox';
import Home from 'pages/Home/Home';
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
        <Route
          path="/mailbox"
          element={
            <PrivateRoute>
              <MailList />
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
        <Route
          path="/mailbox/:id"
          element={
            <PrivateRoute>
              <Mail />
            </PrivateRoute>
          }
        />
        <Route path="/create-message" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
