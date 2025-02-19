import { useMemo, useState } from 'react'
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import './App.css'

type Card = {
  name: string;
  grocery: string;
  restaraunt: string;
  amazon: string;
};
const data: Card[] = [
  { name: 'Discover', grocery: '1%', restaraunt: '5%', amazon: '-' },
  { name: 'Chase', grocery: '2%', restaraunt: '1%', amazon: '-'},
  { name: 'Citi', grocery: '1%', restaraunt: '-', amazon: '5%'}
];
const App = () => {  

  const columns = useMemo<MRT_ColumnDef<Card>[]>(
    () => [
      { accessorKey: 'name',
        header: 'Name',
      },
      { accessorKey: 'grocery',
        header: 'Grocery'
      },
      { accessorKey: 'restaraunt',
        header: 'Restaraunt'
      },
      { accessorKey: 'amazon',
        header: 'Amazon'
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
}

export default App
