import {Chart as ChartJS, registerables} from "chart.js";
import {Flex} from "@chakra-ui/react";
import {Line} from "react-chartjs-2";

ChartJS.register(...registerables);

const example = [
    {date: 'May 9, 2024', clients: 100000},
    {date: 'Jun 9, 2024', clients: 150000},
    {date: 'Jul 9, 2024', clients: 200000},
    {date: 'Aug 9, 2024', clients: 250000},
    {date: 'Sep 9, 2024', clients: 300000},
    {date: 'Oct 9, 2024', clients: 400000},
    {date: 'Nov 9, 2024', clients: 500000},
    {date: 'Dec 9, 2024', clients: 550000},
    {date: 'Jan 9, 2025', clients: 600000},
    {date: 'Feb 9, 2025', clients: 650000},
    {date: 'Mar 9, 2025', clients: 750000},
    {date: 'Apr 9, 2025', clients: 900000},
];
const labels = example.map(({date}) => date);
const data = example.map(({clients}) => clients);

const LineChartDetail = () => {
    return (
        <Flex h="400px">
            <Line
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                            intersect: false,
                            mode: 'index',
                            external: (context) => {
                                let tooltipEl = document.getElementById('chartjs-tooltip');
                                if (!tooltipEl) {
                                    tooltipEl = document.createElement('div');
                                    tooltipEl.id = 'chartjs-tooltip';
                                    tooltipEl.innerHTML = '<table></table>';
                                    document.body.appendChild(tooltipEl);
                                }

                                const tooltipModel = context.tooltip;
                                if (tooltipModel.opacity === 0) {
                                    tooltipEl.style.opacity = 0;
                                    return;
                                }

                                if (tooltipModel.body) {
                                    const titleLines = tooltipModel.title || [];
                                    const bodyLines = tooltipModel.body.map(b => b.lines);

                                    tooltipEl.innerHTML = `
                                        <div class="tooltip-chart-box">
                                            <div class="tooltip-date-label">${titleLines[0]}</div>
                                            <div style="color: white; font-size: 12px;">Total CLIENTS</div>
                                            <div style="color: #00FF00; font-size: 16px; font-weight: bold;">${bodyLines[0]}</div>
                                        </div>
                                    `;
                                }

                                const position = context.chart.canvas.getBoundingClientRect();
                                tooltipEl.style.opacity = 1;
                                tooltipEl.style.position = 'absolute';
                                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                                tooltipEl.style.pointerEvents = 'none';
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: '#49B267',
                                font: {
                                    size: 10,
                                },
                            },
                        },
                        y: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: '#49B267',
                                font: {
                                    size: 10,
                                },
                                padding: 10,
                                callback: function(value) {
                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                }
                            },
                        },
                    },
                    elements: {
                        line: {
                            tension: 0.3,
                        },
                        point: {
                            radius: 0,
                            hoverBackgroundColor: '#071009',
                            hoverBorderColor: '#69FF93',
                            hoverBorderWidth: 2,
                            pointStyle: 'rect',
                        },
                    },
                    hover: {
                        mode: 'index',
                        intersect: false,
                    },
                }}
                data={{
                    labels,
                    datasets: [
                        {
                            data,
                            fill: true,
                            borderColor: '#69FF93',
                            backgroundColor: '#003300',
                        },
                    ],
                }}/>
        </Flex>
    )
}

export default LineChartDetail;