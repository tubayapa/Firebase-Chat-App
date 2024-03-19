import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  // kullanici sectigi oda statei
  const [room, setRoom] = useState(null);

  // kullanicinin yetkisi var mi statei
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token")); // Initialize isAuth with false

  // If user is not authenticated, render AuthPage
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  // If user is authenticated, render chat room selection page
  return (
    <div className="container">
      {!room ? (
        // oda secilmediyse
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      ) : (
        // oda secildiyse
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
