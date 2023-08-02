import Button from 'components/Button/Button';
import { getQueryString } from 'utils/queryString';
import logo from '../../assets/logo.svg';
import css from './Login.module.scss';

const Login = () => {
  return (
    <main className={css.loginWrapper}>
      <div></div>
      <div className={css.infoBox}>
        <img src={logo} alt="mail" />
        <h1 className={css.title}>너를 위함</h1>
        <h2 className={css.subTitle}>
          당신의 <strong>소중함</strong>을 전달하세요
        </h2>
      </div>
      <Button
        type="kakao"
        font="bold"
        title="카카오톡으로 시작하기"
        clickAction={getKakaoAuth}
      />
    </main>
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
