import { useState } from 'react'
import uuid from 'react-native-uuid'
import './App.css'
import { TableHead } from './components/TableHead.jsx'
import { TableBody } from './components/TableBody.jsx'
import { AddCard } from './components/AddCard.jsx'
import { Modal } from './components/Modal.jsx'

export const App = () => {
  const [cards, setCards] = useState([
    { id: uuid.v4(), name: 'Discover', grocery: 1, restaraunt: 5, amazon: 0 },
    { id: uuid.v4(), name: 'Chase', grocery: 2, restaraunt: 1, amazon: 0 },
    { id: uuid.v4(), name: 'Citi', grocery: 1, restaraunt: 0, amazon: 5 },
    { id: uuid.v4(), name: 'test1', grocery: 2, restaraunt: 0, amazon: 0 }
  ]);
  const columns = [
    { label: 'Restaraunt', accessor: 'restaraunt' },
    { label: 'Grocery', accessor: 'grocery' },
    { label: 'Amazon', accessor: 'amazon' },
  ]
  const [adding,setAdding] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [cardEdit, setCardEdit] = useState(null)

  const toggleAdding = () => {
    setAdding(!adding)
  }
  const addCard = (newCard) => {
    setCards([...cards, newCard])
    toggleAdding()
  }
  const deleteCard = (id) => {
    setCards(cards.filter(((card) => card.id !== id)))
  }
  const handleCardEdit = (id) => {
    setCardEdit(id)
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  
  return (
    <div>
      <h1>Cashback Benefits</h1>
      <table>
        <TableHead columns={columns} />
        <TableBody cards={cards} columns={columns} deleteCard={deleteCard} cardEdit={handleCardEdit}/>
      </table>
      {modalOpen && <Modal closeModal={closeModal} columns={columns} cardEdit={cardEdit} />}
      {adding ? (
        <div>
          <AddCard columns={columns} addCard={addCard} />
        </div>) : 
        (<button onClick={toggleAdding}>Add</button>
      )}
      
    </div>
  )
}