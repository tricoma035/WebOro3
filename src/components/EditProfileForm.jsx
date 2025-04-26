import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #1a2236;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
`;

const Button = styled.button`
  background: #ffd700;
  color: #1a2236;
  font-weight: 700;
  padding: 0.8rem 0;
  border-radius: 8px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
  &:hover {
    background: #fff3b0;
  }
`;

const DeleteButton = styled(Button)`
  background: #c0392b;
  color: #fff;
  margin-top: 2rem;
  &:hover {
    background: #e74c3c;
  }
`;

function EditProfileForm() {
  const { user, logout } = useAuth();
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const handleDelete = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Nombre completo</Label>
      <Input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
      <Label htmlFor="email">Correo electrónico</Label>
      <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
      <Label htmlFor="phone">Teléfono</Label>
      <Input id="phone" name="phone" type="text" value={form.phone} onChange={handleChange} required />
      <Button type="submit">Guardar cambios</Button>
      {success && <div style={{ color: "#1a8f3a", fontWeight: 600 }}>¡Datos actualizados!</div>}
      <DeleteButton type="button" onClick={handleDelete}>Eliminar cuenta</DeleteButton>
    </Form>
  );
}

export default EditProfileForm;