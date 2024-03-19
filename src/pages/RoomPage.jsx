const RoomPage = ({ setRoom, setIsAuth }) => {
  // form gonderilince tetiklenecek fonk

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki odanin adini al
    const room = e.target[0].value;

    // kullanicini sectigi odayi state'e aktar
    setRoom(room.toLowerCase());
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h2>Chat Room</h2>
      <p>Select the room you want to enter</p>
      <input type="text" placeholder="Enter a room name" required />
      <button type="submit">Enter the Room</button>
      <button
        onClick={() => {
          // yetki statei false'a cekerek oda login e yonlendir
          setIsAuth(false);
          // localdeki kaydi kaldir
          localStorage.removeItem("token");
        }}
        type="button"
      >
        Log Out
      </button>
    </form>
  );
};

export default RoomPage;
