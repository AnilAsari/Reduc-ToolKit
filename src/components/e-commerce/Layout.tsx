import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { RootState } from '../../Redux/store';

const Layout=()=> {


  const cartData=useSelector((state:RootState)=>state.cart)

return(
  <>
  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand >Fashion</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Link to="products" style={{marginRight:'15px'}}>Product</Link>
        <Link to="cart">Cart</Link>
        {/* <Link type='Link' to="product">Product</Link> */}
           
      </Nav>

      <Nav className="ml-auto">
            <span>Cart : {cartData.length}</span>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Outlet />
</>
)
    
}

export default Layout;