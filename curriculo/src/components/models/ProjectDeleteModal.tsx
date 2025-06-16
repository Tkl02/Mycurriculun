// src/components/modals/ProjectDeleteModal.tsx

import React, { useState } from 'react';
import api from '../../services/api';

// Adicionado: Interface para o item de projeto esperado
interface ProjectListItem {
  id: string;
  title: string;
}

interface ProjectDeleteModalProps {
  onClose: () => void;
  onSuccess?: () => void;
  projects: ProjectListItem[]; // Recebe a lista de projetos
}

const ProjectDeleteModal: React.FC<ProjectDeleteModalProps> = ({ onClose, onSuccess, projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(''); // Armazenará o ID selecionado
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!selectedProjectId) {
      setError('Por favor, selecione um projeto para excluir.');
      setLoading(false);
      return;
    }

    try {
      await api.delete(`/projects/${selectedProjectId}`); // Exclui pelo ID
      setSuccessMessage('Projeto excluído com sucesso!');
      setSelectedProjectId(''); // Limpa a seleção
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
          <label htmlFor="selectProject">Selecione o Projeto:</label>
          <select
            id="selectProject"
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
            required
            className="modal-select" // Adiciona uma classe para estilização
          >
            <option value="">-- Selecione um projeto --</option>
            {projects.length === 0 ? (
              <option value="" disabled>Nenhum projeto disponível</option>
            ) : (
              projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title} (ID: {project.id.substring(19, 30)}) {/* Exibe nome e parte do ID */}
                </option>
              ))
            )}
          </select>

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