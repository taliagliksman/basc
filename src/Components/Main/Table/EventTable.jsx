
import React from 'react';
import { useTable } from 'react-table';

function EventTable() {

 const data = React.useMemo(
     () => [
       {
         Date: '5/12/2022',
         Location: 'Brisbane Olympic Pool',
         Event: 'Competition - all swimmers over 17 that joined the club before March 2022',
       },
       {
         Date: '19/12/2022',
         Location: 'Bendigo RSL Club',
         Event: 'Fundraising and Christmas Party. Remember to take a name for Chris Kringle from reception (no more than $20).',
       },
       {
         Date: '23/01/2023',
         Location: 'BASC',
         Event: 'Showcase - under 14 - all Performers and their families are invited for free. Tickets are sold for others',
       },
       {
        Date: '17/02/2023',
        Location: 'Karina Club - Bendigo',
        Event: 'Ms Olga - Birthday Party. Everybody are welcome for a pot luck. Bring a dish to share. (no presents are needed :) )',
      },
     ],
     []
 )

 const columns = React.useMemo(
     () => [
       {
         Header: 'Event',
         accessor: 'Event', // accessor is the "key" in the data        
       },
       {
         Header: 'Location',
         accessor: 'Location',
       },
       {
         Header: 'Date',
         accessor: 'Date', // accessor is the "key" in the data
       },
     ],
     []
 )

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
 } = useTable({ columns, data })

 return (
     <div>
       <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
         <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps()}
                       style={{
                        borderBottom: 'solid 3px black',
                        color: 'white',
                        padding: '10px',
                        border: 'solid 1px white',
                        textAlign: 'left',
                        fontSize: '20px',
                        backgroundColor: 'rgb(0, 69, 90)',
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
                            border: 'solid 1px white',
                            textAlign: 'left',
                            fontSize: '14px',
                            backgroundColor: 'rgb(0, 69, 90, 0.7)',
                            color: 'white'
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
 );
}

export default EventTable;