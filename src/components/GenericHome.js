import React, {Fragment} from 'react';
import Form from './Form'

const GenericHome = (props) => {
    return (  
        <Fragment>
            <h1>Adminstrador de pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form/>
                    </div>
                    <div className="one-half column">
                        2
                    </div>
                </div>
                 
            </div>
        </Fragment>
    );
}
 
export default GenericHome;