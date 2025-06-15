import React, { useState } from 'react';
import api from '../../services/api'; 

interface CertificationUploadModalProps {
  onClose: () => void;
  onSuccess?: () => void; 
}

const CertificationUploadModal: React.FC<CertificationUploadModalProps> = ({ onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [credentialUrl, setCredentialUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const newCertification = {
        name,
        issuer,
        issueDate: issueDate || undefined,
        credentialUrl: credentialUrl || undefined,
        imageUrl: imageUrl || undefined,
      };

      await api.post('/certifications', newCertification); 
      setSuccessMessage('Certificação enviada com sucesso!');

      setName('');
      setIssuer('');
      setIssueDate('');
      setCredentialUrl('');
      setImageUrl('');
      if (onSuccess) onSuccess();
      setTimeout(onClose, 1500);
    } catch (err: any) {
      console.error('Erro ao enviar certificação:', err);
      setError(err.response?.data?.message || 'Falha ao enviar certificação. Verifique o console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Adicionar Nova Certificação</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="certName">Nome da Certificação:</label>
          <input
            type="text"
            id="certName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="certIssuer">Emissor:</label>
          <input
            type="text"
            id="certIssuer"
            value={issuer}
            onChange={(e) => setIssuer(e.target.value)}
            required
          />

          <label htmlFor="certIssueDate">Data de Emissão (opcional):</label>
          <input
            type="date"
            id="certIssueDate"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />

          <label htmlFor="certCredentialUrl">URL da Credencial (opcional):</label>
          <input
            type="url"
            id="certCredentialUrl"
            value={credentialUrl}
            onChange={(e) => setCredentialUrl(e.target.value)}
          />

          <label htmlFor="certImageUrl">URL da Imagem (opcional):</label>
          <input
            type="url"
            id="certImageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p style={{ color: 'lightgreen', textAlign: 'center', fontWeight: 'bold' }}>{successMessage}</p>}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="button" className="cancel-button" onClick={onClose} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Enviando...' : 'Adicionar Certificação'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificationUploadModal;