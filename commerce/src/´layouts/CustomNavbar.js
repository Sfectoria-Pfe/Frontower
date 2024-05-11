import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import Canvas from '../component/Canvas';


export default class CustomNavbar extends Component{
    constructor(props){
        super(props)
        this.state={
        show:false
            }
    }
    handleClose = () => this.setState({show:false})
   handleShow = () => this.setState({show:true});
    render(){
        return(
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link onClick={()=> this.props.changeView("Home")} >Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                
                
                  <Nav.Link onClick= {()=> this.props.changeView("About")}>
                   About
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                <FaShoppingCart size={30} onClick={this.handleShow}/>

                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
            <Canvas  show={this.state.show } handleClose={this.handleClose}/>
          </Navbar>
         )
    }
} 