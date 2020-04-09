import React, {Fragment, useState, useEffect} from 'react';
import Form from './Form';
import Cita from './Cita';

const GenericHome = (props) => {

    // Citas en el localStorage 
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales) {
        citasIniciales = [];
    }

    const [citas, setCitas] = useState([citasIniciales]);

    // crear función para modificar citas o agregar citas
    const crearCita = cita => {
        setCitas([...citas, cita]) //agregamos las citas que se han guardado
    }

    useEffect( () => {
        if(citasIniciales){
            localStorage.setItem('citas', JSON.stringify(citas)) //le paso las citas al localStorage
        }else{
            localStorage.setItem('citas',JSON.stringify([]))
        }
    }, [citas])


    // Función que elimina una cita por su id
    const eliminarCita = id =>{
        const nuevaCitas = citas.filter(cita => cita.id!==id);
        setCitas(nuevaCitas);
    }

    const titulo = citas.length===0? "🚫No hay citas aun":"⌛Administra tus citas"

    return (  
        <Fragment>
            <h1>Adminstrador de pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form
                            crearCita = {crearCita}
                        />
                    </div>
                    <div className="one-half column">
                        <h2> {titulo} </h2>
                        {citas===null? <h4>Aun no tienes ninguna cita programada</h4>:
                            citas.map(cita => (
                                <Cita
                                    key={cita.id}
                                    cita={cita}
                                    eliminarCita={eliminarCita}
                                />
                            ))
                        }
                    </div>
                </div>
                 
            </div>
        </Fragment>
    );
}
 
export default GenericHome;