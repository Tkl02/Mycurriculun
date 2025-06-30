import './AboutPage.css'
import myImage2 from '../../assets/img/myImages.jpg'

function AboutPage() {
    return (
        <div className='aboutBodyPage'>
            <div className='introducaoo'>
                <div>
                    <h1>
                        <span style={{ color: '#ffffff' }}>Leonardo </span>
                        <span style={{ color: '#00f2ff' }}>Faustino</span>
                    </h1>
                    <p style={{ color: 'white' }}>
                        Sou estudante de ciências da computação no Instituto Federal Goiano, gosto particularmente da área de segurança da informação onde busco melhorar minhas habilidade tanto no red team quanto no blue team. Tenho alguma experiencia na elaboração de normas, politicas e diretrizes para a adequação com a LGPD. Também tenho conhecimento em diversas ferramentas ou conceitos que suplementam a área da segurança da informação como redes de computadores, pentest, linux, programação, entre outras. Meu objetivo e ganhar ainda mais experiencia no mercado e evoluir minhas habilidades contribuindo para o avanço da empresa através da responsabilidade, organização e eficiência.
                    </p>
                </div>
                <div><img src={myImage2} alt="" /></div>
            </div>
            <hr></hr>
            <div className='apresentacao'>
                <h1 style={{ color: '#00f2ff' }}>Instituição:</h1>
                <h2>Instituto Federal Goiano - Campus Morrinhos</h2>
                <a href="https://ifgoiano.edu.br/home/index.php/morrinhos.html" style={{fontSize:'16px', margin:'0px'}}><li>Estudante de Ciências da Computação</li></a>
               
                <h2>Laboratorio de Pesquisa: GEDAIA <span>(Maio 2023 - Presente)</span></h2>
                <li>Participo regularmente do laboratorio de pesquisa GEDAIA onde temos projetos envolvendo analises de dados, inteligencia artificial, automação, entre outro. Mas minha linha de estudos é focada em segurança da informação mais especificamente pentest.</li>

                <h1 style={{ color: '#00f2ff' }}>Experiências:</h1>
                <h2>Analista de Segurança da Informação <span>(Novembro 2024 - Presente)</span></h2>
                <li>Responsavel por elabora e revisar documentos para a adequação com a LGPD</li>
                <li>Implementação de segurança a infraestrutura </li>
                <li>Prestação de serviço a empresas parceiras.</li>
                
                <h2>Desenvolvedor Front-End Mobile Em Flutter <span>(Setembro 2024 - março 2025)</span></h2>
                <li>Responsavol por desenvolver telas personalizadas, componentes e algumas funções usando flutter e dart.</li>
                
                <h2>Bug Hunter - Hackerone e Hunterspay <span>(Maio 2025 - Presente)</span></h2>
                <li>Realizo a busca de vulnerabilidades web.</li>

                <h2>Desenolvimento de Aplicações Web Com React<span>(Maio 2025 - Presente)</span></h2>
                <li>Uso do framework react para realizar o desenvolvimento Front-End com react.</li>
                <li>Uso do typescript para melhor eficiencia no tratamento de tipagem de dados.</li>
                <li>Uso do Vita para um melhor build da aplicação.</li>
            </div>
            <div style={{margin: '70px'}}></div>
        </div>

    )
}

export default AboutPage;