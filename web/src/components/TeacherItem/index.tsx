import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './style.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/59451348?s=460&u=31372567a7d497c5e863c11f8cc84d7b49642a30&v=4"
          alt="Matheus da Guia de Campos"
        />
        <div>
          <strong>Matheus da Guia de Campos</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratórios e por mudar a vida de
        muitas pessoas através de experiências. Mais de 200.000 passaram por uma
        das minhas explosões.
      </p>

      <footer>
        <p>
          preço/hora: <strong>R$ 60,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
