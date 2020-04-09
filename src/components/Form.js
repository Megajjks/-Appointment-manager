import React, {Fragment, useState} from 'react';
import AlertDanger from './AlertDanger';
import uuid from 'uuid/v4';

const Form = ({crearCita}) => {
    
    //crear state
    const [cita, actualizarCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    })
    const [error, setError] = useState(false)
    
    //crear funciones
    const handleOnChange= e =>{
        actualizarCita({
            ...cita, //salvamos los demás campos del state con el spread operator
            [e.target.name]:e.target.value
        })
    }
    
    //Extraer valores
    const {mascota,propietario,fecha,hora,sintomas} = cita
    // Cuando el usuario presione agregar cita
    const submitCita = e =>{
        e.preventDefault();
        // validar
        // la función trim ayuda a eliminar los espacios en blanco
        if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()===''){
            return setError(true)
        }
        //Eliminar el mensaje de error 
        setError(false)
        // Asignar una Id a la cita
        cita.id = uuid();
        // crear la tabla
        crearCita(cita)
        // Reiniciar el form
        actualizarCita({
            mascota:"",
            propietario:"",
            fecha:"",
            hora:"",
            sintomas:""
        })
    }


    return ( 
        <Fragment>
            <h2>📅Crear una cita</h2>
            {error?<AlertDanger content="Todos los campos son obligatiorios"/>:null}
            <form>
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleOnChange}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={handleOnChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleOnChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleOnChange}
                    value={hora}
                />
                <label>Sintomas de la mascota</label>
                <textarea
                    className="u-full-width"
                    onChange={handleOnChange}
                    value={sintomas}
                    name="sintomas"
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onClick={submitCita}
                >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Form;