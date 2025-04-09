import React, { useRef } from "react";
import io from "socket.io-client";
import fundoBloco from "../assets/fundoBloco.jpg";

const Join = (props) => {
  //Hook useRef
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }
    // Criando a conexão com o socket
    const servidorSocket = await io.connect("http://132.168.10.123:3001");
    servidorSocket.emit("set_username", username);

    // Abrindo a página de chat
    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
    <div className="text-center">
      <h1 style={{ fontWeight: 800, fontSize: 50 }}>Dev Chat</h1>

      <div
        id="join-box"
        style={{
          backgroundImage: `url(${fundoBloco})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mt-4 rounded-4 py-4 px-5 d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <h3
          style={{
            fontWeight: 700,
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Background color with transparency
            borderRadius: "12px", // Rounded corners
            padding: "10px 20px", // Padding around the text
          }}
        >
          Bem-vindo ao devChat!
        </h3>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <label htmlFor="floatingInput" className="">
            Nome de usuário
          </label>
        </div>
        <button
          className="btn btn-light px-5 py-2"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;