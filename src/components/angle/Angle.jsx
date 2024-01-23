import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
export const Angle = () => {
    const [myAngle, setMyAngle] = useState([]);

    const getAngle = async () => {
        try {
            const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/get_table_data');
            setMyAngle(response.data);
            // console.log("data", response.data[0].currentangle);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getAngle();
      }, [myAngle]);
      
    return (
        <div>
            Góc: {myAngle.length>0 ? myAngle[0].currentangle: ''} độ
        </div>
    )
}