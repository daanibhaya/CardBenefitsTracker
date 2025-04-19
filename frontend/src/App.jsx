import { useState } from 'react'
import uuid from 'react-native-uuid'
import './App.css'
import { TableHead } from './components/TableHead.jsx'
import { TableBody } from './components/TableBody.jsx'

export const App = () => {
  const [cards, setCards] = useState([
    { id: uuid.v4(), name: 'Discover', grocery: 1, restaraunt: 5, amazon: 0 },
    { id: uuid.v4(), name: 'Chase', grocery: 2, restaraunt: 1, amazon: 0 },
    { id: uuid.v4(), name: 'Citi', grocery: 1, restaraunt: 0, amazon: 5 },
    { id: uuid.v4(), name: 'test1', grocery: 2, restaraunt: 0, amazon: 0 }
  ]);
  const columns = [
    { label: 'Grocery', accessor: 'grocery' },
    { label: 'Restaraunt', accessor: 'restaraunt' },
    { label: 'Amazon', accessor: 'amazon' }
  ]
  
  return (
    <div>
      <table>
        <TableHead columns={columns} />
        <TableBody cards={cards} columns={columns} />
      </table>
    </div>
  )
}