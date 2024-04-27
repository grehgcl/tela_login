import React, { useState } from "react";
import { Container, Form, Logo } from "./styles";
import FilledInput from "@mui/material/FilledInput";
import { Button, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { Snackbar } from "@mui/material";
import LoginSuccess from "./LoginSuccess"; // Importando o componente de sucesso de login
import gregImg from "../../assets/greg.jpg";


export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário está logado

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setSnackbarMessage("Por favor, digite um email válido.");
      setOpenSnackbar(true);
      return;
    }
    if (password.length < 6) {
      setSnackbarMessage("A senha deve ter pelo menos 6 caracteres.");
      setOpenSnackbar(true);
      return;
    }

    // Se passar pela validação, você pode prosseguir com o login
    setIsLoggedIn(true);
  };

  const isValidEmail = (email) => {
    // RegEx para validar o formato do email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <Container>
      {isLoggedIn ? ( // Verifica se o usuário está logado
        <LoginSuccess />
      ) : (
        <div className="container">
          <div className="container1">
          <div className="image">
            <img
              src={gregImg}
              className="img-banner"
              alt="Greg"
              style={{ width: '70vw', height: 'auto' }}
                   />
          </div>

          </div>
          <div className="container2">
            <Form>
              <Logo>
                <p>Login</p>
              </Logo>
              <FilledInput
                id="filled-adornment-weight"
                className="input"
                placeholder="seuemail@dominio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <HiOutlineUser
                      style={{
                        color: "#0563e7ba",
                        fontSize: "1.3rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
              <FilledInput
                id="filled-adornment-weight"
                className="input"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <SlLock
                      style={{
                        color: "#0563e7ba",
                        fontSize: "1.3rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
              <div className="bottom">
                <Button
                  variant="contained"
                  className="buttom"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <div className="checkbox">
                  <span>
                    <input type="checkbox" className="input-checkbox" />
                  </span>
                  <p>Lembrar senha.</p>
                </div>
              </div>
              <div className="cad">
                <p>
                  Ainda não tenho conta ? <a href="/">Cadastrar.</a>
                </p>
              </div>
            </Form>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={() => setOpenSnackbar(false)}
              message={snackbarMessage}
            />
          </div>
        </div>
      )}
    </Container>
  );
};
