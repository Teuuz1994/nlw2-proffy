import React, { useCallback } from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './style.css';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  cost: number;
  subject: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const handleCreateNewConnection = useCallback(async () => {
    api.post('connections', { user_id: teacher.id });
  }, [teacher.id]);

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          preço/hora: <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
