import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user);
      // kullanicinin yetkisini true yap
      setIsAuth(true);

      // kullanci bilgisni local'de sakla
      localStorage.setItem("token", data.user.refreshToken);
    });
  };

  return (
    <div className="container">
      <div className="auth">
        <h2>Chat Room</h2>
        <p>Log in to continue</p>
        <button onClick={handleClick}>
          <img src="/public/g-logo.png" alt="" />
          <span>Log in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
