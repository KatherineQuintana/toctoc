import React from 'react'
import { useMemo } from 'react';
import { Line } from "react-chartjs-2";
import {
   Chart as chartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   Filler,
} from "chart.js";


chartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   Filler,
);



const events = [5, 2, 4, 2, 3];
const labels = [1, 2, 3, 4, 5];

const options ={
    fill: true,
    responsive: true,
    scales :{
        y: {
            min: 0,
        },
    },
}

const Graphics = () => {
    const data = useMemo(function(){
        return{
            datasets: [
                {
                    label: "Eventos",
                    data: events,
                    tension: 0.5,
                    borderColor: 'rgb(0, 0, 255)',
                    pointRadius: 6,
                    pointBackgroundColor: 'rgb(0, 0, 255)',
                    backgroundColor: 'rgb(153, 229, 255, 0.7)',
                },
            ],
            labels,
        }
    }, []);

    return <Line data ={data} options={options} />;
}

export default Graphics