import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

export const TableBootstrap = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/get_table_data', {
        params: {
          limit: 10 // Giới hạn chỉ lấy 10 dòng dữ liệu
        }
      });
      setData(response.data.slice(0, 10)); // Chỉ lấy 10 dòng đầu tiên từ dữ liệu API
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatTime = (time) => {
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
  };

  return (
    <Table className='table table-striped'>
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Time</th>
          <th scope="col">Angle</th>
          <th scope="col">Sound</th>
          <th scope="col">Command</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td style={{ width: '400px' }}>{formatTime(item.time)}</td>
            <td>{item.currentangle}</td>
            <td>{item.prediction}</td>
            <td style={{ width: '300px' }}>{item.command ? item.command : 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
