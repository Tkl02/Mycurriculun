import React, { useState, useEffect } from "react";
import './uploadsPage.css';
import ProjectUploadModal from "../../Components/models/ProjectUploadModal ";
import CertificationUploadModal from "../../Components/models/CertificationUploadModal"
import ProjectDeleteModal from "../../Components/models/ProjectDeleteModal"
import CertificationDeleteModal from "../../Components/models/CertificationDeleteModal"
import projectImage from "../../assets/img/backProject.png"
import certificationImage from "../../assets/img/backCertificate.jpg"
import api from "../../services/api";

interface ProjectListItem {
    id: string;
    title: string;
}

interface CertificationListItem {
    id: string;
    name: string;
}

const uploadsPage: React.FC = () => {
    const [showProjectUploadModal, setShowProjectUploadModal] = useState(false);
    const [showCertificationUploadModal, setShowCertificationUploadModal] = useState(false);
    const [showProjectDeleteModal, setShowProjectDeleteModal] = useState(false);
    const [showCertificationDeleteModal, setShowCertificationDeleteModal] = useState(false);


    const [projects, setProjects] = useState<ProjectListItem[]>([]);
    const [certifications, setCertifications] = useState<CertificationListItem[]>([]);
    const [loadingLists, setLoadingLists] = useState(true);
    const [listError, setListError] = useState<string | null>(null);

    const fetchLists = async () => {
        setLoadingLists(true);
        setListError(null);
        try {
            const [projectsRes, certsRes] = await Promise.all([
                api.get<ProjectListItem[]>('/projects'), // Rota pública
                api.get<CertificationListItem[]>('/certifications'), // Rota pública
            ]);
            setProjects(projectsRes.data);
            setCertifications(certsRes.data);
        } catch (err: any) {
            console.error('Erro ao carregar listas para exclusão:', err);
            setListError(err.response?.data?.message || 'Falha ao carregar listas. Tente recarregar a página.');
        } finally {
            setLoadingLists(false);
        }
    };
    useEffect(() => {
        fetchLists();
    }, []);

    const handleSuccessOperation = () => {
        fetchLists(); // Recarrega as listas após uma operação bem-sucedida
    };

    if (loadingLists) {
        return <div className="uploads-page-container"><p>Carregando listas de projetos/certificações...</p></div>;
    }

    if (listError) {
        return <div className="uploads-page-container"><p className="error-message">Erro ao carregar listas: {listError}</p></div>;
    }


    return (
        <div className="uploads-page-container">
            <h1>Gerenciamento de Conteúdo</h1>

            <div className="cards-container">
                {/* Card para Upload de Projetos */}
                <div className="card upload-card" onClick={() => setShowProjectUploadModal(true)}>
                    <img src={projectImage} alt="Upload Projetos" />
                    <div className="card-overlay">UPLOAD PROJETOS</div>
                </div>

                {/* Card para Upload de Certificados */}
                <div className="card upload-card" onClick={() => setShowCertificationUploadModal(true)}>
                    <img src={certificationImage} alt="Upload Certificados" />
                    <div className="card-overlay">UPLOAD CERTIFICADOS</div>
                </div>
            </div>

            <div className="delete-buttons-container">

                <button className="delete-button" onClick={() => setShowProjectDeleteModal(true)}>
                    Deletar Projeto
                </button>

                <button className="delete-button" id="delete-button-cert" onClick={() => setShowCertificationDeleteModal(true)}>
                    Deletar Certificação
                </button>
            </div>

            {showProjectUploadModal && <ProjectUploadModal onClose={() => setShowProjectUploadModal(false)} onSuccess={handleSuccessOperation} />}
            {showCertificationUploadModal && <CertificationUploadModal onClose={() => setShowCertificationUploadModal(false)} onSuccess={handleSuccessOperation} />}
            {showProjectDeleteModal && <ProjectDeleteModal
                onClose={() => setShowProjectDeleteModal(false)}
                projects={projects}
                onSuccess={handleSuccessOperation}
            />}
            {showCertificationDeleteModal && <CertificationDeleteModal
                onClose={() => setShowCertificationDeleteModal(false)}
                certifications={certifications}
                onSuccess={handleSuccessOperation}
            />}
        </div>
    );
};

export default uploadsPage;