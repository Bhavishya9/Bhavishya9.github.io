"use client";

import React, { useState } from 'react';
import { useTable, Column, useGlobalFilter } from 'react-table';
import styles from './Table.module.css'; // For better styling

// Define the props for the table
interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

// A simple search filter input component
const GlobalFilter = ({ globalFilter, setGlobalFilter }: any) => {
  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel}>Search:</label>
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        placeholder="Type to search..."
        className={styles.searchInput}
      />
    </div>
  );
};

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  const [filterInput, setFilterInput] = useState("");

  // Use the useTable hook with the useGlobalFilter hook for searching
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter // This enables the global filtering
  );

  return (
    <div>
      <GlobalFilter
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`header-group-${headerGroupIndex}`}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th {...column.getHeaderProps()} key={`header-column-${columnIndex}`}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`row-${rowIndex}`}>
                {row.cells.map((cell, cellIndex) => (
                  <td {...cell.getCellProps()} key={`cell-${rowIndex}-${cellIndex}`}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
