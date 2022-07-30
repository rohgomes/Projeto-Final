import Header from '../../Componentes/Header/Header'
import Textos from '../../Componentes/Textos/Textos'
import Footer from '../../Componentes/Footer/Footer'
import './autora.css'

function Autora() {
    return(
        <>
            <Header>
                Conheça a IN.Gorde e a Desenvolvedora da página
            </Header>

            <div className='div-img-fim'>
                <img src="../src/assets/logo.png" className='img3' alt="logo da página"/>
            </div>
       
            <Textos>
                A IN.Gorde tem o intuito de dar visibilidade para gordes maiores que trabalham de forma autônoma e 
                marcas pequenas que atendem as necessidades desses corpos. Assim como queremos lutar contra a falta 
                de acessibilidade e os direitos básicos que nos são negados de forma tão covarde e cruel. A principal 
                função desta página é acolher gordes maiores, disponibilizar um espaço para que suas dores, medos, raivas,
                insatisfações e todos os outros sentimentos, sejam bons ou ruins sejam lidos. Que seja um ambiente seguro
                para trocas e partilhas.
                Não é uma página "romantizadora da obesidade", ou talvez seja. 
                Gordes maiores existem e não precisam odiar seus corpos e muito menos viver as margens da sociedade.
            </Textos>
            <div className='div-img-fim'>
                <img src="../src/assets/robertag.jpeg" className='img4' alt="foto da desenvolvedora da página"/>
            </div>
            <Textos>
                Eu sou Maria Roberta, gorda maior, mulher cis, lésbica, mãe de pet e desenvolvedora front-end em formação e atualmente
                trabalho como professora de reforço escolar de forma autônoma. Sou de Olinda - Pernambuco.
                Criei a IN.Gorde como meu projeto final do curso da Todas em Tech da Reprograma. 
                Espero que essa página leve até você um pouco de acolhimento, amor e paz. Apesar de saber como é difícil ser 
                gorde nesse país.
                Resistiremos!

            </Textos>

            <footer>
                <Footer/>
            </footer>
        </>    
        
    )
}

export default Autora