import React from 'react';
import { CartItem, Column } from '@/app/lib/definitions';

type TableProps = {
  className?: string;
  data: CartItem[];
  columns: Column[];
};

const Table: React.FC<TableProps> = ({ className, data, columns }) => {
  const rows = data.map(item => {
    console.log("🚀 ~ file: Table.tsx:12 ~ rows ~ item:", item)
    
    return columns.map(column => {
      switch (column.columnId) {
        case 'name':
          return item.name;
        case 'quantity':
          return item.quantity;
        case 'pricePerItem':
          return item.pricePerItem;
        case 'total':
          return item.total;
        // Add other cases based on the properties of CartItem
        default:
          return null; // or some default value
      }
    });
  });

  return (
    <div className="overflow-x-auto">
      <table className={`w-full ${className}`}>
        <thead>
          <tr>
            {columns.map(({ columnId, header }) => (
              <th key={columnId} className="px-4 py-2 bg-gray-800 text-white border-b border-gray-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 border-b border-gray-300 text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
