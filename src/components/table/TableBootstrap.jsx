import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import moment from 'moment';

export const TableBootstrap = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/get_table_data');
      setData(response.data);
      // console.log("data", response.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  const formatTime = (time) => {
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
};

  return (
    <Table className='table table-striped'>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Thời gian</th>
          <th scope="col">Góc</th>
          <th scope="col">Âm thanh</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td style={{width:'400px'}}>{formatTime(item.time)}</td>
            <td >{item.currentangle}</td>
            <td style={{width:'300px'}}>{item.prediction}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    
  )
}
