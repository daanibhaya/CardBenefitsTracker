import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const cardData = [
  { name: "Discover", grocery: 1, restaraunt: 5 },
  { name: "Chase", grocery: 2, restaraunt: 1 }
]

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="cardTable">
        <table>
          <tr>
            <th>Card</th>
            <th>Grocery</th>
            <th>Restaraunt</th>
          </tr>
          {cardData.map((val, key) => {
            return (
              <tr key={key}>
                <td className="cardName">{val.name}</td>
                <td>{val.grocery}%</td>
                <td>{val.restaraunt}%</td>
              </tr>
            )
          })}
        </table>
      </div>
  );
}

export default App
