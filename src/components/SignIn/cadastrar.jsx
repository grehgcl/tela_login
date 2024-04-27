import React, { useState } from "react";
import { Link } from "react-router-dom";


const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o servidor ou fazer outra ação com eles
    console.log("Nome Completo:", fullname);
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Nome Completo:</label><br />
        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="password">Senha:</label><br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignupForm;
