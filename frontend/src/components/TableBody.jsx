import React from "react";

export const TableBody = ({ cards, columns }) => {
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
                </tr>
            ))}
        </tbody>
    )
}