import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageAstros() {

    const [active, setActive] = useState('Nicolau Copérnico');

    const astros = ['Nicolau Copérnico', 'Galileu Galilei',
        'Johannes Kepler', 'Isaac Newton', 'William Herschel', 'Edwin Hubble',
        'Carl Sagan', 'Marie Curie', 'Stephen Hawking'
    ];

    const navigate = useNavigate();

    function voltar() {

        navigate('/')

    }
    return (

        <div className='page-astros'>

            <header>

                {astros.map((item) =>

                    <h3
                        key={item}
                        className={`${active === item ? 'active-astro' : 'astro-link'}`}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </h3>

                )}

                <h3 className='back' onClick={voltar}>Voltar</h3>

            </header>


            {active == 'Nicolau Copérnico' &&

                <div>

                    <h1>{active}</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XBsYmGxw6NA?si=vGrYK8BpbTmab4mQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>Nicolau Copérnico (em polonês, Mikołaj Kopernik) foi um matemático e astrônomo do Renascimento, mais conhecido por desenvolver o modelo heliocêntrico do sistema solar, que revolucionou nossa compreensão do universo. Ele nasceu em 19 de fevereiro de 1473, em Torun, na Polônia, e é considerado um dos cientistas mais influentes da história.

                        Contribuições Principais:
                        Teoria Heliocêntrica: Copérnico propôs que o Sol, e não a Terra, estava no centro do universo, e que a Terra e os outros planetas giravam ao seu redor. Essa ideia desafiava o modelo geocêntrico, que colocava a Terra no centro, defendido pelos filósofos gregos antigos como Aristóteles e Ptolomeu.

                        Sua obra De revolutionibus orbium coelestium ("Sobre as Revoluções das Esferas Celestes"), publicada em 1543 (ano de sua morte), detalha a teoria heliocêntrica. Esse trabalho deu início à Revolução Copernicana, que teve um impacto profundo no desenvolvimento da astronomia moderna e das ciências em geral.
                        Observação Astronômica: Copérnico fez observações detalhadas dos movimentos planetários. Seu modelo forneceu uma forma mais precisa de prever as posições dos corpos celestes, particularmente os planetas, em comparação com o sistema ptolomaico. A teoria heliocêntrica também ajudou a explicar o movimento retrógrado aparente dos planetas, algo que o modelo geocêntrico não conseguia esclarecer.

                        Matemática e Ciência: Copérnico usou cálculos matemáticos e observações para sustentar sua teoria. Embora não tivesse as ferramentas e tecnologias para confirmar totalmente o modelo (como telescópios, que surgiriam mais tarde), seu trabalho forneceu a base para astrônomos subsequentes, como João Kepler e Galileu Galilei, que viriam a apresentar mais evidências em favor da teoria heliocêntrica.

                        Contexto Histórico:
                        O modelo geocêntrico era a crença dominante durante séculos, apoiado pela Igreja Católica e pelas visões científicas da época.
                        A teoria de Copérnico foi bastante controversa, principalmente porque contradizia os ensinamentos religiosos da época, que sustentavam que a Terra era o centro da criação divina.
                        No entanto, o modelo de Copérnico não foi imediatamente aceito. Foi só com os trabalhos de Kepler (que demonstrou que os planetas orbitam em trajetórias elípticas) e Galileu (que usou um telescópio para observar as luas de Júpiter e corroborar o modelo heliocêntrico) que a teoria heliocêntrica passou a ser amplamente aceita.
                        Legado:
                        O trabalho de Copérnico representa uma mudança de paradigma na astronomia, iniciando a Revolução Científica.
                        Sua teoria heliocêntrica abriu o caminho para o desenvolvimento da física moderna, incluindo as leis de movimento e a lei da gravitação universal de Isaac Newton, que confirmaram ainda mais o modelo heliocêntrico.
                        Hoje, Copérnico é reconhecido como uma das figuras chave na história da ciência, sendo homenageado com monumentos e instituições com seu nome, como o Centro de Ciências Copérnico em Varsóvia, na Polônia.
                        Apesar da resistência inicial às suas ideias, o trabalho de Nicolau Copérnico permanece um marco fundamental na astronomia moderna.



                    </p>

                    <img className='img' src="/assets/images/uiverse-astro.jpg" alt="" />

                </div>

            }

            {active == 'Galileu Galilei' &&


                <div>

                    <h1>{active}</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ryjvN6s5SPE?si=8Yvcs8uCRTDdBJvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>Galileu Galilei (1564–1642) foi um dos maiores cientistas da história, conhecido por suas contribuições revolucionárias à física, matemática e astronomia. Ele é frequentemente chamado de "pai da ciência moderna" devido ao seu método de investigação empírica e ao uso de experimentos controlados para testar suas teorias, características que marcaram o início da revolução científica.

                        Principais Contribuições de Galileu:
                        Melhorias no Telescópio e Descobertas Astronômicas:

                        Galileu não inventou o telescópio, mas foi o primeiro a aperfeiçoá-lo para observações astronômicas. Em 1609, ele construiu um telescópio com uma ampliação de cerca de 20x, o que lhe permitiu fazer descobertas revolucionárias.
                        Ele observou a Lua, descobrindo que sua superfície era irregular, cheia de crateras e montanhas, desafiando a visão aristotélica de que os corpos celestes eram perfeitos e imutáveis.
                        Em 1610, Galileu observou as luas de Júpiter (Io, Europa, Ganimedes e Calisto), confirmando que não todos os corpos celestes giravam ao redor da Terra, o que apoiava o modelo heliocêntrico de Copérnico.
                        Ele também observou as manchas solares, a Via Láctea (mostrando que era composta por inúmeras estrelas) e as fases de Vênus, que também forneciam evidências para o modelo heliocêntrico.
                        Apoio à Teoria Heliocêntrica:

                        As descobertas de Galileu com o telescópio foram fundamentais para apoiar o modelo heliocêntrico de Copérnico, que propunha que o Sol estava no centro do universo e que a Terra girava ao seu redor.
                        Em 1616, a Igreja Católica condenou a teoria heliocêntrica como herética. Galileu, no entanto, continuou a defender as ideias de Copérnico, e em 1632 publicou o livro "Diálogo sobre os Dois Máximos Sistemas do Mundo", onde argumentava fortemente em favor do heliocentrismo.
                        Contribuições à Física e ao Método Científico:

                        Galileu foi pioneiro no desenvolvimento do método científico moderno, que enfatizava a observação, a experiência e a quantificação dos dados. Ele acreditava que as leis da natureza podiam ser compreendidas por meio da razão, e não apenas pela fé ou pela autoridade.
                        Ele desafiou a física aristotélica, que dizia que os corpos pesados caíam mais rapidamente que os leves. Em seus experimentos, ele demonstrou que, na ausência de resistência do ar, todos os corpos caem à mesma velocidade, independentemente do seu peso.
                        Galileu também estudou o movimento dos projetos e os cilindros em movimento, formulando uma teoria da inércia (um conceito mais tarde refinado por Isaac Newton) e ajudando a estabelecer as bases da mecânica clássica.
                        A Lei do Pêndulo e as Descobertas sobre Movimento:

                        Uma das grandes contribuições de Galileu à física foi a descoberta das propriedades do pêndulo, com a qual ele demonstrou que o tempo de oscilação de um pêndulo é constante, independentemente da amplitude (movimento oscilatório). Isso foi crucial para o desenvolvimento de cronômetros de alta precisão.
                        Ele também investigou o movimento acelerado e estudou as leis do movimento de maneira experimental, antecipando conceitos fundamentais da física.</p>

                    <img className='img' src="/assets/images/uiverse-astro.jpg" alt="" />

                </div>

            }

            {active == 'Johannes Kepler' &&

                <div>

                    <h1>{active}</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/V6pSJSV8U4s?si=OcG8wOak7sw78ro6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>Johannes Kepler (1571–1630) foi um astrônomo, matemático e físico alemão que é amplamente reconhecido por suas contribuições fundamentais à astronomia e ao entendimento do movimento planetário. Ele é especialmente famoso por formular as Leis do Movimento Planetário, que descrevem as órbitas dos planetas ao redor do Sol e têm sido essenciais para o desenvolvimento da mecânica celeste.

                        Principais Contribuições de Kepler:
                        Leis do Movimento Planetário: As três Leis de Kepler revolucionaram a compreensão das órbitas planetárias, corrigindo a visão da astronomia que ainda estava presa ao modelo geocêntrico e ao conceito de órbitas circulares perfeitas. Suas leis são:

                        Primeira Lei (Lei das Órbitas Elípticas): "Os planetas se movem em órbitas elípticas ao redor do Sol, com o Sol em um dos focos da elipse." Antes de Kepler, acreditava-se que os planetas seguiam órbitas circulares. A descoberta de que suas órbitas são elípticas foi um dos maiores avanços para a astronomia.

                        Segunda Lei (Lei das Áreas): "A linha que conecta um planeta ao Sol varre áreas iguais em intervalos de tempo iguais." Isso significa que um planeta se move mais rápido quando está mais perto do Sol e mais devagar quando está mais afastado, uma descoberta que contradizia o modelo de órbitas circulares uniformes.

                        Terceira Lei (Lei dos Períodos): "O quadrado do período de um planeta é proporcional ao cubo da distância média entre o planeta e o Sol." Em termos simples, quanto mais distante o planeta estiver do Sol, mais longo será o seu período orbital (o tempo que leva para completar uma órbita).

                        Essas leis foram essenciais para o desenvolvimento do modelo heliocêntrico e ajudaram a confirmar a teoria de Copérnico de que o Sol é o centro do sistema solar, com os planetas girando ao seu redor.

                        Desenvolvimento de uma Nova Astronomia Matemática: Kepler foi um dos primeiros a usar rigorosamente os dados empíricos para construir suas teorias. Ele usou as observações detalhadas de Tycho Brahe, um astrônomo dinamarquês, para formular suas leis. Embora as observações de Brahe fossem imprecisas para calcular a posição dos planetas com grande precisão, elas forneceram a base sobre a qual Kepler construiu seu trabalho.

                        Kepler dedicou-se ao estudo das órbitas dos planetas com base nos dados de Brahe, corrigindo as discrepâncias e chegando à conclusão de que as órbitas planetárias não eram circulares, como se acreditava anteriormente, mas elípticas.

                        Óptica e Lentes: Além de seu trabalho em astronomia, Kepler fez importantes contribuições à óptica. Ele foi um dos primeiros a estudar a natureza da luz e a formação de imagens em lentes. Sua obra Dioptrice (1611) detalhou a teoria da lente convexa e a câmera escura. Ele também foi um dos primeiros a explicar como funcionam os olhos humanos, comparando-os com os telescópios.

                        Influência em Newton: As Leis de Kepler foram essenciais para o trabalho de Isaac Newton no desenvolvimento de sua teoria da gravitação universal. Newton utilizou as leis de Kepler como base para sua própria formulação das leis da física, e sua descoberta da gravidade ajudou a explicar de forma matemática por que os planetas seguem as órbitas elípticas descritas por Kepler.</p>

                    <img className='img' src="/assets/images/uiverse-astro.jpg" alt="" />

                </div>

            }

            {active == 'Isaac Newton' &&

                <div>

                    <h1>{active}</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/41FFbgR1jlc?si=Pndkr9mPc1daBGyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>Isaac Newton (1643–1727) foi um dos maiores cientistas de todos os tempos e é amplamente reconhecido como a figura central na Revolução Científica. Suas contribuições abrangem muitas áreas da física, matemática e astronomia, e seu trabalho estabeleceu as bases para a física clássica e a ciência moderna. Entre suas realizações mais notáveis estão a formulação das Leis do Movimento e da Lei da Gravitação Universal.

                        Principais Contribuições de Isaac Newton:
                        Leis do Movimento: Newton formulou as três Leis do Movimento, que descrevem o movimento dos corpos e estabeleceram as fundações para a mecânica clássica:

                        Primeira Lei (Lei da Inércia): "Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a continuar em movimento com velocidade constante em linha reta, a menos que uma força externa atue sobre ele." Esta lei descreve a tendência dos corpos de manter seu estado de movimento (ou repouso) até que algo os faça mudar de velocidade ou direção.

                        Segunda Lei (Lei da Força e Aceleração): "A força aplicada a um corpo é igual à massa do corpo multiplicada pela sua aceleração." Em termos matemáticos,
                        𝐹
                        =
                        𝑚
                        𝑎
                        F=ma, onde
                        𝐹
                        F é a força,
                        𝑚
                        m é a massa e
                        𝑎
                        a é a aceleração. Essa fórmula descreve como a força influencia o movimento de um objeto.

                        Terceira Lei (Ação e Reação): "Para toda ação, há uma reação de mesma magnitude e direção, mas em sentido oposto." Essa lei implica que as forças sempre ocorrem em pares; por exemplo, quando você empurra um objeto, ele exerce uma força igual e oposta de volta.

                        Essas leis são fundamentais para a física e permanecem essenciais até hoje para a descrição do movimento de objetos em uma grande variedade de contextos.

                        Newton é amplamente considerado um dos maiores cientistas da história. Seu trabalho não apenas fundou a física clássica, mas também influenciou profundamente o desenvolvimento da ciência e da matemática modernas.
                        As Leis do Movimento e a Lei da Gravitação Universal continuaram a ser aplicadas com sucesso para descrever o movimento dos corpos até a introdução da teoria da relatividade de Einstein, embora as leis de Newton ainda sejam válidas em muitos contextos práticos, como o movimento de objetos em escalas cotidianas.
                        Sua obra "Philosophiæ Naturalis Principia Mathematica" (1687), comumente conhecida como "Principia", é um dos livros mais importantes da história da ciência. Nele, Newton formulou suas leis do movimento e a gravitação universal, solidificando as bases da física clássica.</p>

                    <img className='img' src="/assets/images/uiverse-astro.jpg" alt="" />

                </div>

            }

            {active == 'William Herschel' &&

                <div>

                    <h1>{active}</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QlKzWM5Mjbk?si=9lkjTOK2OL3V0nGT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>William Herschel (1738–1822) foi um astrônomo e compositor germano-britânico, mais conhecido por suas descobertas e contribuições fundamentais à astronomia, incluindo a descoberta do planeta Urano, a primeira a ser feita com telescópio. Ele também fez importantes estudos sobre as estrelas, a estrutura da nossa galáxia e foi pioneiro em várias áreas da astronomia, incluindo o uso de telescópios mais poderosos para observações astronômicas.

                        Principais Contribuições de William Herschel:
                        Descoberta do Planeta Urano (1781):

                        Em 13 de março de 1781, Herschel fez uma das descobertas mais importantes da astronomia ao identificar o planeta Urano. Embora Urano já fosse conhecido há séculos, ninguém sabia que se tratava de um planeta. Herschel o observou usando um telescópio de 6 metros de comprimento, desenvolvido por ele mesmo, e notou que o corpo celeste não era uma estrela, mas um planeta, já que se movia em relação às estrelas fixas.
                        Esta foi a primeira descoberta de um novo planeta do Sistema Solar, desde a antiguidade, e foi um marco na astronomia, uma vez que ampliou o limite do Sistema Solar conhecido na época. Essa descoberta também ajudou a estabelecer a importância do uso de telescópios para fazer novas descobertas no céu.
                        Estudo das Estrelas e Nebulosas:

                        Herschel também fez grandes avanços no estudo das estrelas e das nebulosas. Ele catalogou milhares de estrelas e foi um dos primeiros a sugerir que as estrelas não estão distribuídas uniformemente pelo céu, mas formam agregados e nuvens de gás, o que ajudou a expandir o entendimento sobre a estrutura da nossa Via Láctea.
                        Ele também foi pioneiro no estudo das nebulosas, observando que algumas delas se comportavam de maneira diferente, possivelmente devido à sua constituição de gás e poeira. Herschel formulou teorias sobre a natureza dessas nuvens de gás, sugerindo que algumas delas eram formadas por estrelas em processo de nascimento.
                        Descoberta da Radiação Infravermelha (1800):

                        Herschel fez uma das descobertas mais importantes da física e da astronomia ao descobrir a radiação infravermelha. Ele estava experimentando com a luz do Sol, usando um prisma para decompor a luz branca em um espectro de cores visíveis. Durante a experimentação, ele mediu a temperatura de várias cores e percebeu que a região além da luz vermelha (que é invisível ao olho humano) também aquecia um termômetro, o que indicava a presença de radiação invisível.
                        Ele foi o primeiro a demonstrar que havia radiação além do espectro visível para o olho humano, uma descoberta que levou ao estudo da radiação infravermelha e abriu caminho para uma nova área de pesquisa.
                    </p>

                    <img className='img' src="/assets/images/uiverse-astro.jpg" alt="" />

                </div>

            }

            {active == 'Edwin Hubble' &&

                <div>

                    <h1>{active}</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WueCQNhGwtA?si=vJwaOo4EAXwoytuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>Edwin Hubble (1889–1953) foi um astrônomo americano cuja pesquisa revolucionou a compreensão do universo. Ele é amplamente reconhecido por demonstrar que o universo está em expansão, uma descoberta que se tornou um dos pilares da cosmologia moderna. Hubble fez observações fundamentais sobre as galáxias e sua velocidade de afastamento, o que levou à formulação da Lei de Hubble e ao entendimento de que o universo não é estático, mas está em constante expansão.

                        Principais Contribuições de Edwin Hubble:
                        A Descoberta da Expansão do Universo:

                        Hubble foi o primeiro a fornecer evidências observacionais convincentes de que o universo está em expansão. Em 1929, ele publicou uma pesquisa que demonstrava que as galáxias estavam se afastando de nós e que a velocidade de afastamento era proporcional à distância de cada galáxia. Isso ficou conhecido como a Lei de Hubble, e é expressa pela fórmula:
                        𝑣
                        =
                        𝐻
                        0
                        ×
                        𝑑
                        v=H
                        0

                        ×d
                        Onde
                        𝑣
                        v é a velocidade de afastamento da galáxia,
                        𝑑
                        d é a sua distância e
                        𝐻
                        0
                        H
                        0

                        é a constante de Hubble, que define a taxa de expansão do universo.

                        Essa descoberta foi fundamental porque contradizia a visão predominante na época de que o universo era estático, conforme proposto por Albert Einstein em sua Teoria da Relatividade Geral. A conclusão de Hubble deu base para o modelo cosmológico do Big Bang, que propõe que o universo começou de um ponto de densidade infinita e tem se expandido desde então.

                        Classificação das Galáxias e a Lei de Hubble:

                        Hubble também foi responsável pela classificação das galáxias. Ele desenvolveu um sistema para categorizar as galáxias com base em sua aparência. Esse sistema é conhecido como o diagrama de Hubble, que divide as galáxias em três tipos principais:

                        Galáxias elípticas (E): Com formas elípticas e pouca estrutura interna.
                        Galáxias espirais (S): Com braços espirais visíveis e um núcleo central.
                        Galáxias irregulares (Irr): Galáxias que não se encaixam em nenhuma das outras categorias, geralmente devido a interações ou fusões com outras galáxias.
                        Este sistema ajudou os astrônomos a organizar e estudar a diversidade das galáxias e suas características.

                        Medindo as Distâncias Cósmicas:

                        Hubble também fez importantes avanços na medição das distâncias das galáxias. Antes de suas descobertas, a maioria das galáxias era considerada parte da nossa própria Via Láctea. Hubble foi capaz de demonstrar que muitas dessas "nebulosas espirais", como eram chamadas, eram, na verdade, galáxias externas situadas a distâncias imensas.
                        Em 1924, Hubble observou Cepheidas em galáxias distantes, estrelas variáveis que têm uma relação bem definida entre o período de sua variabilidade e seu brilho absoluto. Usando essa relação, Hubble foi capaz de calcular a distância de várias galáxias, estabelecendo que elas estavam muito além da Via Láctea e eram objetos independentes.

                        A descoberta de que o universo está em expansão, confirmada pela Lei de Hubble, foi uma das maiores revelações do século XX, alterando para sempre a visão que temos do cosmos. Sua obra estabeleceu as fundações para o desenvolvimento das modernas teorias sobre cosmologia, incluindo o Big Bang e a expansão acelerada do universo.
                        Edwin Hubble morreu em 28 de setembro de 1953, mas seu impacto sobre a astronomia e a cosmologia perdura, e ele é lembrado como um dos maiores astrônomos da história.

                    </p>

                    <img className='img' src="/assets/images/uiverse-astro.jpg" alt="" />

                </div>

            }

            {active == 'Carl Sagan' &&

                <div>

                    <h1>{active}</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4_tiv9v964k?si=k7da2ByuXkyK6PVz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>Carl Sagan (1934–1996) foi um dos mais influentes astrônomos, astrofísicos, escritores e divulgadores científicos do século XX. Ele é amplamente reconhecido por suas contribuições à popularização da ciência e por seu trabalho no exploração do espaço, além de suas pesquisas em áreas como a astrobiologia e a cosmologia. Sagan teve um papel crucial na expansão do conhecimento público sobre o universo, além de ser um defensor da exploração espacial e da busca por vida extraterrestre.

                        Principais Contribuições de Carl Sagan:
                        Divulgação Científica:

                        Carl Sagan foi um mestre da divulgação científica, usando sua habilidade de comunicar conceitos complexos de maneira acessível e empolgante. Ele ajudou a despertar o interesse pelo cosmos em muitas pessoas ao redor do mundo.
                        Sua série de televisão "Cosmos: A Personal Voyage" (1980), que ele apresentou e coescreveu, foi uma das produções de maior sucesso na história da divulgação científica. A série foi assistida por centenas de milhões de pessoas em mais de 60 países e introduziu o público em geral aos conceitos fundamentais da astronomia, da física e da exploração espacial.
                        O livro que acompanha a série, "Cosmos", também se tornou um best-seller e é um dos livros de divulgação científica mais vendidos de todos os tempos.
                        Pesquisa sobre Vida Extraterrestre e Astrobiologia:

                        Sagan foi um dos pioneiros da astrobiologia, o estudo das condições sob as quais a vida pode surgir e existir no universo. Ele defendeu a ideia de que a vida poderia existir em outros planetas e esteve entre os primeiros a promover a busca por sinais de vida extraterrestre.
                        Ele foi uma figura chave no desenvolvimento do projeto SETI (Search for Extraterrestrial Intelligence), que busca sinais de rádio ou outras formas de comunicação de civilizações alienígenas.
                        Um de seus projetos mais notáveis foi a proposta de mensagens interestelares, como a Mensagem de Arecibo (1974), que foi enviada ao espaço com o objetivo de tentar estabelecer contato com possíveis civilizações alienígenas.
                        Exploração do Sistema Solar e Pesquisas Planetárias:

                        Sagan foi um importante cientista e líder de missões espaciais, particularmente no que diz respeito ao estudo de planetas do Sistema Solar. Ele trabalhou em várias missões da NASA, incluindo as sondas Mariner, Viking, Pioneer, Voyager e Galileo.
                        Ele foi instrumental no estudo da atmosfera de Vênus e no desenvolvimento da teoria de que Vênus poderia ser um planeta com uma temperatura muito elevada devido ao efeito estufa. Essa teoria foi fundamental para a compreensão dos climas planetários e contribuiu para a conscientização sobre os perigos do aquecimento global na Terra.
                        Sagan também teve um papel importante na missão Voyager 1 e Voyager 2, que enviaram imagens e dados sobre Júpiter, Saturno e seus respectivos sistemas de luas, ampliando imensamente nosso entendimento sobre esses planetas gigantes.
                        Teoria sobre a Catástrofe de Extinção dos Dinossauros:

                        Juntamente com outros cientistas, Sagan ajudou a popularizar a hipótese do impacto de asteroide para explicar a extinção dos dinossauros há cerca de 66 milhões de anos. De acordo com essa teoria, um asteroide de grande porte teria colidido com a Terra, causando mudanças climáticas catastróficas, como o bloqueio da luz solar e resfriamento global, que levaram à extinção em massa dos dinossauros.
                        Embora essa teoria tenha sido proposta por outros cientistas antes de Sagan, ele ajudou a reforçar e promover a ideia, que hoje é amplamente aceita como uma explicação viável para a extinção dos dinossauros.

                    </p>

                    <img className='img' src="/assets/images/uiverse-astro.jpg" alt="" />

                </div>

            }

            {active == 'Marie Curie' &&

                <div>

                    <h1>{active}</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PTdiKQEM58Q?si=eEeWUW6mHgMiNsgO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>Marie Curie (1867–1934) foi uma cientista de origem polonesa, naturalizada francesa, conhecida por suas pesquisas pioneiras em radioatividade e por ser a primeira pessoa a ganhar dois Prêmios Nobel em diferentes áreas científicas. Ela é uma das figuras mais emblemáticas da história da ciência e suas descobertas tiveram um impacto profundo nas áreas de física, química e medicina. Além disso, sua trajetória de vida inspirou muitas gerações de cientistas e foi um marco para as mulheres na ciência.

                        Principais Contribuições de Marie Curie:
                        Descoberta dos Elementos Radioativos:

                        Marie Curie, junto com seu marido, Pierre Curie, e o assistente Henri Becquerel, realizou pesquisas fundamentais sobre a radioatividade. Ela se tornou a primeira pessoa a usar o termo "radioatividade" para descrever os elementos que emitiam radiação espontânea.
                        Curie foi responsável pela descoberta de dois novos elementos químicos: o polônio (nomeado em homenagem à Polônia, seu país natal) e o radônio. Essas descobertas ajudaram a estabelecer as bases para a compreensão de fenômenos de radiação.
                        A descoberta do radônio, em particular, foi essencial para o estudo da radiação, pois esse elemento emitia radiações de alta energia e teve um impacto crucial no desenvolvimento da teoria da radioatividade.
                        Prêmio Nobel de Física (1903):

                        Em 1903, Marie Curie e seu marido Pierre Curie, junto com Henri Becquerel, receberam o Prêmio Nobel de Física pela descoberta da radioatividade. Becquerel foi premiado por sua descoberta da radiação espontânea nos átomos, enquanto os Curies foram reconhecidos pela pesquisa que levou à identificação de novos elementos radioativos.
                        Curie foi a primeira mulher a ganhar um Prêmio Nobel e fez história com essa conquista, abrindo caminho para outras mulheres na ciência.
                        Prêmio Nobel de Química (1911):

                        Em 1911, Marie Curie ganhou o Prêmio Nobel de Química por suas descobertas sobre a radioatividade, sendo a primeira mulher a receber um Nobel em Química. Ela foi premiada por sua contribuição na isolação do radônio e pela identificação das propriedades químicas de elementos radioativos, como o polônio e o radônio.
                        Curie se tornou a primeira pessoa a ganhar dois Prêmios Nobel em áreas científicas diferentes (Física e Química), uma conquista única na história dos Prêmios Nobel.
                        Aplicações Médicas da Radioatividade:

                        Marie Curie também foi pioneira no uso de radiação no tratamento de doenças, especialmente o câncer. Durante a Primeira Guerra Mundial, ela ajudou a estabelecer unidades móveis de radiologia para tratar os soldados feridos. Ela treinou enfermeiras para operar os equipamentos de raios-X e trabalhou ativamente em hospitais de campanha.
                        Além disso, a pesquisa de Curie abriu caminho para o desenvolvimento de terapias de radioterapia para o tratamento de câncer, que ainda são amplamente usadas na medicina moderna.
                        Pesquisa no Instituto Curie:

                        Em 1920, após a morte de seu marido Pierre Curie em um acidente, Marie Curie fundou o Instituto Curie, em Paris, que se tornou um centro de pesquisa de ponta sobre radioatividade e física. O instituto se tornou um dos mais importantes centros de pesquisa médica e científica do mundo.
                        O trabalho realizado no Instituto Curie contribuiu significativamente para o avanço no estudo da radiação e seus efeitos, além de ser uma base fundamental para os estudos de física nuclear.
                        Trabalho e Legado de Marie Curie:

                        Marie Curie dedicou sua vida à ciência, trabalhando em condições extremamente difíceis. Na época de suas descobertas, a radioatividade não era compreendida como uma ameaça à saúde, e ela própria sofreu sérios problemas de saúde devido à exposição prolongada à radiação. Acredita-se que a exposição à radiação tenha contribuído para a leucemia que a levou à morte em 1934.
                        Seu trabalho pioneiro foi uma contribuição fundamental para a evolução da física nuclear, além de ter dado início a várias outras linhas de pesquisa científica. Seu legado também foi fundamental para a abertura de portas para mulheres na ciência e na educação, em uma época em que o campo era predominantemente dominado por homens.
                        Impacto nas Mulheres na Ciência:

                        Marie Curie não só foi uma cientista brilhante, mas também um símbolo de superação e perseverança em um campo altamente competitivo e dominado por homens. Como mulher em um período de restrições sociais e educacionais, ela enfrentou desafios significativos. No entanto, seu trabalho e suas conquistas desafiou as normas da época e ajudaram a abrir portas para outras mulheres na ciência.
                        Ela foi uma das primeiras mulheres a ser admitida na Academia de Ciências de Paris, além de ser professora na Universidade de Sorbonne, onde ensinou e inspirou novas gerações de cientistas, incluindo mulheres.
                        Vida Pessoal:
                        Marie Sklodowska nasceu em 7 de novembro de 1867, em Varsóvia, Polônia, em uma família de educadores. Ela se mudou para Paris em 1891, onde estudou na Universidade de Paris (Sorbonne), fazendo um doutorado em Física.
                        Em 1895, ela casou-se com Pierre Curie, e juntos fizeram importantes descobertas na área de física. Após a morte prematura de Pierre, em 1906, Marie Curie continuou suas pesquisas, solidificando seu status como uma das maiores cientistas da história.
                        Curie teve duas filhas, Irène e Ève. Irène também se tornou uma renomada cientista e ganhou o Prêmio Nobel de Química em 1935, em reconhecimento ao seu trabalho sobre a radioatividade, seguindo os passos de sua mãe.
                        Legado:
                        Marie Curie é lembrada não apenas por suas descobertas científicas, mas também por sua dedicação à ciência e por quebrar barreiras em uma época em que poucas mulheres conseguiam ingressar em campos acadêmicos e científicos. Ela deixou um legado de persistência, integridade científica e um exemplo de como o trabalho incansável e a curiosidade podem levar a descobertas que mudam o mundo.
                        Além disso, ela foi uma figura de inspiração para muitas mulheres nas ciências, e sua vida e trabalho continuam a ser celebrados em várias partes do mundo. Institutos de pesquisa e prêmios foram nomeados em sua homenagem, e sua história serve como um exemplo de como a ciência pode ser conduzida com paixão e dedicação, independentemente das circunstâncias ou das dificuldades pessoais.
                        Marie Curie faleceu em 4 de julho de 1934, devido a complicações da exposição à radiação, mas seu legado continua vivo, sendo lembrada como uma das mais grandes cientistas de todos os tempos.



                    </p>

                    <img className='img' src="/assets/images/uiverse-astro.jpg" alt="" />

                </div>

            }

            {active == 'Stephen Hawking' &&
            
                <div>

                    <h1></h1>

                </div>
            
            }

        </div>

    );

}