// src/components/modals/CertificationDeleteModal.tsx

import React, { useState } from 'react';
import api from '../../services/api';

// Adicionado: Interface para o item de certificação esperado
interface CertificationListItem {
  id: string;
  name: string;
}

interface CertificationDeleteModalProps {
  onClose: () => void;
  onSuccess?: () => void;
  certifications: CertificationListItem[]; // Recebe a lista de certificações
}

const CertificationDeleteModal: React.FC<CertificationDeleteModalProps> = ({ onClose, onSuccess, certifications }) => {
  const [selectedCertificationId, setSelectedCertificationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!selectedCertificationId) {
      setError('Por favor, selecione uma certificação para excluir.');
      setLoading(false);
      return;
    }

    try {
      await api.delete(`/certifications/${selectedCertificationId}`);
      setSuccessMessage('Certificação excluída com sucesso!');
      setSelectedCertificationId('');
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
          <label htmlFor="selectCertification">Selecione a Certificação:</label>
          <select
            id="selectCertification"
            value={selectedCertificationId}
            onChange={(e) => setSelectedCertificationId(e.target.value)}
            required
            className="modal-select"
          >
            <option value="">-- Selecione uma certificação --</option>
            {certifications.length === 0 ? (
              <option value="" disabled>Nenhuma certificação disponível</option>
            ) : (
              certifications.map((cert) => (
                <option key={cert.id} value={cert.id}>
                  {cert.name} (ID: {cert.id.substring(19, 30)}...)
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
              {loading ? 'Excluindo...' : 'Excluir Certificação'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificationDeleteModal;