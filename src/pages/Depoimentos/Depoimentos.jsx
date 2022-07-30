import { useState, useEffect } from 'react'
import Header from '../../Componentes/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import Textos from '../../Componentes/Textos/Textos'
import Footer from '../../Componentes/Footer/Footer'

import './depoimentos.css'

function Depoimentos() {
  const getLocalList = () => {
    let items = localStorage.getItem('list')
    if(items) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }
  const [list, setList] = useState(getLocalList)
  const [newItem, setNewItem] = useState('')

  function handleCreateNewItem() {
    const item = {
      id: Math.random(),
      title: newItem
    }

    if (item.title === '') {
      return
    }

    setList([...list, item])
    setNewItem('')
  }

  function handleRemoveItem(id) {
    const itemsFiltered = list.filter(item => item.id !== id)
    setList(itemsFiltered)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return(
  <>
    <Header>
      Esse é um espaço seguro! Compartilha aqui teus desabafos, relatos, sentimentos e momentos.
    </Header>
    <div className='titulo-h2'>
      <b>Espaço destinado a gordes maiores!</b>
    </div>
    <section className='depoimentos'>
      <div></div>

    </section>
    <section className="list">
      <header>
        <div className="input-container">
          <input 
            type="text"
            placeholder="Digite aqui..."
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
          <div className="add-container">
            <button 
              className="add-task" 
              type="submit" 
              onClick={handleCreateNewItem}
              >
                <FiPlus size={16} color="#fff" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className='div-relato'>
          <div className='relato'>
            <p>Eu tenho transtornos de humor e personalidade (borderline e bipolaridade), eu tentei fazer faculdade de pedagogia, fiz metade do curso mas desisti pq eu nunca consegui um estagio, as pessoas me mandavam embora quando me viam pq eu sou gorda maior. ninguem queria me contratar. Eu só desisti. Fiquei um tempo sem conseguir fazer nada, piorei dos transtornos. Ass: Danielle</p>
          </div>
          <div className='relato1'>
            <p>Eu tenho pânico de andar de ônibus. Uma vez, o motorista não me deixou descer pela frente, me obrigou a passar. Eu disse que era apertado e que não conseguiria e ele disse que eu só desceria por trás. Chorei desesperada e no ônibus me olharam, mas ninguém me ajudou e eu não tinha forças mais para justificar que existe uma lei que me permite descer pela frente.
              Simplesmente passei a catraca e fiquei muito imprenssada e aqueles segundos pareciam eternos. As lágrimas escorriam sem parar, mas eu estava sozinha.Todos me olhavam esperando o que aconteceria. Me machuquei e passei dias com hematomas roxos e muita dor. Ass: Roberta
            </p>
          </div>
        </div>
        <ul className="list-items">
          {
            list.map(item => {
              return(
                <li key={item.id}>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <button 
                    className="remove-task" 
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FiTrash2 size={16} />
                  </button>
                </li>
              )
            })
          }
        </ul>
      </main>
    </section>
    <footer>
      <Footer/>
    </footer>
  </>
  
 )
}

   
export default Depoimentos