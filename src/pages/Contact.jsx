import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,34,54,0.07);
`;

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

const TextArea = styled.textarea`
  padding: 0.7rem 1rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
`;

const Button = styled.button`
  background: #ffd700;
  color: #1a2236;
  font-weight: 700;
  padding: 0.9rem 0;
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

const Success = styled.div`
  color: #1a8f3a;
  font-weight: 600;
  margin-top: 1rem;
`;

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Container>
      <h1>Contáctanos</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          name="phone"
          type="text"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Label htmlFor="message">Mensaje</Label>
        <TextArea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Enviar</Button>
        {submitted && <Success>¡Mensaje enviado correctamente!</Success>}
      </Form>
    </Container>
  );
}

export default Contact;