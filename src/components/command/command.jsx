import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
export const Command = () => {
    const [myCommand, setMyCommand] = useState([]);

    const getCommand = async () => {
        try {
            const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/get_table_data');
            setMyCommand(response.data);
            // console.log("data", response.data[0].prediction);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getCommand();
    }, [myCommand]);

    return (
        <div>
            Command: {myCommand.length>0 ? myCommand[0].command : ''}
        </div>
    )
}