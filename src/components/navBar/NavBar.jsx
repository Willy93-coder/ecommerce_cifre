import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>Mallorca Sports</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<NavDropdown title='CAMISETAS' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Adulto</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Niño</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className='me-auto'>
						<NavDropdown title='PANTALONES' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Adulto</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Niño</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className='me-auto'>
						<NavDropdown title='MEDIAS' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Adulto</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Niño</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className='me-auto'>
						<NavDropdown title='BOTAS DE FÚTBOL' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Adulto</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Niño</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className='me-auto'>
						<NavDropdown title='ACCESORIOS' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>
								Espinilleras
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Bufandas</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Mochilas</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href='#deets'>
							<CartWidget />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
