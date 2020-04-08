import React, {Fragment, useState} from 'react';
const Form = () => {
    
    //crear state
    const [cita, actualizarCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    })
    
    //crear funciones
    const handleOnChange= e =>{
        actualizarCita({
            ...cita, //salvamos los demás campos del state con el spread operator
            [e.target.name]:e.target.value
        })
    }
    
    //Extraer valores
    const {mascota,propietario,fecha,hora,sintomas} = cita

    return ( 
        <Fragment>
            <h2>📅Crear una cita</h2>
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
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Form;