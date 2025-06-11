// src/pages/loginpage/LoginPage.tsx

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './loginPage.css';
import api from '../../services/api'; // Importa o cliente axios configurado

interface LoginSucssesResponse{
  message: string;
  token: string;
}

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState(''); // Renomeado de email para username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post<LoginSucssesResponse>('/auth/login', { // Usando api.post e o endpoint correto
        username, // Enviando username
        password,
      });

      const { token, message } = res.data; // Desestrutura o token e a mensagem

      // Se a requisição for bem-sucedida (axios já lida com res.ok via try/catch)
      localStorage.setItem('authToken', token); // Armazena o token com o nome 'authToken'
      navigate('/uploads'); // Redirecionar para a página de uploads (ou 'admin', como você preferir)
      console.log(message); // Log da mensagem de sucesso

    } catch (err: any) { // Captura o erro para tratamento
      if (err.response) {
        // Erro vindo do servidor (ex: status 400, 401)
        setError(err.response.data.message || 'Erro ao fazer login. Verifique suas credenciais.');
        console.error('Erro na resposta da API:', err.response.data);
      } else if (err.request) {
        // Erro de requisição (sem resposta do servidor)
        setError('Erro de conexão com o servidor. Verifique se o back-end está rodando.');
        console.error('Erro na requisição:', err.request);
      } else {
        // Outros erros
        setError('Ocorreu um erro inesperado.');
        console.error('Erro desconhecido:', err.message);
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text" // Alterado para 'text' já que agora é username, não necessariamente email
          placeholder="Nome de Usuário" // Atualizado placeholder
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <button type="submit">Entrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;