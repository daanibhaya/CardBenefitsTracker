import { useState } from 'react'
import './App.css'
import { CardRow } from './components/CardRow.jsx'

export const App = () => {
  const [cards, setCards] = useState([
    { name: 'Discover', grocery: '1%', restaraunt: '5%', amazon: '-' },
    { name: 'Chase', grocery: '2%', restaraunt: '1%', amazon: '-'},
    { name: 'Citi', grocery: '1%', restaraunt: '-', amazon: '5%'}
  ]);
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Credit Card</th>
            <th>Grocery</th>
            <th>Restaraunt</th>
            <th>Amazon</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card, index) => (
            <CardRow card={card}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}