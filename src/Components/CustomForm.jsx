import { useState } from "react";

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const CustomForm = () => {
  // Creación variables formulario
  // Creación variable nombre de usuario
  const [username, setUsername] = useState("")
  // Creación variable contraseña
  const [password, setPassword] = useState("")
  // DisabledButton
  const [disabledButton, setDisabledButton] = useState(true)
  // Error
  const [error, setError] = useState(false)

  // Función para validar el formulario
  const login = (event) => {
    console.log("login");
    console.log("username: ", username);
    console.log("password: ", password);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (username === "ADL" && password === "252525") {
      setError(false)
      alert('Login correcto');
    } else {
      setError(true);
    }
  };

  // Función para habilitar el botón
  const habilitar = () => {
    if (username !== "" && password !== "") {
      setDisabledButton(false)
      return
    }
    setDisabledButton(true)
  }

  return (
    <div style={{ maxWidth: "700px", margin: '0 auto', alignItems: "center", justifyContent: "center", marginTop: '20px', marginBottom: '20px' }}>
      {error ? <Alert key='danger' variant='danger' >Los datos son incorrectos. !</Alert> : null}
      <Form noValidate validated={!error} onSubmit={(e) => login(e)}>
        <Form.Group className="mb-3" controlId="txt.usernameInput">
          <Form.Label className='ml-auto'>USERNAME</Form.Label>
          <Form.Control type="text" placeholder="" name='username' onChange={(e) => { setUsername(e.target.value); habilitar() }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="txt.passInput">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="" name='password' onChange={(e) => { setPassword(e.target.value); habilitar() }} />
        </Form.Group>
        {!disabledButton ? <Button type="submit" variant="dark">Iniciar Sesión</Button> : null}
      </Form>
    </div>
  );
};

export default CustomForm;