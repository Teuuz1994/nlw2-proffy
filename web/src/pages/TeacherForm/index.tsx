import React, { useState, useCallback } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/icons/warning.svg';

import './style.css';

const TeacherForm: React.FC = () => {
  const [scheduleItem, setScheduleItem] = useState([
    { week_day: 0, from: '8:00 AM', to: '4:00 PM' },
    { week_day: 2, from: '10:00 AM', to: '6:00 PM' },
  ]);

  const handleAddNewSchedule = useCallback(() => {
    setScheduleItem([...scheduleItem, { week_day: 0, from: '', to: '' }]);
  }, [scheduleItem]);

  return (
    <div id="page-teacher-form" className="contaier">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Input name="cost" label="Custo de sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={handleAddNewSchedule}>
              + Novo horário
            </button>
          </legend>

          {scheduleItem.map(scheduleItems => (
            <div key={scheduleItems.week_day} className="schedule-item">
              <Select
                name="week_day"
                label="Dia da Semana"
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-Feira' },
                  { value: '2', label: 'Terça-Feira' },
                  { value: '3', label: 'Quarta-Feira' },
                  { value: '4', label: 'Quinta-Feira' },
                  { value: '5', label: 'Sexta-Feira' },
                  { value: '6', label: 'Sábado' },
                ]}
              />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
