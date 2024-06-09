import profilePicture from '../assets/profilePicture.jpg'

function Card() {
  return (
    <div className="main-container">
      <div className="index-container">
        <div className="card-container">
          <div className='card-first'>
            <div className="profile">
              <img className="profile-image" src={profilePicture} alt="" />
            </div>
            <div className='content'>
              <div className='intro'>
                <h1 className="heading">Henrique Stocco</h1>
                <p className="title">Desenvolvedor de Software</p>
                <p>Sou Assistente de Desenvolvimento na Cesta Basica Brazil, dando inicio a minha carreira em Desenvolvimento de Software.
                </p>
                <p>Atualmente utilizo Node.js, Fastify e Prisma ORM em meus projetos pessoais.</p>
                <p>Estou fazendo um tecnologo em Analise e Desenvolvimento de Sistemas, com um foco em Engenharia de Software, e futuramente desenvolvedor FullStack.</p>
                <ul className="icons">
                  <li>
                    <a href="https://github.com/HenriqueStocco" target="_blank">
                      <img src="https://img.icons8.com/?size=100&id=16318&format=png&color=000000" alt="GitHub" /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/henrique-stocco-machado-a80255245/" target="_blank">
                      <img src="https://img.icons8.com/?size=100&id=85141&format=png&color=000000" alt="LinkeIn" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card