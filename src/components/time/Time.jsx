import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
export const Time = () => {
    const [myTime, setMyTime] = useState([]);

    const getTime = async () => {
        try {
            const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/get_table_data');
            setMyTime(response.data);
            // console.log("data", response.data[0].time);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getTime();
    }, [myTime]);

    const formatTime = (time) => {
        return moment(time).format('YYYY-MM-DD HH:mm:ss');
    };

    return (
        <div>
            Time: {myTime.length > 0 ? formatTime(myTime[0].time) : ''}
        </div>
    )
}