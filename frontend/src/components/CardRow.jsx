import react from "react";

export const CardRow = ({ card }) => {
    return (
        <tr>
            <td>{card.name}</td>
            <td>{card.grocery}%</td>
            <td>{card.restaraunt}%</td>
            <td>{card.amazon}%</td>
        </tr>
    )
}