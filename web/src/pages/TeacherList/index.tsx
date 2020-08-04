import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg'
import backIcon from '../../assets/icons/back.svg'

import './style.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="contaier">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-container">
          <strong>Estes são os proffys disponíveis.</strong>
        </div>
      </header>
    </div>
  );
};

export default TeacherList;
