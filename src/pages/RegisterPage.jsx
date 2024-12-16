import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    rg: '',
    cpf: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      alert('Os campos de email e senha são obrigatórios!');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    if (validateForm()) {
      alert('Cadastro realizado com sucesso!');
      navigate('/');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Cadastro</h1>

        <FormInput
          label="Nome Completo"
          value={formData.fullName}
          onChange={(value) => handleChange('fullName', value)}
          placeholder="Digite seu nome completo"
        />
        <FormInput
          label="Data de Nascimento"
          value={formData.birthDate}
          onChange={(value) => handleChange('birthDate', value)}
          placeholder="DD/MM/AAAA"
          mask="99/99/9999"
        />
        <FormInput
          label="RG"
          value={formData.rg}
          onChange={(value) => handleChange('rg', value)}
          placeholder="XXX.XXX.XXX-X"
          mask="999.999.999-9"
        />
        <FormInput
          label="CPF"
          value={formData.cpf}
          onChange={(value) => handleChange('cpf', value)}
          placeholder="XXX.XXX.XXX-XX"
          mask="999.999.999-99"
        />
        <FormInput
          label="Telefone"
          value={formData.phone}
          onChange={(value) => handleChange('phone', value)}
          placeholder="(XX) XXXX-XXXX"
          mask="(99) 9999-9999"
        />
        <FormInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
          placeholder="Digite seu email"
        />
        <FormInput
          label="Senha"
          type="password"
          value={formData.password}
          onChange={(value) => handleChange('password', value)}
          placeholder="Digite sua senha"
        />
        <FormInput
          label="Confirmar Senha"
          type="password"
          value={formData.confirmPassword}
          onChange={(value) => handleChange('confirmPassword', value)}
          placeholder="Confirme sua senha"
        />

        <button className="btn btn-primary" onClick={handleRegister}>
          Cadastrar
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Voltar ao Login
        </button>
      </div>
    </div>
  );
}
