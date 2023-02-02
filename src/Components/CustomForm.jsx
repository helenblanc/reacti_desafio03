import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const CustomForm = ({ colaboradores }) => {

  // Creación variables formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [arrayColaboradores, setArrayColaboradores] = useState(colaboradores);
  const [copiaColaboradores, setCopiaColaboradores] = useState(colaboradores);


  // Función para agregar colaborador
  const addColaborador = (event) => {
    event.preventDefault()
    if (nombre !== '' && correo !== '') {
      // Creando identificador
      const size = arrayColaboradores.length + 1;
      // Creando colaborador
      const colaborador = { 'id': size + 1, 'nombre': nombre, 'correo': correo };
      // Creando copy de arreglo principal
      let copy = arrayColaboradores.slice(0)
      // Agregar copia
      setCopiaColaboradores(copy);      
      copy.push(colaborador)
      // Agregando colaborador al arreglo principal
      setArrayColaboradores([... arrayColaboradores, colaborador]);
    }
  };

  // Función para agregar colaborador
  const filter = (value) => {
    if (value === undefined || value === '') {
      setArrayColaboradores(copiaColaboradores.slice(0));
    } else {
      // Crear copia
      let copy = copiaColaboradores.slice(0);
      // Filtrar colaborador
      let filtrada = copy.filter(colaborador => colaborador.nombre.toUpperCase().includes(value.toUpperCase().trim()));
      if (filtrada === undefined) {
        filtrada = []
      }
      // Actualizar colaboradores con lista filtrada
      setArrayColaboradores(filtrada)
    }
  };

  // Creación del formulario
  return (
    <div style={{ maxWidth: "700px", margin: '0 auto', alignItems: "center", justifyContent: "center", marginTop: '20px', marginBottom: '20px' }}>
      <Form onSubmit={addColaborador} >
        <Row className="g-2 bg-dark text-white py-2">
          <Col md>
            <h4>Buscador de Colaboradores</h4>
          </Col>
          <Col md>
            <Form.Control type="text" placeholder="Buscar un colaborador"
              name='buscarColaborador' onChange={(e) => { filter(e.target.value) }} />
          </Col>
        </Row>
        <Form.Group className="mb-3 mt-5" controlId="id-nombre">
          <Form.Label className='ml-auto'>Nombre del colaborador</Form.Label>
          <Form.Control required type="text" placeholder="Ingresa el nombre del colaborador" name='nombre' onChange={(e) => { setNombre(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="id-correo">
          <Form.Label className='ml-auto'>Correo del colaborador</Form.Label>
          <Form.Control required type="text" placeholder="Ingresa el correo del colaborador" name='correo' onChange={(e) => { setCorreo(e.target.value) }} />
        </Form.Group>
        <Button type="submit" variant="primary">Agregar colaborador</Button>
        <h2 className="border-top mt-5 my-5">Listado de Colaboradores</h2>
        <Table striped bordered hover size="sm my-3 py-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {arrayColaboradores.map((colaborador) => (
              <tr key={colaborador.id}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
    </div>
  );
};

export default CustomForm;