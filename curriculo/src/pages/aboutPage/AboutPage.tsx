import './AboutPage.css'
import testes from '../../assets/img/testes.png'

function AboutPage() {
    return (
        <div className='aboutBodyPage'>
            <div className='introducaoo'>
                <div>
                    <h1>
                        <span>Leonardo </span>
                        <span style={{ color: '#00f2ff' }}>Faustino</span>
                    </h1>
                    <p style={{ color: 'white' }}>
                        Sou estudante de ciências da computação no Instituto Federal Goiano, gosto particularmente da área de segurança da informação onde busco melhorar minhas habilidade tanto no red team quanto no blue team. Tenho alguma experiencia na elaboração de normas, politicas e diretrizes para a adequação com a LGPD. Também tenho conhecimento em diversas ferramentas ou conceitos que suplementam a área da segurança da informação como redes de computadores, pentest, linux, programação, entre outras. Meu objetivo e ganhar ainda mais experiencia no mercado e evoluir minhas habilidades contribuindo para o avanço da empresa através da responsabilidade, organização e eficiência.
                    </p>
                </div>
                <div><img src={testes} alt="" /></div>
            </div>
            <div className='apresentacao'>
                <h1 style={{ color: '#00f2ff' }}>Instituição:</h1>
                <h2>Instituto Federal Goiano - Campus Morrinhos</h2>
                <a href="https://ifgoiano.edu.br/home/index.php/morrinhos.html" style={{fontSize:'16px', margin:'0px'}}><p>-Estudante de Ciências da Computação</p></a>
                <h2>Laboratorio de Pesquisa: GEDAIA</h2>
                <p>-Participo regularmente do laboratorio de pesquisa GEDAIA onde temos projetos envolvendo analises de dados, inteligencia artificial, automação, entre outro. Mas minha linha de estudos é focada em segurança da informação mais especificamente pentest</p>

                <h1 style={{ color: '#00f2ff' }}>Experiências:</h1>
                <h2>Analista de Segurança da Informação:</h2>
                <p>-Responsavel por elabora e revisar documentos para a adequação com a LGPD, implementação de segurança a infraestrutura e prestação de serviço a empresas parceiras.</p>
                
                <h2>Desenvolvedor Front-End Mobile Em Flutter</h2>
                <p>-Responsavol por desenvolver telas personalizadas com o uso de rotas, componentes e algumas funções usando flutter e dart</p>
                
                <h2>Bug Hunter - Hackerone e Hunterspay</h2>
                <p>-Realizo bug boutry no meu tempo livre em plataformas como o hackerone e mais recentimente o hunterspay, onde uso ferramentas/tecnicas para achar falhas de segurança em aplicações WEB.</p>
            </div>
            <div style={{margin: '70px'}}></div>
        </div>

    )
}

export default AboutPage;