import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Cep() {

    const Error = () => {
        Swal.fire({
            title: 'Erro no CEP!',
            color: "#2e65b6",
            iconColor: "#2e65b6",
            background: "#000",
            text: 'Preencha o cep!',
            icon: 'warning',

            confirmButtonText: 'Ok',
            confirmButtonColor: "#2e65b6",
            customClass: {
                confirmButton: 'custom-button',
            },
        });
    };

    const generalError = () => {
        Swal.fire({
            title: 'Erro no CEP!',
            color: "#2e65b6",
            iconColor: "#2e65b6",
            background: "#000",
            text: 'Cep desconhecido!',
            icon: 'warning',

            confirmButtonText: 'Ok',
            confirmButtonColor: "#2e65b6",
            customClass: {
                confirmButton: 'custom-button',
            },
        });
    };


    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [regiao, setRegiao] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');

    const [cep, setCep] = useState('');

    const [ocult, setOcult] = useState(true);

    async function buscarCep() {

        try {

            if (cep == '') {
                Error();
                return;
            }

            const url = `https://viacep.com.br/ws/${cep}/json/`;
            let resp = await axios.get(url);

            let dados = resp.data;

            setLogradouro(dados.logradouro);
            setBairro(dados.bairro);
            setRegiao(dados.regiao);
            setEstado(dados.estado);
            setUf(dados.uf);

            setOcult(false);
            setCep('');

        }
        catch (err) {

            generalError();

        }

    }

    async function Enter(e){

        if(e.key == 'Enter'){
            await buscarCep();
        }
    }

    return (

        <div className='page-cep'>

            <a className='back' href="/">Sair do Satélite</a>

            <h1>BEM-VINDO AO SATÉLITE DE ENDEREÇOS!</h1>

            <p>Digite o cep, e encontre seu endereço galático...</p>

            <div className='datas'>

                <input type="text" placeholder='Digite o Cep da rua...' value={cep} onChange={e => setCep(e.target.value)} onKeyUp={Enter}/>
                <button onClick={buscarCep}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

            </div>

            {ocult == false &&

                <div className='card-cep'>

                    <h3>{logradouro}</h3>
                    <h4>{bairro}</h4>
                    <h4>{regiao}</h4>
                    <h4>{estado}, {uf}</h4>

                </div>

            }


        </div>

    );

}