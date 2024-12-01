import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Cep() {

    return (

        <div className='page-cep'>

            <h1>BEM-VINDO AO SATÉLITE DE ENDEREÇOS!</h1>

            <p>Digite o cep, e encontre seu endereço galático...</p>

            <div className='datas'>

                <input type="text" placeholder='Digite o Cep' />
                <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>

            </div>

            
            <div>

                <h3>Rua Alba</h3>
                <h4>Jardim Reimberg</h4>
                <h4>Sudeste</h4>
                <h4>São Paulo, SP</h4>

            </div>


        </div>

    );

}