import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TableHead } from "../components/TableHead";

const columns = [
    { label: 'Grocery', accessor: 'grocery' },
    { label: 'Restaraunt', accessor: 'restaraunt' },
    { label: 'Amazon', accessor: 'amazon' }
]

describe('Table column header', () => {
    it ('displays correct column names', () => {
        render(<TableHead columns={columns} />);
        expect(screen.getByText('Restaraunt')).toBeInTheDocument();
    })
})