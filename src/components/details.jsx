import React from 'react';
import Button from './Button';

import "../Task.css"
import { useParams, useHistory } from 'react-router-dom';

const Details = () => {
    const Params = useParams();
    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    }

    return (
        <>
            <div className="button-detalis">
                <Button onClick={handleBack}>Voltar</Button>
            </div>
            <div className="details-container">
                <p>{Params.taskTitle}</p>
                <p>Teste de conteudo do detalis frase longa de teste</p>
            </div>
         </>
     );
}

export default Details;