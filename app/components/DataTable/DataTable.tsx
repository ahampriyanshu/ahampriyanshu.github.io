'use client';
import React from 'react';
import styles from './DataTable.module.scss';

const generateRandomData = (count: any) => {
  return [
    {
      selected: false,
      starred: false,
      sender: 'This is a very long name',
      message: 'Hello, world!',
      time: '3:00 PM',
    },
    {
      selected: false,
      starred: false,
      sender: 'Jane Doe',
      message: 'Hello, world!',
      time: '3:00 PM',
    },
    {
      selected: false,
      starred: false,
      sender: 'John Smith',
      message: 'Hello, world!',
      time: '3:00 PM',
    },
    {
      selected: false,
      starred: false,
      sender: 'Jane Smith',
      message: 'Hello, world!',
      time: '3:00 PM',
    },
  ];
};

const DataTable = () => {
  const data = generateRandomData(10); // Replace 10 with the desired number of rows

  return (
    <table className={styles.data_table}>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className={styles.icon_cell}>Select</td>
            <td className={styles.name_cell}>{item.sender}</td>
            <td className={styles.msg_cell}>
              <div>{item.message}</div>
              <div>{item.time}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
