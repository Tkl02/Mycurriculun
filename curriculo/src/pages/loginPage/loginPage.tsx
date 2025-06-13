import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';
import './loginPage.css'

interface LoginSuccessResponse {
  message: string;
  token: string;
}

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post<LoginSuccessResponse>('/auth/login', {
        username,
        password,
      });

      const { token, message } = res.data;

      if (token) {
        localStorage.setItem('authToken', token);
        console.log('Token salvo no localstorage');
        navigate('/uploads')
        console.log(message);
      }
      else {
        setError('Login bem sucedido, Mas nenhum token salvo');
        console.error('erro token não encontrado');
      }

    } catch (err: any) {
      if (err.response) {

        setError(err.response.data.message || 'Erro ao fazer login. Verifique suas credenciais.');
        console.error('Erro na resposta da API:', err.response.data);
      } else if (err.request) {

        setError('Erro de conexão com o servidor. Verifique se o back-end está rodando.');
        console.error('Erro na requisição:', err.request);
      } else {

        setError('Ocorreu um erro inesperado.');
        console.error('Erro desconhecido:', err.message);
      }
    }
  };

  return (
    <div className='BodyFormLogin'>
      <div className='BoxFormLogin'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Nome de Usuário"
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
          <button className='buttomLogin' type="submit">Entrar</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;