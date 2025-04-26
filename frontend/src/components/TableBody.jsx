import React from "react";

export const TableBody = ({ cards, columns, deleteCard, cardEdit }) => {
    return (
        <tbody>
            {cards.map((card) => (
                <tr key={card.id}>
                    <td>{card.name}</td>
                    {columns.map(({accessor}) => (
                        <td key={accessor}>
                            {card[accessor] ? card[accessor] + '%' : '-'}
                        </td>
                    ))}
                    <td>
                        <button onClick={() => cardEdit(card)}>E</button>
                        <button onClick={() => deleteCard(card.id)}>D</button>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}