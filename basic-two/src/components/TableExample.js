import React, { Component } from 'react'
import { useTable } from 'react-table';


function TableExample() {
    const data = React.useMemo(() => [
        { name: 'Huzaifa', age: 23 },
        { name: 'Waleed', age: 21 },
        { name: 'Abubakar', age: 20 },
        { name: 'Saad', age: 27 },
        { name: 'Usama', age: 23 },
        { name: 'Arsalan', age: 24 },
    ], [])
    const columns = React.useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Age',
            accessor: 'age'
        }
    ], [])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })
    return (
        <div>
            <table {...getTableProps()} style={{ border: 'solid 1px blue',width:'50%',margin:'0px auto',marginTop:100 }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        background: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                                background: 'papayawhip',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TableExample;