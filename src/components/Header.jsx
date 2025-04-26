import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const HeaderContainer = styled.header`
  width: 100%;
  background: #1a2236;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 70px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
`;

const Logo = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #ffd700;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #ffd700;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  background: #ffd700;
  color: #1a2236;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #fff3b0;
  }
`;

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo to="/">AU INVEST</Logo>
      <Nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/quien-somos">Quién somos</NavLink>
        <NavLink to="/por-que-invertir">Por qué invertir</NavLink>
        <NavLink to="/como-funciona">Cómo funciona</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contacto">Contáctanos</NavLink>
      </Nav>
      <AuthButtons>
        {user ? (
          <>
            <Button onClick={() => navigate("/dashboard")}>Área Cliente</Button>
            <Button onClick={logout}>Cerrar sesión</Button>
          </>
        ) : (
          <>
            <Button onClick={() => navigate("/registro")}>Registrarse</Button>
            <Button onClick={() => navigate("/login")}>Iniciar sesión</Button>
          </>
        )}
      </AuthButtons>
    </HeaderContainer>
  );
}

export default Header;