import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';

export function CalendarPage () {
    const [date, setDate] = useState(new Date());

    const eventos = [
        {
        nome: 'FutVôlei',
        data: '02/05',
        horario: '14:00'
        },
        {
        nome: 'CrossFit',
        data: '07/05',
        horario: '08:00'
        },
        {
        nome: 'Futsal',
        data: '11/05',
        horario: '19:00'
        },
        {
        nome: 'Corrida',
        data: '16/05',
        horario: '07:30'
        },
        {
        nome: 'Vôlei',
        data: '20/05',
        horario: '10:00'
        },
        {
        nome: 'Caminhão da Musculação',
        data: '02/06',
        horario: '17:00'
        }
    ];

    return (
    <div className='app'>
        <header className='header'>
            <a href='https://www.google.com.br/'>
                <img src='../../src/assets/Back.png' alt='Botão de Voltar' className='button'/>
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
