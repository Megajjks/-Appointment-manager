import React from 'react';
const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha de la cita: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>sintomas: <span>{cita.sintomas}</span></p>
        <button className="button eliminar u-full-width" onClick={()=>eliminarCita(cita.id)}>
            Eliminar &times;
        </button>
    </div>
)
 
export default Cita;