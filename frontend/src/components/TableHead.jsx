import React from "react";

export const TableHead = ({ columns }) => {
    return (
        <thead>
            <tr>
                <th>Credit Card</th>
                {columns.map((column) => (
                    <th key={column.accessor}>{column.label}</th>
                ))}
                <th>Actions</th>
            </tr>
        </thead>
    )
}