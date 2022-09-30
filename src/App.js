import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import Dashboard from './components/Dashboard';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="App bg-dark text-white">
      <Container className="justify-content-center p-10">
        <Row className="justify-content-center">
          <Col md={4}><h1>Data options</h1></Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}><Dashboard className="container" /></Col>
        </Row>
      </Container>
      <DataTable />
    </div>
  );
}

export default App;
