import './index.scss';
import { useState } from 'react';
import Slider from '../components/Slider';

export default function Home() {

  const [active, setActive] = useState('Galáxias');

  const navItems = ['Galáxias', 'Astronomos', 'Planetas'];

  return (

    <div className='home-page'>

      <img className='icon' src="/assets/images/uiverse-astro.jpg" alt="" />

      <header>

        {navItems.map(item =>

          <a
            key={item}
            className={`${active === item ? 'active-link' : 'link'}`}
            onClick={() => setActive(item)}>
            {item}
          </a>

        )}

      </header>

      {active == 'Galáxias' &&

        <div className='nav-galaxys'>

          <Slider />


          <div className='section'>

            <div className='txt'>

              <h2>O que são as galáxias?</h2>

              <p>
                Uma galáxia é uma grande coleção de estrelas, planetas, gás, poeira e matéria escura, unida por forças gravitacionais. As galáxias podem variar em tamanho, desde centenas de milhares até milhões de anos-luz de diâmetro. A nossa galáxia, a Via Láctea, é apenas uma entre bilhões de outras no universo observável.
                O centro de uma galáxia, muitas vezes um ponto denso com uma grande concentração de estrelas e, em muitos casos, um buraco negro supermassivo. No caso da Via Láctea, acredita-se que há um buraco negro supermassivo chamado Sagitário A*.
                Ao longo do tempo, as galáxias passaram a se mover pelo espaço e interagir umas com as outras. Muitas galáxias se colidiram e se fundiram, formando galáxias maiores. Esses processos de fusão de galáxias foram fundamentais para a formação das galáxias que vemos hoje.
              </p>

            </div>

            <div className='txt2'>

              <h2>Como se Formam?</h2>

              <p>
                A maioria dos cristãos entende essa passagem como a origem de tudo, incluindo o espaço, o tempo e a matéria. A partir de uma perspectiva cristã, Deus é visto como o criador de tudo que existe no universo, e isso incluiria não só o planeta Terra, mas também as estrelas, planetas e galáxias.
                De acordo com o cristianismo, o processo de criação seria um reflexo da sabedoria e do poder de Deus. Em Gênesis, Deus fala e as coisas acontecem, como quando Ele cria a luz, as águas, as plantas, os animais e, finalmente, o ser humano. Embora a Bíblia não forneça um detalhe científico sobre como as galáxias se formaram, muitos cristãos acreditam que Deus pode ter usado os princípios científicos (como a gravidade e a física) para realizar Sua criação de uma forma ordenada e complexa.
                E perfeita para que tudo se formasse da melhor forma.
              </p>

            </div>

          </div>

          <iframe className='video' width="580" height="325" src="https://www.youtube.com/embed/oJvgMvcSlNQ?si=jckDZfgy4f3on2uu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>

      }


      <footer>

        <img className='small-icon' src="/assets/images/uiverse-astro.jpg" alt="" />

        <h3>Abnt Model</h3>

      </footer>


    </div>

  );

}

