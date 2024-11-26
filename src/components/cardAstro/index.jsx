import './index.scss';

export default function CardAstro(props){

    return(

        <div className='card-astro'>

            <h2>{props.nome}</h2>

            <p>{props.caracteristica}</p>

            <p>{props.vida}</p>

        </div>

    );
}