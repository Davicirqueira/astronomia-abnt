import './index.scss';
import { useState } from 'react';
import { Slider, SliderTwo } from '../../components/Slider'
import CardAstro from '../../components/cardAstro';
import CardBusque from '../../components/cardBusque';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

  const [active, setActive] = useState('Galáxias');

  const navItems = ['Galáxias', 'Astronomos', 'Planetas'];

  const numeroZap = '5511910721783';

  const instagram = 'd4viwx_'

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

      {active == 'Astronomos' &&

        <div className='nav-astronomos'>

          <div className='file'>

            <CardAstro
              nome={"Nicolau Copérnico"}
              caracteristica={"Teoria Heliocêntrica"}
              vida={"(1473 - 1543)"}
            />

            <CardAstro
              nome={"Galileu Galilei"}
              caracteristica={"Ciência Moderna"}
              vida={"(1564 - 1642)"}
            />

            <CardAstro
              nome={"Johannes Kepler "}
              caracteristica={" Leis do Movimento Planetário"}
              vida={"(1571 - 1630)"}
            />

          </div>

          <div className='file'>

            <CardAstro
              nome={"Isaac Newton"}
              caracteristica={"Lei da Gravitação Universal"}
              vida={"(1642 - 1727)"}
            />

            <CardAstro
              nome={"William Herschel"}
              caracteristica={"compositor que descobriu o planeta Urano"}
              vida={"(1738 - 1822)"}
            />

            <CardAstro
              nome={"Edwin Hubble"}
              caracteristica={"Lei de Hubble distância galática"}
              vida={"(1889 - 1953)"}
            />

          </div>

          <div className='file'>

            <CardAstro
              nome={"Carl Sagan"}
              caracteristica={"Responsável pela missão espacial Viking a Marte"}
              vida={"(1934 - 1996)"}
            />

            <CardAstro
              nome={"Marie Curie"}
              caracteristica={"Pioneira no estudo dos efeitos da radiação e exploração"}
              vida={"(1867 - 1934)"}
            />

            <CardAstro
              nome={"Stephen Hawking "}
              caracteristica={"Conhecido por seu trabalho sobre buracos negros e cosmologia"}
              vida={"(1942 - 2018)"}
            />

          </div>

          <iframe className='video' width="580" height="325" src="https://www.youtube.com/embed/lzeDuGlwSwk?si=-yH0ZMl7tHiw6_kT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>

      }

      {active == 'Planetas' &&

        <div className='nav-planetas'>

          <SliderTwo />

          <h1>Os planetas do sistema solar...</h1>

          <p>Os planetas são corpos celestes que orbitam estrelas, e no caso do nosso Sistema Solar, eles orbitam o Sol. Eles podem ser divididos em dois grupos principais: os planetas rochosos e os planetas gasosos.

            Os planetas rochosos, também conhecidos como terrestres, são menores, possuem superfícies sólidas compostas principalmente de rochas e metais. Eles são mais próximos do Sol e têm atmosferas finas ou quase inexistentes. O primeiro planeta do Sistema Solar é Mercúrio, que é o mais próximo do Sol e possui temperaturas extremas devido à falta de uma atmosfera significativa. Vênus, o segundo planeta, é semelhante em tamanho à Terra, mas sua atmosfera densa e rica em dióxido de carbono cria um efeito estufa intenso, tornando-o o planeta mais quente. A Terra, nosso planeta, é o único conhecido até agora com vida, com uma atmosfera rica em oxigênio e água líquida em sua superfície. Marte, o quarto planeta, é famoso por sua coloração vermelha e por ter sido o alvo de várias missões espaciais, devido a indícios de que, no passado, possa ter abrigado água em forma líquida.

            Os planetas gasosos, por outro lado, são muito maiores do que os rochosos e são compostos principalmente por gases como hidrogênio e hélio. Eles têm atmosferas densas e, em geral, não possuem superfícies sólidas como os planetas terrestres. Júpiter, o maior planeta do Sistema Solar, é um gigante gasoso composto principalmente de hidrogênio e hélio. Ele possui uma série de luas, sendo a maior delas Ganimedes. Saturno, conhecido pelos seus impressionantes anéis, é outro gigante gasoso, com uma composição semelhante à de Júpiter. Urano e Netuno são os planetas mais distantes do Sistema Solar. Ambos são considerados gigantes gasosos gelados, compostos por hidrogênio, hélio e metano, sendo que Urano é notável por sua inclinação axial extrema, fazendo com que ele gire praticamente de lado.

          </p>

          <img className='img-planet' src="/assets/images/planet.jpg" alt="" />

          <p>Além dos planetas principais, o Sistema Solar também possui outros corpos celestes de importância. Plutão, por exemplo, era considerado o nono planeta até ser reclassificado como um "planeta anão" em 2006 pela União Astronômica Internacional. Outros planetas anões incluem Ceres, Haumea, Makemake e Eris, que se localizam principalmente no Cinturão de Kuiper, uma região além de Netuno.

            Esses planetas e corpos celestes desempenham papéis importantes no equilíbrio e funcionamento do Sistema Solar. Eles influenciam o movimento de asteroides e cometas e são alvo de estudos para entender melhor as condições que podem propiciar a vida em outros lugares do universo. A exploração planetária também nos ajuda a aprender sobre a formação de estrelas e sistemas planetários, ampliando nosso conhecimento sobre o cosmos.

          </p>


          <div className='iframe-video'>

            <h2>Sobre alguns planetas...</h2>

            <iframe className='video' width="600" height="330" src="https://www.youtube.com/embed/xns9MODJujU?si=zjXKu4yiiMVOLCxH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

          <div className='cep-dinamic'>

            <h2>Dinâmica "Lunática"...</h2> 

            <CardBusque />

          </div>

        </div>


      }

      <footer>

        <img className='small-icon' src="/assets/images/uiverse-astro.jpg" alt="" />

        <h3>Abnt Model</h3>
        <h3 className='name'>Por Davi Cirqueira Nascimento 1°C</h3>

        <h3 className='contats'>Contato:</h3>

        <div className='contato-links'>

          <a className='w' href={`https://wa.me/${numeroZap}`} target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon={faWhatsapp} size='2x' style={{marginRight: '10px'}} /> (11) 91072-1783
          </a>

          <a href={`https://instagram.com/${instagram}`} target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon={faInstagram} size='2x' style={{marginRight: '10px'}}/> @{instagram}
          </a>

        </div>

      </footer>


    </div>

  );

}

