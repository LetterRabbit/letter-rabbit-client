import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateMailBox from 'pages/CreateMailBox/CreateMailBox';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Mail from 'pages/Mail/Mail.[id]';
import MailList from 'pages/MailList/MailList';
import Post from 'pages/Post/Post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 주(authenticated user) Route */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-mailbox" element={<CreateMailBox />} />
        <Route path="/mailbox" element={<MailList />} />
        <Route path="/mailbox/:id" element={<Mail />} />

        {/* 객(client user) Route */}
        <Route path="/create-message" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
