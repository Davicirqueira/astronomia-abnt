import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function CardBusque(){

    const nav = useNavigate();

    function cep(){
        nav('/cep');
    }

    return(

        <div className='card-busque'>

            <h2>Busque seu endereço galático!</h2>

            <p onClick={cep}>Ir para satélite de endereços.</p>

        </div>


    );

}