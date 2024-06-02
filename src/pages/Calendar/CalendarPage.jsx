import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CalendarPage.css'


import eventos from '@/common/mocks/eventos'
import Arrow from '@/common/components/svg/Arrow'

export default function CalendarPage() {
    const [date, setDate] = useState(new Date())

    return (
        <div className="app">
            <header className="header">
                <a className="calendario-voltar">
                    <Arrow/>
                </a>

                <h1 className="text-center">Calendário de Eventos</h1>
            </header>

            <div className="calendario">
                <div className="calendar-container">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        selectRange={true}
                    />
                </div>
            </div>

            <div className="eventos-marcados">
                <p>
                    <strong>Meus Eventos</strong>
                </p>
            </div>

            <div className="lista-eventos">
                <ul>
                    {eventos.map((evento, index) => (
                        <li key={index} className="evento">
                            <strong>{evento.nome}</strong> - {evento.data} -{' '}
                            {evento.horario}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
