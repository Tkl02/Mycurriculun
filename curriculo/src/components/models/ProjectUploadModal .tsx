import {useState } from "react";
import React from "react";
import api from "../../services/api";
import './modal.css'

interface ProjectUploadModalProps {
    onClose: ()=> void;
    onSuccess?: () => void;
}

const ProjectUploadModal: React.FC<ProjectUploadModalProps> = ({onClose, onSuccess}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [projectUrl, setProjectUrl] = useState('');
    const [tags, setTags] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        const parsedTags = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

        try {
            const newProject = {
                title,
                description,
                imageUrl: imageUrl || undefined,
                projectUrl: projectUrl || undefined,
                tags: parsedTags,
            };

            await api.post('/projects', newProject);
            setSuccessMessage('Projeto enviado com sucesso');

            setTitle('');
            setDescription('');
            setImageUrl('');
            setProjectUrl('');
            setTags('');

            if(onSuccess) onSuccess();
            setTimeout(onClose, 1500);
        } catch (err: any) {
            console.error('Erroao enviar projeto', err);
            setError(err.response?.data?.message || 'falha ao enviar projeto. verifique o console');
        } finally{
            setLoading(true);
        }
    };
     return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Adicionar Novo Projeto</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="projectTitle">Título:</label>
          <input
            type="text"
            id="projectTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="projectDescription">Descrição:</label>
          <textarea
            id="projectDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="projectImageUrl">URL da Imagem (opcional):</label>
          <input
            type="url"
            id="projectImageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <label htmlFor="projectProjectUrl">URL do Projeto (opcional):</label>
          <input
            type="url"
            id="projectProjectUrl"
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
          />

          <label htmlFor="projectTags">Tags (separadas por vírgula):</label>
          <input
            type="text"
            id="projectTags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Ex: React, Node.js, MongoDB"
            required
          />

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p style={{ color: 'lightgreen', textAlign: 'center', fontWeight: 'bold' }}>{successMessage}</p>}

          <div>
            <button type="button" className="cancel-button" onClick={onClose} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Enviando...' : 'Adicionar Projeto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default ProjectUploadModal;