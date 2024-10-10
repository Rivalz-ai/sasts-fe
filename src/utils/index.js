import HomeIcon from '/assets/home.svg';

const DISCORD_URL = 'https://x.com/Rivalz_AI';
const TELEGRAM_URL = 'https://discord.com/invite/rivalzai';
const X_URL = 'https://t.me/RivalzAI_Ann';
const RIVALZ_LANDING_PAGE_URL = 'https://rivalz.ai';

const BreadCrumb = [
    { icon: HomeIcon, name: 'Home', href: `${RIVALZ_LANDING_PAGE_URL}` },
];

const LineChartOptions = {
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
                                            <div class="client-text">Total CLIENTS: ${bodyLines[0]}</div>
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
}

export {
    DISCORD_URL,
    TELEGRAM_URL,
    X_URL,
    RIVALZ_LANDING_PAGE_URL,
    BreadCrumb,
    LineChartOptions,
}