import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import GoldChart from "../components/GoldChart";
import EditProfileForm from "../components/EditProfileForm";
import EditDepositForm from "../components/EditDepositForm";
import TransactionList from "../components/TransactionList";

const DashboardContainer = styled.div`
  display: flex;
  min-height: 90vh;
  background: #f4f6fa;
`;

const Sidebar = styled.aside`
  width: 260px;
  background: #1a2236;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  border-radius: 0 18px 18px 0;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: #ffd700;
  border-radius: 50%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #1a2236;
  font-weight: 900;
`;

const UserName = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.div`
  font-size: 0.95rem;
  color: #ffd700;
  margin-bottom: 2rem;
`;

const SideMenu = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const SideMenuItem = styled.li`
  padding: 1rem 1.2rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  background: ${({ active }) => (active ? "#ffd700" : "transparent")};
  color: ${({ active }) => (active ? "#1a2236" : "#fff")};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffd700;
    color: #1a2236;
  }
`;

const LogoutButton = styled.button`
  margin-top: auto;
  background: #ffd700;
  color: #1a2236;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #fff3b0;
  }
`;

const MainPanel = styled.main`
  flex: 1;
  padding: 2.5rem 3rem;
`;

const PanelRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const PanelBox = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(26,34,54,0.07);
  padding: 1.5rem 2rem;
  flex: 1 1 260px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PanelTitle = styled.h3`
  font-size: 1.1rem;
  color: #1a2236;
  margin-bottom: 0.7rem;
`;

const Value = styled.div`
  font-size: 2.1rem;
  font-weight: 900;
  color: #ffd700;
  margin-bottom: 0.5rem;
`;

const ChartPanel = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(26,34,54,0.07);
  padding: 2rem;
  margin-top: 2rem;
`;

const panels = [
  { key: "resumen", label: "Resumen" },
  { key: "perfil", label: "Editar perfil" },
  { key: "deposito", label: "Editar formato de depósito" },
  { key: "transacciones", label: "Listado de transacciones" }
];

function Dashboard() {
  const { user, logout } = useAuth();
  const [activePanel, setActivePanel] = useState("resumen");
  const navigate = useNavigate();

  // Datos de prueba para la demo
  const totalOro = 125.7; // gramos
  const totalUSD = 7800; // valor actual en USD

  return (
    <DashboardContainer>
      <Sidebar>
        <Avatar>{user?.name ? user.name[0].toUpperCase() : "U"}</Avatar>
        <UserName>{user?.name || "Usuario"}</UserName>
        <UserEmail>{user?.email}</UserEmail>
        <SideMenu>
          {panels.map(panel => (
            <SideMenuItem
              key={panel.key}
              active={activePanel === panel.key}
              onClick={() => setActivePanel(panel.key)}
            >
              {panel.label}
            </SideMenuItem>
          ))}
        </SideMenu>
        <LogoutButton onClick={() => { logout(); navigate("/"); }}>
          Cerrar sesión
        </LogoutButton>
      </Sidebar>
      <MainPanel>
        {activePanel === "resumen" && (
          <>
            <PanelRow>
              <PanelBox>
                <PanelTitle>Inversión total en oro</PanelTitle>
                <Value>{totalOro} g</Value>
                <div style={{ color: "#1a2236" }}>Puedes cambiar a onzas en el futuro</div>
              </PanelBox>
              <PanelBox>
                <PanelTitle>Valor actual de tu inversión</PanelTitle>
                <Value>${totalUSD}</Value>
                <div style={{ color: "#1a2236" }}>Actualizado al precio del oro</div>
              </PanelBox>
            </PanelRow>
            <ChartPanel>
              <PanelTitle>Precio del oro (histórico)</PanelTitle>
              <GoldChart />
            </ChartPanel>
          </>
        )}
        {activePanel === "perfil" && (
          <PanelBox style={{ maxWidth: 500 }}>
            <PanelTitle>Editar perfil</PanelTitle>
            <EditProfileForm />
          </PanelBox>
        )}
        {activePanel === "deposito" && (
          <PanelBox style={{ maxWidth: 500 }}>
            <PanelTitle>Editar formato de depósito</PanelTitle>
            <EditDepositForm />
          </PanelBox>
        )}
        {activePanel === "transacciones" && (
          <PanelBox style={{ width: "100%" }}>
            <PanelTitle>Listado de transacciones</PanelTitle>
            <TransactionList />
          </PanelBox>
        )}
      </MainPanel>
    </DashboardContainer>
  );
}

export default Dashboard;