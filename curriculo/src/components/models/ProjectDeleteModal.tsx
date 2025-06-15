import React, { useState } from 'react';
import api from '../../services/api';

interface ProjectDeleteModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

const ProjectDeleteModal: React.FC<ProjectDeleteModalProps> = ({ onClose, onSuccess }) => {
  const [projectId, setProjectId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!projectId.trim()) {
      setError('O ID do projeto é obrigatório.');
      setLoading(false);
      return;
    }

    try {

      await api.delete(`/projects/${projectId}`);
      setSuccessMessage('Projeto excluído com sucesso!');
      setProjectId('');
      if (onSuccess) onSuccess();
      setTimeout(onClose, 1500);
    } catch (err: any) {
      console.error('Erro ao excluir projeto:', err);
      if (err.response && err.response.status === 404) {
        setError('Projeto não encontrado com o ID fornecido.');
      } else {
        setError(err.response?.data?.message || 'Falha ao excluir projeto. Verifique o console.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Excluir Projeto</h2>
        <form onSubmit={handleDelete}>
          <label htmlFor="projectId">ID do Projeto:</label>
          <input
            type="text"
            id="projectId"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            placeholder="Cole o ID do projeto aqui"
            required
          />

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p style={{ color: 'lightgreen', textAlign: 'center', fontWeight: 'bold' }}>{successMessage}</p>}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="button" className="cancel-button" onClick={onClose} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className="submit-button" style={{ backgroundColor: '#dc3545' }} disabled={loading}>
              {loading ? 'Excluindo...' : 'Excluir Projeto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectDeleteModal;