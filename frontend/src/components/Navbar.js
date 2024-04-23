import styled from 'styled-components';


const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
    return ( 
        <Nav>
        <NavBrand>Quotes</NavBrand>
        <NavMenu>
          <NavItem>
            <NavLink href="/">Logo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Quotes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Sign-in">Login</NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
     );
}
 
export default Navbar;