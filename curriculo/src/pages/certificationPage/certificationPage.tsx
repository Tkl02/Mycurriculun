import React, {useEffect, useState} from "react";
import api from "../../services/api";
import './certificationPage.css'
import winner from '../../assets/img/winner1.png'

interface Certification {
  id: string;
  name: string;
  issuer: string; 
  issueDate?: string | null;
  credentialUrl?: string | null; 
  imageUrl?: string | null; 
  createdAt?: string;
  updatedAt?: string;
}

const certificationPage: React.FC = () => {
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCertification = async () => {
            try {
                setLoading(true);
                const response = await api.get<Certification[]>('/certifications');
                setCertifications(response.data);
                setError(null);
            } catch (err: any) {
                console.error('Erro ao buscar certificação', err);
                setError(err.response?.data?.error || 'Falha ao carregar certificações')
            } finally{
                setLoading(false);
            }
        };
        fetchCertification();
    },[]);

 if (loading) {
    return <div className="certification-page-container"><p className="loading-message">Carregando certificações...</p></div>;
  }

  if (error) {
    return <div className="certification-page-container"><p className="error-message">Erro: {error}</p></div>;
  }

  return (
    <div className="certification-page-container">
      <h1 className="page-title">Certificações Adquiridas</h1>

      <div className="certifications-list">
        {certifications.length === 0 ? (
          <p className="no-certifications-message">Nenhuma certificação encontrada. Adicione algumas no painel de upload!</p>
        ) : (
          certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-header">
                <h2 className="certification-title">
                  {cert.name || 'Nome da Certificação'}
                </h2>
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="certification-link-icon">
                    <img src={winner} alt="" />
                  </a>
                )}
              </div>
              <div className="certification-content">
                <p className="certification-description">
                  Emissor: {cert.issuer || 'Não especificado.'}
                
                </p>
               
               
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default certificationPage;