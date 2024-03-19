import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  const sendMessage = async (e) => {
    e.preventDefault();

    // kolleksiyonun referansini al
    const messegesCol = collection(db, "messages");

    // kolleksiyona yeni document ekle
    await addDoc(messegesCol, {
      text: e.target[0].value, // Assuming e.target is the input element itself
      room,
      createdAt: serverTimestamp(), // Assuming you're using Firestore
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
    });

    // formu sifirla
    e.target.reset();
  };
  // mevcut odada gonderilen mesajlari anlik oalrak al
  useEffect(() => {
    // kolleksiyonun referansini al
    const messagesCol = collection(db, "messages");

    // filtreleme ayarlari olustur
    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    // mesajlar koleksiyonundan verileri al
    // onsnaphot anlik olarak koleksiyondkai degisiklikleri izler
    // koleksiyon her degistiginde verdigimiz fonks ile kolleksiyondaki tum elemnalara erisiyoruz

    onSnapshot(q, (snapshot) => {
      // verilerin gecisi oalrak tutulacagi bos dizi olustur
      const tempMsg = [];
      // dokumalari don ve verilerine eris
      snapshot.forEach((doc) => {
        tempMsg.push(doc.data());
      });
      // mesajlari state aktar
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p className="cur-user">{auth.currentUser?.displayName}</p>
        <p className="cur-room">{room}</p>
        <button onClick={() => setRoom(null)}>Change Room</button>
      </header>

      <main>
        {messages.map((data, i) => (
          <Message data={data} key={i} />
        ))}
      </main>

      <form onSubmit={sendMessage}>
        <input type="text" required placeholder="Enter your message" />
        <button>Send</button>
      </form>
    </div>
  );
};
export default ChatPage;
