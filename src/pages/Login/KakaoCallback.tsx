import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//TODO: hook 으로 빼기
const KakaoCallback = () => {
  const navigate = useNavigate();
  const authCode = new URLSearchParams(window.location.search).get('code');

  useEffect(() => {
    tryLoginOrSignUp(authCode ?? '').then(token => {
      if (!token) return navigate('/login');
      localStorage.setItem('access_token', token);
      navigate('/');
    });
  }, [authCode, navigate]);

  return <></>;
};

export default KakaoCallback;

// TODO: service 로 빼기
const tryLoginOrSignUp = async (code: string) => {
  const res = await axios.post(
    import.meta.env.VITE_API_ENDPOINT + '/users/login',
    null,
    {
      headers: {
        authCode: code,
      },
    }
  );

  if (res.status !== 200) {
    alert('로그인에 실패했습니다.');
    return;
  }

  const { access_token } = res.data;
  return access_token;
};
