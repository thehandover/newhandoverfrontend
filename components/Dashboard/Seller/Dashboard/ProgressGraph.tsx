import React, { useEffect } from 'react'
import { Chart, registerables } from 'chart.js';

const ProgressGraph = () => {

    useEffect(() => {
        let ctx: any = document.getElementById('myChart');
        Chart.register(...registerables);

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Weekly Bids',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgb(75, 192, 192)',
                    fill: false,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, [])

    return (
        <canvas id="myChart" width="200" height="70"></canvas>
    )
}

export default ProgressGraph