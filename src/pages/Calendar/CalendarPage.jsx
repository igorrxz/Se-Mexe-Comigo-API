import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';

export default function CalendarPage () {
    const [date, setDate] = useState(new Date());

    const eventos = [
        {
        nome: 'Atlético Bull',
        data: '30/04',
        horario: '08:00'
        },
        {
        nome: 'Funcional Jaqueira',
        data: '30/04',
        horario: '08:00'
        },
        {
        nome: 'Jogo de Vôlei',
        data: '30/04',
        horario: '08:00'
        },
        {
        nome: 'Mobilidade',
        data: '30/04',
        horario: '08:00'
        },
        {
        nome: 'Passeio até Boa Viagem',
        data: '30/04',
        horario: '08:00'
        }        
    ];

    return (
    <div className='app'>
        <header className='header'>
            <a className="calendario-voltar" href='https://www.google.com.br/'>
                <img className="calendario-voltar__icone" src='../../src/assets/Back.png' alt='Botão de Voltar'/>
            </a>
        
            <h1 className='text-center'>Calendário de Eventos</h1>
        </header>

        <div className='calendario'>
        <div className='calendar-container'>
            <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
            />
        </div>
        </div>

        <div className='eventos-marcados'>
        <p><strong>Meus Eventos</strong></p>
        </div>

        <div className='lista-eventos'>
        <ul>
            {eventos.map((evento, index) => (
            <li key={index} className='evento'>
                <strong>{evento.nome}</strong> - {evento.data} - {evento.horario}
            </li>
            ))}
        </ul>
        </div>

    </div>
    );
}
