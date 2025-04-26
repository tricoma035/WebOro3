import React, { useState } from "react";
import styled from "styled-components";

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

function EditDepositForm() {
  const [form, setForm] = useState({
    wallet: "",
    card: "",
    bank: "",
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

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="wallet">ID de wallet de criptomonedas</Label>
      <Input id="wallet" name="wallet" type="text" value={form.wallet} onChange={handleChange} />
      <Label htmlFor="card">Datos de tarjeta bancaria</Label>
      <Input id="card" name="card" type="text" value={form.card} onChange={handleChange} />
      <Label htmlFor="bank">Datos de cuenta bancaria</Label>
      <Input id="bank" name="bank" type="text" value={form.bank} onChange={handleChange} />
      <Button type="submit">Guardar cambios</Button>
      {success && <div style={{ color: "#1a8f3a", fontWeight: 600 }}>¡Datos actualizados!</div>}
    </Form>
  );
}

export default EditDepositForm;