import './projectPage.css'
import React, { useState, useEffect, type Key } from 'react';
import api from '../../services/api';

interface Project {
    id: Key | null | undefined;
    title: string;
    description: string;
    imageUrl: string | null;
    projectUrl: string | null;
    tags: string[];
    createdat?: string;
    updatedat?: string;
}

const ProjectPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setloading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchProject = async () => {
            try {
                setloading(true);
                const response = await api.get<Project[]>('/projects');
                setProjects(response.data);
                setError(null);
            } catch (err: any) {
                console.error('Erro ao buscar projetos', err);
                setError(err.response?.data?.error || 'Falha ao carregar projetos.')
            } finally {
                setloading(false);
            }
        }
        fetchProject();
    }, []);

    if (loading) {
        return <div className='project-page-container'><p className='loading-message'>Carregando Projetos</p></div>
    }
    if (error) {
        return <div className='error-page-container'><p className='error-message'>Erro ao carregar projetos: {error}</p></div>
    }

    return (
        <div className="project-page-container">
            <h1 className="page-title">Projetos Desenvolvidos</h1>

            <div className="projects-list">
                {projects.length === 0 ? (
                    <p className="no-projects-message">Nenhum projeto encontrado. Adicione alguns projetos no painel de upload!</p>
                ) : (
                    projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <h2 className="project-title">
                                    {project.title}
                                </h2>
                                {project.projectUrl && (
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                )}
                            </div>
                            <div className="project-content">
                                <p className="project-description">
                                    {project.description || 'Nenhuma descrição fornecida.'}
                                </p>
                                <ul className="project-tags">
                                    {project.tags.length === 0 ? (
                                        <li>Sem tags</li>
                                    ) : (
                                        project.tags.map((tag, index) => (
                                            <li key={index} className="tag-item">{tag}</li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};



export default ProjectPage;