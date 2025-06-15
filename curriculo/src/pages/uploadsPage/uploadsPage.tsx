import React, { useState } from "react";
import './uploadsPage.css';
import ProjectUploadModal from "../../Components/models/ProjectUploadModal ";
import CertificationUploadModal from "../../Components/models/CertificationUploadModal"
import ProjectDeleteModal from "../../Components/models/ProjectDeleteModal"
import CertificationDeleteModal from "../../Components/models/CertificationDeleteModal"
import projectImage from "../../assets/img/backProject.png"
import certificationImage from "../../assets/img/backCertificate.jpg"

const uploadsPage: React.FC = () => {
    const [showProjectUploadModal, setShowProjectUploadModal] = useState(false);
    const [showCertificationUploadModal, setShowCertificationUploadModal] = useState(false);
    const [showProjectDeleteModal, setShowProjectDeleteModal] = useState(false);
    const [showCertificationDeleteModal, setShowCertificationDeleteModal] = useState(false);


    return (
        <div className="uploads-page-container">
            <h1>Gerenciamento de Conteúdo</h1>

            <div className="cards-container">

                <div className="card upload-card" onClick={() => setShowProjectUploadModal(true)}>
                    <img src={projectImage} alt="Upload Projetos" />
                    <div className="card-overlay">UPLOAD PROJETOS</div>
                </div>


                <div className="card upload-card" onClick={() => setShowCertificationUploadModal(true)}>
                    <img src={certificationImage} alt="Upload Certificados" />
                    <div className="card-overlay">UPLOAD CERTIFICADOS</div>
                </div>
            </div>

            <div className="delete-buttons-container">
                <button className="delete-button" onClick={() => setShowProjectDeleteModal(true)}>
                    Deletar Projeto
                </button>

                <button className="delete-button" onClick={() => setShowCertificationDeleteModal(true)}>
                    Deletar Certificação
                </button>
            </div>

            {showProjectUploadModal && <ProjectUploadModal onClose={() => setShowProjectUploadModal(false)} />}
            {showCertificationUploadModal && <CertificationUploadModal onClose={() => setShowCertificationUploadModal(false)} />}
            {showProjectDeleteModal && <ProjectDeleteModal onClose={() => setShowProjectDeleteModal(false)} />}
            {showCertificationDeleteModal && <CertificationDeleteModal onClose={() => setShowCertificationDeleteModal(false)} />}
        </div>
    );
}

export default uploadsPage;