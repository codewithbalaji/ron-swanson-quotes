import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";


function NavBars() {
 
  return (
    <Navbar expand="lg"  className="bg-primary">
      <Container fluid>
      <Navbar.Brand href="#" className="text-white">Ron Swanson Quotes</Navbar.Brand>
        <Form className="d-flex">          
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBars;
