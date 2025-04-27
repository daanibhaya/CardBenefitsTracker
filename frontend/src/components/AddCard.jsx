import react, { useState } from "react";
import uuid from 'react-native-uuid'

export const AddCard = ({ columns, addCard }) => {
    const [inputs, setInputs] = useState({id: uuid.v4()})
    const handleChange = (e) => {
        setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
        addCard(inputs)
        setInputs({id: uuid.v4()})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="Name of Card" onChange={handleChange}/>
            </div>
           {columns.map((column, index) => (
            <div key={index}>
                <label for={column.accessor}>{column.label}</label>
                <input type="number" name={column.accessor} min={0} max ={9} value={inputs[column.accessor]} onChange={handleChange}/>
            </div>
           ))}
           <button type="submit" >Add</button>
        </form>
    )
}