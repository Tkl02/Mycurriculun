import './UploadsPage.css'

function UploadsPage() {
    return (
        <div className='body'>
        <div className="upload-container">
            <div className="card" id="upload-projetos">
                <div className="overlay">
                    <span>UPLOAD PROJETOS</span>
                </div>
            </div>
            <div className="card" id="upload-certificados">
                <div className="overlay">
                    <span>UPLOAD CERTIFICADOS</span>
                </div>
            </div>
        </div>
        </div>
    )
};

export default UploadsPage;