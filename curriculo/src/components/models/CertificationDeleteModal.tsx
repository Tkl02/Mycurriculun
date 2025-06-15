// src/components/modals/CertificationDeleteModal.tsx

import React, { useState } from 'react';
import api from '../../services/api';

interface CertificationDeleteModalProps {
  onClose: () => void;
  onSuccess?: () => void; // Callback opcional
}

const CertificationDeleteModal: React.FC<CertificationDeleteModalProps> = ({ onClose, onSuccess }) => {
  const [certificationId, setCertificationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!certificationId.trim()) {
      setError('O ID da certificação é obrigatório.');
      setLoading(false);
      return;
    }

    try {
      // Rota DELETE para certificações, passando o ID na URL
      await api.delete(`/certifications/${certificationId}`);
      setSuccessMessage('Certificação excluída com sucesso!');
      setCertificationId(''); // Limpa o campo
      if (onSuccess) onSuccess();
      setTimeout(onClose, 1500);
    } catch (err: any) {
      console.error('Erro ao excluir certificação:', err);
      if (err.response && err.response.status === 404) {
        setError('Certificação não encontrada com o ID fornecido.');
      } else {
        setError(err.response?.data?.message || 'Falha ao excluir certificação. Verifique o console.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Excluir Certificação</h2>
        <form onSubmit={handleDelete}>
          <label htmlFor="certificationId">ID da Certificação:</label>
          <input
            type="text"
            id="certificationId"
            value={certificationId}
            onChange={(e) => setCertificationId(e.target.value)}
            placeholder="Cole o ID da certificação aqui"
            required
          />

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p style={{ color: 'lightgreen', textAlign: 'center', fontWeight: 'bold' }}>{successMessage}</p>}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="button" className="cancel-button" onClick={onClose} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className="submit-button" style={{ backgroundColor: '#dc3545' }} disabled={loading}>
              {loading ? 'Excluindo...' : 'Excluir Certificação'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificationDeleteModal;