import Header from '../../Componentes/Header/Header'
import Textos from '../../Componentes/Textos/Textos'
import Footer from '../../Componentes/Footer/Footer'
import corpo1 from '../../assets/corpo1.png'
import desenho from '../../assets/desenho.jpeg'

import './inicio.css'




function Inicio() {
    return(
        <>
            <Header >
            Vamos falar sobre a invisibilidade e a falta de acesso de gordes maiores?
            </Header>
            <div className='titulo-h2'>
                <b>Texto de Cíntia Lira</b>
            </div>
            <section className='conteudo'>
                <div className='texto'>
                    <Textos>
                        Acessibilidade. De acordo com o Google, acessibilidade é a “facilidade 
                        na aproximação, no tratamento ou na aquisição”. Ser gordo numa sociedade 
                        gordofóbica é não ter facilidade alguma na aproximação, aquisição e muito
                        menos tratamento. Tudo, de espaços a conceitos, é projetado pensando em 
                        corpos magros. Nada é pensado para atender corpos gordos, e a sociedade 
                        não só não nos deixa esquecer disso, como também nos culpa, afinal, “é 
                        só emagrecer”.
                        Ainda assim, o debate sobre acessibilidade para pessoas gordas continua 
                        sendo soterrado, mesmo 
                        dentro da chamada "militância gorda" e, quando surge algum discurso a 
                        respeito, é dos mais rasos. Muito se fala em roupas, por exemplo, mas 
                        raramente sobre a roupa como um direito básico, e sim sobre roupa como 
                        objeto de consumo. De fato, roupa é um fator importante na construção de 
                        identidade dos indivíduos, mas antes de conquistarmos o direito de ter 
                        estilo, temos que conquistar o direito de todas as pessoas gordas se 
                        vestirem para cobrir a nudez e ao menos conseguirem sair de casa. 
                    </Textos>
                    <img src={corpo1} className='img2' alt="ilustração trondo de um corpo gordo nú"/>
                    <Textos>
                        O que temos no mercado de moda plus size atualmente é claramente insuficiente 
                        para atender às necessidades da comunidade gorda, mesmo as gordas menores, visto 
                        que o mercado se concentra no eixo Rio-São Paulo e no sul do país. Porém, é 
                        importante pensar que poucas lojas e marcas sequer fabricam roupas acima do manequim 
                        54, sejam bonitas ou feias. Existem poucas marcas brasileiras que se propõe a atender 
                        o público 60+ e, mesmo essas, geralmente se limitam ao tamanho 66. 
                    </Textos>
                    <img className='img-inicio' src="http://meusonhar.com.br/wp-content/uploads/2015/02/sonhar-com-catraca-de-onibus.jpg"  />
                    <Textos>
                        Igualmente limitado é o debate sobre transporte público: o aspecto mais comentado por 
                        todas as pessoas que abordam o tema são as catracas e a dificuldade de passar por elas, 
                        quando para uma parcela considerável da comunidade gorda, não é uma questão de dificuldade 
                        e sim de impossibilidade, além do constrangimento de pedir para descer pela frente ou entrar 
                        por trás, já que muitos motoristas e cobradores proíbem que isso seja feito, pelo simples 
                        prazer de exercer poder sobre alguém.
                    </Textos>
                    <img className='img-inicio' src=' https://thumbs.dreamstime.com/b/cadeira-no-parque-de-divers%C3%B5es-56970693.jpg' />
                    <Textos>
                        Contudo, mesmo quem goza de recursos para se vestir e transitar pela cidade esbarra em diversas questões, 
                        como por exemplo: para onde ir? Quais espaços lhes cabe?
                    </Textos>
                    <img className='img-inicio' src='https://www.squema.com/image/cache/data/Auditorio/poltrona-cadeira-para-auditorio-sense-com-assento-rebativel-600x600.jpg' />
                    <Textos>
                        Como sempre é abordado, os espaços raramente têm cadeiras que aguentam nosso peso, seja em salões de cabeleireiro, 
                        festas, baladas, entrevistas de emprego, cinema ou teatro.
                        Menos pessoas ainda falam sobre brinquedos de parques de diversão que ou não suportam nosso peso ou têm cintos de 
                        segurança que não chegam nem perto de fechar no corpo gordo. E absolutamente ninguém fala sobre a preocupação com 
                        camas de motel! E por que não falam? Porque falar sobre isso seria admitir que temos necessidades diferentes das 
                        pessoas magras... e fomos ensinados que isso é errado, que isso nos faz fracos!
                    </Textos>
                    <img className='img-inicio' src='https://www.domusweb.it/content/dam/domusweb/it/design/gallery/2018/09/06/gli-assoluti-20-sedie-imperdibili/totale2.jpg.foto.rmedium.png' />
                    <Textos>
                        Pessoas gordas precisam pensar e pesquisar muito bem todos os espaços que pretendem frequentar ou estarão sujeitas 
                        a constrangimentos. Mesmo dentro de suas próprias casas, especialmente casas de aluguel, muitas pessoas gordas não 
                        cabem dentro de seus banheiros, ou sofrem com vasos sanitários pequenos e frágeis. O mesmo acontece em banheiros de 
                        espaços coletivos, desde um restaurante a uma universidade. 
                    </Textos>
                    <img className='img-inicio' src='https://images.homify.com/c_fill,f_auto,q_0,w_740/v1448030041/p/photo/image/1133209/DSC_2833.jpg' />
                    <Textos>
                        Uma das discussões mais imprescindíveis é, definitivamente, a falta de acesso a saúde imparcial e humana; a 
                        violência médica praticada contra determinados corpos. Acredito que toda pessoa gorda já tenha sido moralmente 
                        repreendida por médicos ao menos uma vez na vida. Entrar sentindo dor de cabeça e sair com um encaminhamento 
                        para bariátrica é de praxe. Muitos médicos abertamente se recusam a atender pessoas gordas a não ser que elas 
                        emagreçam ou as atende de mal jeito, medicando-as e dispensando-as sem sequer examiná-las a fundo, seja por 
                        mero descaso ou pelo fato de que a gritante maioria dos hospitais não têm equipamentos para atender corpos 
                        gordos, desde balanças e macas, a aparelhos de raio-X. Com isso, muitas doenças não são diagnosticadas até que 
                        seja tarde demais para tratar, levando a quadros que poderiam ter sido evitados com o mínimo de perícia. Também
                        não são poucos os relatos de pessoas gordas que passaram por cirurgias invasivas sem explicações e sem anestesia, 
                        simplesmente porque o médico "achou" que não faria efeito por causa do peso do paciente.
                    </Textos>
                    <img className='img-inicio' src='https://wp.rededorsaoluiz.com.br/wp-content/uploads/2021/01/ressonancia-Brasil.jpg' />
                    <Textos>
                        Muitos podem perguntar: “o que você espera que seja feito sobre isso?” e os mais intolerantes podem até dizer: “se 
                        está incomodada, emagreça!”. Antes de tudo, temos que abolir o pensamento de que indivíduos devem mudar para se 
                        adequar às coisas. A ideia de que uma pessoa deva emagrecer para caber em espaços e coisas que são projetáveis e 
                        moldáveis para o benefício humano é estapafúrdia. Uma pessoa gorda tem o direito de sê-lo e deve ser respeitada em 
                        todos os âmbitos de sua existência sem a pressão de mudar seu corpo.
                    </Textos>
                    <img src={desenho} className='img2' alt="ilustração de uma mulher gorda sentada, meditando"
                            />
                    <Textos>
                        Ao longo da história da humanidade ficou comprovado que seres humanos são completamente capazes de pensar em soluções 
                        para amenizar problemas cotidianos. A questão é que, quando se trata de acessibilidade para minorias, não só em 
                        relação às pessoas gordas, mas também às pessoas com deficiência, simplesmente não há empenho algum para que essas 
                        soluções sejam encontradas. Colocam o dinheiro (vide o sucateamento de comodidades) a frente do bem estar de seres 
                        humanos. É preciso que essas pessoas passem a ser vistas com empatia, passem a ser enxergadas como seres humanos 
                        que merecem respeito e acesso a tudo que está disponível para o resto da sociedade. Ao público geral cabe usar seus 
                        privilégios para cobrar que a projeção dos espaços seja mais justa e, a quem está à frente da construção da sociedade 
                        (engenheiros, designers, médicos, professores etc), cabe uma visão sensível sobre as necessidades dos mais diversos 
                        tipos de corpos, inclusive o corpo gordo — vivos ou mortos!
                    </Textos>
                </div>
                <div className='div-a'>
                    <button className='ancora'>
                        <a href="https://amagodaloucura.blogspot.com/2019/05/a-acessibilidade-do-corpo-gordo.html?m=1" target="_blank"><b>Leia o texto completo</b></a>
                    </button>
                </div>
            </section>
            <footer>
                <Footer />                
            </footer>
                    
        </>
       
    )
}





export default Inicio