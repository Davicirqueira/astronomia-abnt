import './index.scss';
import { Link } from 'react-router-dom';

export default function CardAstro(props){

    return(

        <div className='card-astro'>

            <h2>{props.nome}</h2>

            <p>{props.caracteristica}</p>

            <p>{props.vida}</p>

            <Link to={'/astros'}>Ver mais</Link>

        </div>

    );
}