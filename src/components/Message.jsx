import { auth } from "../firebase/config";

const Message = ({ data }) => {
  // oturumu acik olanin id'si mesaji atanin id'sine esitse >
  // mesaj icerigni bas
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // esit degilse >
  // kullanici bilgisi + mesaj icerigini bas
  return (
    <div className="msg-other">
      <div className="user-info">
        <p>
          <img src={data.author.photo} />
          <span>{data.author.displayName}</span>
        </p>
      </div>
      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;
