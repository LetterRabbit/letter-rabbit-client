import { getQueryString } from 'utils/queryString';
import css from './Login.module.scss';

const Login = () => {
  return (
    <div className={css.container}>
      <main className={css.loginWrapper}>
        <h1>Login</h1>
        <button onClick={getKakaoAuth}>Kakao Login</button>
      </main>
    </div>
  );
};

export default Login;

// FIXME: kakao 관련된 폴더로 이동
export const getKakaoAuth = () => {
  window.location.href = KAKAO_BASIC_OAUTH_URL + getQueryString(kakaoQueryData);
};

export const kakaoQueryData = {
  client_id: import.meta.env.VITE_REACT_APP_KAKAO_REST_API_KEY ?? '',
  redirect_uri: import.meta.env.VITE_REACT_APP_KAKAO_REDIRECT_URI ?? '',
  response_type: 'code',
  prompt: 'login',
};

export const KAKAO_BASIC_OAUTH_URL = 'https://kauth.kakao.com/oauth/authorize?';
export const KAKAO_TOKEN_OAUTH_URL = 'https://kauth.kakao.com/oauth/token?';
